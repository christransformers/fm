# Fuse Music

Static music and artist-discovery preview for www.fusemusic.com.au. Hosted from the root of the `main` branch on GitHub Pages. Preserve `CNAME`.

## Run locally

```sh
python3 -m http.server 8124
```

Open http://localhost:8124/. No install or build step.

## Content

- `artists.json`: 50 fictional artist profiles across nine genres.
- `assets/albums/`: 50 static SVG demo covers generated from the uploaded archive descriptions.
- `community.js` / `community.css`: artist discovery and local listener interactions.
- `app.js` / `styles.css`: the music player and original listening-room interface.
- `docs/music-sourcing.md`: real-music intake and launch requirements.

The artist directory is preview content, not a claim of real members or artist verification. The included generated instrumental clips are separate from the fictional profiles. Listener profiles, follows and comments are local browser previews, not authenticated accounts or public posts. No password or identity documents are collected. Clearing browser data removes local data. Artist applications are closed pending a secure review process.

## Uploaded archive integration

The community directory uses `artists.json` built from `2010s_fictional_albums_set2.zip`: 50 fictional release concepts across 10 genres. The zip contained metadata and cover descriptions, not bitmap images or audio, so the site uses local SVG cover artwork in `assets/albums/`.
