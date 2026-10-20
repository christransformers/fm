/* Fuse Music — AU Top 50 view. Each entry plays from the site's own media
   library (Cloudflare R2), with the official YouTube video as a fallback link.
   Players are click-to-load so the page stays light. */
(function () {
  const root = document.getElementById('chartRoot');
  if (!root) return;
  const meta = document.getElementById('chartMeta');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  fetch('data/au-top50.json?v=20261021-1')
    .then(r => { if (!r.ok) throw new Error('chart data ' + r.status); return r.json(); })
    .then(data => {
      if (meta) meta.textContent = data.chart + ' — week of ' + data.weekOf;
      const base = data.mediaBase || 'https://pub-5ce055eb6d8740b9900b4a5a4efff489.r2.dev/';
      root.innerHTML = data.entries.filter(e => e.videoId).map(e => `
<article class="card chart-card">
<span class="chart-rank">${e.rank}</span>
<button type="button" class="chart-thumb" data-src="${esc(base + encodeURIComponent(e.r2Key || ''))}" data-vid="${esc(e.videoId)}" aria-label="Play ${esc(e.artist)} — ${esc(e.title)}">
<img loading="lazy" src="https://i.ytimg.com/vi/${esc(e.videoId)}/hqdefault.jpg" alt="${esc(e.artist)} — ${esc(e.title)} thumbnail" width="480" height="360">
<span class="chart-play" aria-hidden="true">▶</span>
</button>
<div class="card-meta"><span>OFFICIAL VIDEO · 480p</span><span>AU #${e.rank}</span></div>
<h3><a href="${esc(e.page)}">${esc(e.title)}</a></h3>
<p><a href="${esc(e.artistPage)}">${esc(e.artist)}</a></p>
<div class="row"><a href="${esc(e.page)}">SONG PAGE ↗</a><a href="https://www.youtube.com/watch?v=${esc(e.videoId)}" target="_blank" rel="noopener noreferrer">YOUTUBE ↗</a></div>
</article>`).join('');
    })
    .catch(err => {
      root.innerHTML = '<p class="chart-empty">The chart could not load right now — try again shortly.</p>';
      console.error('chart load failed', err);
    });

  root.addEventListener('click', ev => {
    const btn = ev.target.closest('.chart-thumb');
    if (!btn) return;
    const vid = btn.dataset.vid;
    const src = btn.dataset.src;
    const wrap = document.createElement('div');
    wrap.className = 'chart-frame-wrap';
    if (src) {
      const v = document.createElement('video');
      v.className = 'chart-frame';
      v.src = src;
      v.poster = 'https://i.ytimg.com/vi/' + encodeURIComponent(vid) + '/hqdefault.jpg';
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      v.preload = 'auto';
      v.setAttribute('aria-label', btn.getAttribute('aria-label') || 'Music video player');
      wrap.appendChild(v);
      const yt = document.createElement('a');
      yt.href = 'https://www.youtube.com/watch?v=' + encodeURIComponent(vid);
      yt.target = '_blank';
      yt.rel = 'noopener noreferrer';
      yt.className = 'chart-fallback';
      yt.textContent = 'Watch on YouTube ↗';
      wrap.appendChild(yt);
    } else {
      const ifr = document.createElement('iframe');
      ifr.className = 'chart-frame';
      ifr.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(vid) + '?autoplay=1&rel=0';
      ifr.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      ifr.allowFullscreen = true;
      ifr.title = btn.getAttribute('aria-label') || 'Music video player';
      wrap.appendChild(ifr);
    }
    btn.replaceWith(wrap);
  });
})();
