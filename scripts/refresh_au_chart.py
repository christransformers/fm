"""Weekly AU Top 50 refresh for fusemusic.com.au (Hermes cron job, no_agent).

Flow: fetch ARIA Top 50 Singles -> parse rank/title/artist + ARIA's own official
YouTube video IDs (data-video-id; fallback: YouTube search for the few items
that lack one) -> if the chart changed vs data/au-top50.json, rewrite the JSON,
bump cache versions (index.html ?v=, chart.js fetch, sw.js CACHE_NAME), commit
and push with GITHUB_TOKEN from C:\\Users\\cruis\\code\\.env.

Cron output contract (no_agent job): print NOTHING when unchanged (silent
watchdog); one line when shipped; a FAIL line on error.

Run modes:
  (no args)    full refresh + push when changed
  --selftest   parse + compare + report, never writes or pushes
"""
import datetime as _dt
import html as _html
import json
import os
import re
import subprocess
import sys
import time
import urllib.parse
import urllib.request

REPO = r"C:\Users\cruis\code\fm"
ENV_FILE = r"C:\Users\cruis\code\.env"
ARIA_URL = "https://www.aria.com.au/charts/singles-chart"
JSON_PATH = os.path.join(REPO, "data", "au-top50.json")
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36")
MONTHS = {m: i for i, m in enumerate(
    ["January","February","March","April","May","June","July","August",
     "September","October","November","December"], 1)}

ITEM_RE = re.compile(r'<div class="c-chart-item\s+[^"]*"[^>]*>', re.S)
VID_RE = re.compile(r'data-video-id="([A-Za-z0-9_-]{11})"')
RANK_RE = re.compile(r'c-chart-item__rank">\s*<span>(\d+)</span>', re.S)
TITLE_RE = re.compile(r'class="c-chart-item__title"[^>]*>([^<]+)<', re.S)
ARTIST_RE = re.compile(r'class="c-chart-item__artist"[^>]*>([^<]+)<', re.S)
DATE_RE = re.compile(r'(\d{1,2})\s+(January|February|March|April|May|June|July|'
                     r'August|September|October|November|December)\s+(\d{4})')
VR_RE = re.compile(r'"videoRenderer":\{"videoId":"([^"]{11})".*?"title":\{"runs":\[\{"text":"([^"]{0,200})"', re.S)


def _get(url, timeout=25):
    req = urllib.request.Request(url, headers={
        "User-Agent": UA, "Accept-Language": "en-AU,en;q=0.9",
        "Cookie": "SOCS=CAESEwgDEgk0ODE3Nzk3MjQaAmVuIAEaBgiA_LyaBg"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", "ignore")


def parse_aria():
    page = _get(ARIA_URL, timeout=30)
    rows = []
    for m in ITEM_RE.finditer(page):
        seg = page[m.end():m.end() + 4000]
        rk = RANK_RE.search(seg)
        ti = TITLE_RE.search(seg)
        ar = ARTIST_RE.search(seg)
        if not (rk and ti and ar):
            continue
        vid = VID_RE.search(m.group(0))
        rows.append({
            "rank": int(rk.group(1)),
            "title": _html.unescape(ti.group(1)).strip(),
            "artist": _html.unescape(ar.group(1)).strip(),
            "videoId": vid.group(1) if vid else None,
            "how": "aria-direct" if vid else None,
        })
    rows = [r for r in rows if 1 <= r["rank"] <= 50]
    rows.sort(key=lambda r: r["rank"])
    dm = DATE_RE.search(page)
    week_of = (f"{dm.group(3)}-{MONTHS[dm.group(2)]:02d}-{int(dm.group(1)):02d}"
               if dm else _dt.date.today().isoformat())
    return rows, week_of


def yt_search(artist, title):
    q = urllib.parse.quote_plus(f"{artist} {title} official music video")
    cands, seen = [], set()
    for vid, t in VR_RE.findall(_get("https://www.youtube.com/results?search_query=" + q)):
        if vid not in seen:
            seen.add(vid)
            cands.append((vid, t))
        if len(cands) >= 3:
            break
    tl = title.lower().split("(")[0].strip()
    for vid, t in cands:
        if tl and tl in t.lower():
            return vid
    return cands[0][0] if cands else None


def fill_missing(rows):
    for r in rows:
        if r["videoId"]:
            continue
        vid = None
        for attempt in range(3):
            try:
                vid = yt_search(r["artist"].split(",")[0], r["title"])
                if vid:
                    break
            except Exception:
                time.sleep(2 + attempt * 3)
        r["videoId"] = vid
        r["how"] = "yt-search" if vid else "unresolved"


def load_current():
    try:
        return json.load(open(JSON_PATH, encoding="utf-8"))
    except Exception:
        return {"weekOf": "", "entries": []}


def changed(rows, week_of, cur):
    if cur.get("weekOf") != week_of:
        return True
    cur_e = cur.get("entries", [])
    if len(cur_e) != len(rows):
        return True
    return any((r["rank"], r["title"], r["videoId"]) !=
               (c.get("rank"), c.get("title"), c.get("videoId"))
               for r, c in zip(rows, cur_e))


def bump_versions(stamp):
    subs = [
        (os.path.join(REPO, "index.html"),
         (re.compile(r'v=\d{8}-\d'), f'v={stamp}-1')),
        (os.path.join(REPO, "chart.js"),
         (re.compile(r"au-top50\.json\?v=\d{8}-\d"), f'au-top50.json?v={stamp}-1')),
        (os.path.join(REPO, "sw.js"),
         (re.compile(r"fuse-music-v\d+"), f'fuse-music-{stamp}')),
        (os.path.join(REPO, "404.html"),
         (re.compile(r"'/\?v=\d{8}-\d"), f"'/?v={stamp}-1")),
    ]
    for path, (rx, repl) in subs:
        if not os.path.exists(path):
            continue
        txt = open(path, encoding="utf-8").read()
        txt2 = rx.sub(repl, txt)
        if txt2 != txt:
            open(path, "w", encoding="utf-8").write(txt2)


def git_ship(week_of, stamp):
    tok = ""
    for line in open(ENV_FILE, encoding="utf-8", errors="ignore"):
        if line.startswith("GITHUB_TOKEN="):
            tok = line.split("=", 1)[1].strip().strip('"').strip("'")
            break
    url = f"https://x-access-token:{tok}@github.com/christransformers/fm.git"
    env = dict(os.environ, GIT_TERMINAL_PROMPT="0")
    def run(*args):
        p = subprocess.run(args, cwd=REPO, env=env, capture_output=True, text=True, timeout=180)
        out = ((p.stdout or "") + (p.stderr or "")).replace(tok, "<TOKEN>")
        if p.returncode != 0:
            raise RuntimeError(f"{' '.join(args[:2])} rc={p.returncode}: {out.strip()[:200]}")
        return out.strip()
    run("git", "add", "-A")
    run("git", "-c", "credential.helper=", "-c", "user.name=christransformers",
        "-c", "user.email=ct3835776@gmail.com", "commit", "-q", "-m",
        f"chore(chart): refresh AU Top 50 — ARIA week of {week_of} [auto]")
    run("git", "-c", "credential.helper=", "push", url, "main")
    return run("git", "rev-parse", "--short", "HEAD")


def main():
    selftest = "--selftest" in sys.argv
    rows, week_of = parse_aria()
    if len(rows) < 45:
        print(f"AU50 FAIL: parsed only {len(rows)} chart rows (layout changed?)")
        return
    fill_missing(rows)
    unresolved = [r["rank"] for r in rows if not r["videoId"]]
    if unresolved:
        print(f"AU50 FAIL: no video for ranks {unresolved}")
        return
    cur = load_current()
    if selftest:
        diff = changed(rows, week_of, cur)
        srcs = {}
        for r in rows:
            srcs[r["how"]] = srcs.get(r["how"], 0) + 1
        print(f"selftest: {len(rows)} rows, week {week_of}, sources {srcs}, "
              f"would_update={diff}")
        return
    if not changed(rows, week_of, cur):
        return  # silent watchdog: nothing to do
    stamp = _dt.date.today().strftime("%Y%m%d")
    payload = {
        "chart": "ARIA Top 50 Singles (Australia)",
        "weekOf": week_of,
        "source": ARIA_URL,
        "generated": _dt.datetime.now(_dt.UTC).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "entries": rows,
    }
    json.dump(payload, open(JSON_PATH, "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    bump_versions(stamp)
    try:
        sha = git_ship(week_of, stamp)
    except Exception as e:
        print(f"AU50 FAIL: git push failed: {e}")
        return
    print(f"AU Top 50 refreshed: ARIA week of {week_of}, "
          f"{len(rows)} videos, pushed {sha} — live at fusemusic.com.au/#charts")


if __name__ == "__main__":
    main()
