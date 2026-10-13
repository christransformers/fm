# Fuse Music

Static music and artist-discovery preview for www.fusemusic.com.au. Hosted from the root of the `main` branch on GitHub Pages. Preserve `CNAME`.

## Run locally

```sh
python3 -m http.server 8124
```

Open http://localhost:8124/. No install or build step.

## Content

- `artists.json`: 100 fictional artist profiles across 10 genres with bespoke Suno.ai style prompts.
- `Artist_Catalogue.md`: Complete catalogue specification and prompt engineering guide for all 100 artists.
- `assets/covers/`: 100 high-fidelity release covers across Set 1 & Set 2.
- `assets/artists/`: High-resolution artist portraits for the community directory.
- `community.js` / `community.css`: artist discovery, profiles, Suno prompt view, and local listener interactions.
- `app.js` / `styles.css`: the audio player, dynamic spectrum visualizer, tempo/mood filters, queue management, set sharing, and listening room.
- `docs/music-sourcing.md`: real-music intake and launch requirements.

The artist directory is preview content, not a claim of real members or artist verification. The included generated instrumental clips are separate from the fictional profiles. Listener profiles, follows and comments are local browser previews, not authenticated accounts or public posts. No password or identity documents are collected. Clearing browser data removes local data. Artist applications are closed pending a secure review process.

## Uploaded archive integration

The catalogue unites 100 fictional release concepts across 10 genres (Set 1 original archive and Set 2 archive). The site features curated high-resolution cover artworks in `assets/covers/` and artist portraits in `assets/artists/`.
