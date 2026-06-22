// #41 build.js - Static page generator for track pages
// Usage: node build.js
// Reads data/tracks.json, generates individual track-[id].html files

const fs = require('fs');
const path = require('path');

const tracks = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'tracks.json'), 'utf8'));
const artists = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'artists.json'), 'utf8'));

const artistMap = {};
artists.forEach(a => { artistMap[a.name] = a; });

const template = (track, artist) => `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${track.title} - ${track.artist} | FUSE Music</title>
  <meta property="og:title" content="${track.title} by ${track.artist}">
  <meta property="og:description" content="Listen to ${track.title} on FUSE Music">
  <meta property="og:type" content="music.song">
  <meta property="og:url" content="https://fusemusic.com.au/#/track/${track.id}">
  <script>window.location.href = '/#/track/${track.id}';</script>
  <noscript><meta http-equiv="refresh" content="0;url=/#/track/${track.id}"></noscript>
</head>
<body style="background:#0a0a0b;color:#e5e5e5;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0">
  <p>Redirecting to <a href="/#/track/${track.id}" style="color:#ff6b35">${track.title}</a>...</p>
</body>
</html>`;

const outDir = path.join(__dirname, 'tracks');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

let count = 0;
tracks.forEach(track => {
  const filePath = path.join(outDir, `${track.id}.html`);
  fs.writeFileSync(filePath, template(track, artistMap[track.artist] || null));
  count++;
});

console.log(`Generated ${count} track pages in ${outDir}/`);
