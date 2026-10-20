/* Fuse Music — media page renderers (song.html, artist.html).
   URL: song.html?s=<songSlug>  |  artist.html?a=<artistSlug> */
(function () {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const $ = s => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  const mediaUrl = (e) => (e.mediaBase || 'https://pub-5ce055eb6d8740b9900b4a5a4efff489.r2.dev/') + encodeURIComponent(e.r2Key || '');
  const ytThumb = e => 'https://i.ytimg.com/vi/' + encodeURIComponent(e.videoId || '') + '/hqdefault.jpg';
  const json = p => fetch(p).then(r => { if (!r.ok) throw new Error(p + ' ' + r.status); return r.json(); });

  const head = (eyebrow, title, sub) => `
    <p class="eyebrow">${esc(eyebrow)}</p>
    <h1>${title}</h1>
    <p class="hd-sub">${sub}</p>`;

  /* ---------- SONG PAGE ---------- */
  if (document.body.dataset.page === 'song') {
    const slug = params.get('s') || '';
    json('data/au-top50.json?v=20261021-1').then(data => {
      const base = data.mediaBase || 'https://pub-5ce055eb6d8740b9900b4a5a4efff489.r2.dev/';
      const e = data.entries.find(x => x.songSlug === slug || x.r2Key === slug);
      const root = $('#songRoot');
      if (!e) {
        root.innerHTML = head('SONG', 'Not<br><em>found.</em>', 'No song matches that link.') +
          '<p class="empty">Try the <a href="index.html#charts">AU Top 50</a>.</p>';
        return;
      }
      document.title = e.title + ' — ' + e.artist + ' | Fuse Music';
      const m = $('#songMeta');
      if (m) m.textContent = 'AU #' + e.rank + ' · week of ' + data.weekOf;
      const others = data.entries.filter(x => x.artistSlug === e.artistSlug && x.rank !== e.rank);
      root.innerHTML = `
        ${head('AU TOP 50 · SONG PAGE', esc(e.title), '<a class="muted" href="artist.html?a=' + esc(e.artistSlug) + '">' + esc(e.artist) + '</a>')}
        <div class="meta-row"><span>CHART #${e.rank}</span><span>${esc(data.chart)}</span><span>WEEK ${esc(data.weekOf)}</span><span>480p · SELF-HOSTED</span></div>
        <video controls autoplay playsinline preload="metadata" poster="${ytThumb(e)}" src="${esc(base + encodeURIComponent(e.r2Key || ''))}"></video>
        <div class="video-actions">
          <a class="btn primary" href="https://www.youtube.com/watch?v=${esc(e.videoId)}" target="_blank" rel="noopener noreferrer">OFFICIAL VIDEO ON YOUTUBE ↗</a>
          <a class="btn" href="artist.html?a=${esc(e.artistSlug)}">ARTIST PROFILE ↗</a>
          <a class="btn" href="index.html#charts">BACK TO AU TOP 50 ↗</a>
        </div>
        ${others.length ? `<h2>More from ${esc(e.artist.split(',')[0])}</h2><div class="grid">${others.map(o => `
          <a class="card" href="${esc(o.page)}">
            <img loading="lazy" src="${ytThumb(o)}" alt="${esc(o.title)} thumbnail">
            <div class="card-meta"><span>AU #${o.rank}</span><span>WATCH</span></div>
            <h3>${esc(o.title)}</h3><p>${esc(o.artist)}</p>
          </a>`).join('')}</div>` : ''}`;
    }).catch(err => {
      $('#songRoot').innerHTML = '<p class="empty">Could not load the song. ' + esc(err.message) + '</p>';
    });
  }

  /* ---------- ARTIST PAGE ---------- */
  if (document.body.dataset.page === 'artist') {
    const slug = params.get('a') || '';
    Promise.all([json('artists.json'), json('data/au-top50.json?v=20261021-1')]).then(([artists, data]) => {
      const root = $('#artistRoot');
      const a = artists.find(x => x.id === slug) ||
                artists.find(x => (x.name || '').toLowerCase() === slug.replace(/-/g, ' '));
      const songs = data.entries.filter(x => x.artistSlug === slug);
      if (!a && !songs.length) {
        root.innerHTML = head('ARTIST', 'Not<br><em>found.</em>', 'No artist matches that link.') +
          '<p class="empty">Browse the <a href="index.html#artists">artist directory</a>.</p>';
        return;
      }
      const name = a ? a.name : songs[0].artist.split(',')[0];
      const genre = a && a.genre ? a.genre : 'Chart artist';
      document.title = name + ' — Fuse Music';
      const m = $('#artistMeta');
      if (m) m.textContent = name + ' · ' + genre;
      root.innerHTML = `
        ${head('ARTIST PROFILE', esc(name), esc([genre, a && a.location].filter(Boolean).join(' · ')))}
        <div class="meta-row">
          ${a && a.chartRank ? '<span>BEST AU #' + a.chartRank + '</span>' : ''}
          ${songs.length ? '<span>' + songs.length + ' SONG' + (songs.length > 1 ? 'S' : '') + ' ON THIS WEEK\'S CHART</span>' : ''}
          <span>${esc(genre.toUpperCase())}</span>
        </div>
        ${a && a.bio ? `<p class="bio">${esc(a.bio)}</p>` : ''}
        ${songs.length ? `<h2>On the AU Top 50 this week</h2>
        <div class="grid">${songs.map(s => `
          <a class="card" href="${esc(s.page)}">
            <img loading="lazy" src="${ytThumb(s)}" alt="${esc(s.title)} thumbnail">
            <div class="card-meta"><span>AU #${s.rank}</span><span>PLAY ↗</span></div>
            <h3>${esc(s.title)}</h3><p>${esc(s.artist)}</p>
          </a>`).join('')}</div>` : '<p class="empty">No chart songs for this artist this week.</p>'}
        <div class="video-actions" style="margin-top:30px">
          <a class="btn" href="index.html#artists">ARTIST DIRECTORY ↗</a>
          <a class="btn" href="index.html#charts">AU TOP 50 ↗</a>
        </div>`;
    }).catch(err => {
      $('#artistRoot').innerHTML = '<p class="empty">Could not load the artist. ' + esc(err.message) + '</p>';
    });
  }
})();
