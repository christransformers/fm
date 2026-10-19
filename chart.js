/* Fuse Music — AU Top 50 view: this week's ARIA Top 50 Singles with official
   YouTube videos. Embeds are click-to-load (fast page, privacy-enhanced mode);
   every play happens on YouTube's pipes — nothing is re-hosted here. */
(function () {
  const root = document.getElementById('chartRoot');
  if (!root) return;
  const meta = document.getElementById('chartMeta');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  fetch('data/au-top50.json?v=20261020-1')
    .then(r => { if (!r.ok) throw new Error('chart data ' + r.status); return r.json(); })
    .then(data => {
      if (meta) meta.textContent = data.chart + ' — week of ' + data.weekOf;
      root.innerHTML = data.entries.filter(e => e.videoId).map(e => `
<article class="card chart-card">
<span class="chart-rank">${e.rank}</span>
<button type="button" class="chart-thumb" data-vid="${esc(e.videoId)}" aria-label="Play ${esc(e.artist)} — ${esc(e.title)} (official video on YouTube)">
<img loading="lazy" src="https://i.ytimg.com/vi/${esc(e.videoId)}/hqdefault.jpg" alt="${esc(e.artist)} — ${esc(e.title)} official video thumbnail" width="480" height="360">
<span class="chart-play" aria-hidden="true">▶</span>
</button>
<div class="card-meta"><span>OFFICIAL VIDEO</span><span>AU #${e.rank}</span></div>
<h3>${esc(e.title)}</h3>
<p>${esc(e.artist)}</p>
<div class="row"><a href="https://www.youtube.com/watch?v=${esc(e.videoId)}" target="_blank" rel="noopener noreferrer">OPEN ON YOUTUBE ↗</a></div>
</article>`).join('');
    })
    .catch(err => {
      root.innerHTML = '<p class="chart-empty">The chart could not load right now — try again shortly.</p>';
      console.error('chart load failed', err);
    });

  root.addEventListener('click', ev => {
    const btn = ev.target.closest('.chart-thumb');
    if (!btn || !btn.dataset.vid) return;
    const ifr = document.createElement('iframe');
    ifr.className = 'chart-frame';
    ifr.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(btn.dataset.vid) + '?autoplay=1&rel=0';
    ifr.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    ifr.allowFullscreen = true;
    ifr.title = btn.getAttribute('aria-label') || 'Music video player';
    btn.replaceWith(ifr);
  });
})();
