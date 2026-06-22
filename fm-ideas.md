╔══════════════════════════════════════════════════════════════════════════════════════╗
║          FUSEMUSIC.COM.AU — 50 IDEAS RANKED BY BUILD PRIORITY                       ║
║          Constraint: Pure HTML + CSS + JS | No backend | GitHub Pages               ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 1 — FOUNDATIONS (Build these first or nothing works)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#01  Hash Router (history.pushState / hashchange)
     WHY FIRST: Without this, every page click kills your audio. This IS the SPA.
     Every single other idea depends on this being solid.
     HOW: window.addEventListener('hashchange', render) + swap innerHTML of <main>

#02  tracks.json + artists.json as Single Source of Truth
     WHY: This is your fake "database". Everything reads from here.
     Shape: { id, title, artist, genre, is_local, source_type, source_url, waveform_id, plays }
     HOW: fetch('./data/tracks.json').then(r => r.json())

#03  Hybrid Audio Controller (The Core Engine)
     WHY: The brain of the whole platform. Must handle 3 source types cleanly.
     HOW: if is_local → HTML5 <audio> tag
          if source_type === 'soundcloud' → hidden SC iframe + Widget API
          if source_type === 'youtube' → hidden YT iframe + IFrame API

#04  Persistent Audio Player (Survives Page Navigation)
     WHY: The illusion collapses the second music stops on navigation.
     HOW: Player lives OUTSIDE <main>. Hash router swaps only <main> content.
          Audio object persists in global JS state, never destroyed.

#05  Dark Mode Default (prefers-color-scheme + manual toggle)
     WHY: Music platforms are dark. Light mode on launch looks unfinished.
     HOW: @media (prefers-color-scheme: dark) + data-theme toggle on <html>
          Store preference in a JS variable (not localStorage — GitHub Pages iframes block it)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 2 — THE ILLUSION (Makes it feel real, not like a demo)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#06  SoundCloud Widget API Hidden Iframe Control
     WHY: Lets your custom player button control SC audio invisibly.
     HOW: Load sdk.sndcdn.com/sdk.js, set iframe to height:1px opacity:0 position:absolute
          Call widget.play() / widget.pause() from your own UI

#07  YouTube IFrame API as Second Offsite Engine
     WHY: YouTube has everything SC doesn't. Doubles catalogue for free.
     HOW: YT.Player() with a hidden div, call .playVideo() / .pauseVideo()
          source_type: 'youtube' in tracks.json triggers this path

#08  Phantom Catalogue JSON (500 entries, 95% null sources)
     WHY: Perceived catalogue size matters enormously for legitimacy.
     HOW: Populate tracks.json with real metadata but source_url: null
          On click → gracefully show "Migrating catalogue — preview on SoundCloud" embed

#09  Pre-rendered SVG Waveform Sprites (20-30 variants)
     WHY: Waveforms are SoundCloud's most recognisable visual signature.
     HOW: Single waveforms-sprite.svg, assign via seeded Math.random(track.id)
          Same track always gets same waveform = feels consistent

#10  Web Audio API Analyser (Real-time canvas visualiser for local tracks)
     WHY: Your trending/hosted tracks deserve the real treatment.
     HOW: createMediaElementSource() → AnalyserNode → getByteFrequencyData()
          Draw to <canvas> in requestAnimationFrame loop. CORS: local files only.

#11  Ghost Artist Profiles (Static HTML templates from artists.json)
     WHY: Empty artist pages kill the illusion of a bustling platform.
     HOW: Single artist-template populated by JS from artists.json on hash route
          /artist/dj-static → loads artists.json, finds match, renders profile

#12  Curated Genre "Stations" (Not open search)
     WHY: Limits what users expect, hides the empty catalogue brilliantly.
     HOW: 6-8 hand-picked stations (Lo-Fi, Gym Hype, AUS Hip-Hop, Electronic)
          Each station = a filtered slice of tracks.json by genre tag

#13  Mini-Player Collapse on Scroll
     WHY: Signals maturity. SoundCloud does this. Users notice its absence.
     HOW: IntersectionObserver on main player → add .mini class when out of viewport
          CSS transition collapses to 60px bar: art + title + play/pause only

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 3 — APPLY-GATE & GROWTH LOOP (Turn the waitlist into a weapon)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#14  "Exclusive Club" Apply-to-Listen Gate
     WHY: Reframes "unfinished" as "exclusive". Works WITH your current state.
     HOW: Formspree or Netlify Forms HTML form. Style it as an underground invite page.
          Brand copy: "Apply for early access — limited spots open"

#15  Invite Code Viral Loop
     WHY: Turns your waitlist into a referral engine before launch.
     HOW: On apply → Formspree webhook → Zapier → Gmail sends unique 6-char code
          "Share your code with another artist — you both jump the queue"
          codes.json in repo → JS validates client-side on entry

#16  Verified Status Application Flow
     WHY: Blue checkmark as aspirational carrot. Costs you nothing.
     HOW: Part of the artist application form. Approved artists get checkmark
          hardcoded into artists.json. Massive psychological value.

#17  Formspree → Zapier → Google Sheets Waitlist Funnel
     WHY: Free CRM. You see every applicant in a live spreadsheet.
     HOW: Formspree on submit → Zapier free tier → append row to Google Sheet
          + auto-reply email with invite code via Gmail action

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 4 — SOCIAL PROOF & ENGAGEMENT (Makes it feel alive)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#18  LocalStorage Likes + History
     WHY: Personalisation with zero backend. Users feel invested immediately.
     HOW: localStorage.setItem('liked_tracks', JSON.stringify(likedArray))
          Show "Recently Played" and "Your Liked Tracks" sections

#19  Dynamic Fluctuating "Live Listener" Counters
     WHY: Social proof. Dead platforms feel empty. This makes it feel buzzing.
     HOW: Math.floor(Math.random() * 15) + 120 refreshed every 8 seconds
          Seeded by track ID so each track has a believable base range

#20  "Hype Train" Velocity Meter
     WHY: Rapid-gain framing makes small artists feel like they're trending.
     HOW: Track click timestamps in sessionStorage. If 3+ clicks in 60s → "On Fire"
          CSS animated flame icon + "velocity" meter fills to red

#21  "Top 40" Charts Countdown Page
     WHY: Billboard-style chart is the most recognisable music prestige signal.
     HOW: Static array in tracks.json with chart_position + chart_movement fields
          Render with ↑↑↓ arrows, "NEW" badge, position number. Update weekly manually.

#22  "Breaking Artists" Auto-Scrolling Hero Carousel
     WHY: Front-page real estate = perceived fame. Artists will share their feature.
     HOW: CSS scroll-snap or vanilla JS interval cycling featured artist cards
          "Breaking This Hour" marquee at top of homepage

#23  Gamified Milestone Badges on Artist Profiles
     WHY: Turns play counts into status symbols. Artists screenshot and share.
     HOW: Badge thresholds in artists.json (plays field)
          10k = Rising Star, 50k = Heavy Rotation, 100k = Certified Viral
          Gold glow CSS animation on highest tier

#24  Fake "A&R Scout" Activity Ticker (Sidebar)
     WHY: Creates electric atmosphere of industry attention.
     HOW: Hardcoded array of ~30 fake events, randomly cycled every 4s
          "An A&R from [Label] just played [Track]" — pure JS, zero network calls

#25  "Daily Drop" Scarcity Counter
     WHY: Artificial scarcity = hype. Forces everyone to hear the same tracks.
     HOW: Hardcode 3 "drop" tracks per day in tracks.json with a date field
          JS countdown timer to next drop. Only those 3 tracks highlighted today.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 5 — PLATFORM IDENTITY (Differentiates you from SoundCloud)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#26  Micro-Genre "Islands" Interactive Map
     WHY: Most memorable homepage UX in the entire idea list. Distinctive.
     HOW: SVG or CSS grid "map" with genre zones. Hover → glow + 5s audio preview
          Click → navigates to that genre station

#27  Day & Night Mode Audio Profile Shift
     WHY: Curation tied to time-of-day is genuinely novel and useful.
     HOW: Check new Date().getHours(). If 8pm-4am → swap playlist to night tracks
          Automatic genre filter applied, background shifts to neon cityscape CSS

#28  "Blind Taste Test" Unknown Player Page
     WHY: Unique feature that creates shareable moments. No other platform has it.
     HOW: Random track from JSON, all metadata hidden. 
          After 30s → CSS fade-in reveals artist, title, art. Share button appears.

#29  "Tape Deck" Lo-Fi Filter Toggle
     WHY: Adds signature personality to the player. Genuinely fun.
     HOW: Web Audio API BiquadFilterNode + subtle JS pitch wobble oscillation
          Button styled as cassette tape. Only affects local hosted files.

#30  "Lyrics & Lore" Karaoke Mode
     WHY: Deep engagement feature. Artists who add lyrics drive superfan loyalty.
     HOW: lyrics field in tracks.json as timestamped array [{t: 14.2, line: "..."}, ...]
          JS listens to audio.currentTime, highlights matching line

#31  "Artist of the Week" Full Site Takeover
     WHY: Massive perceived honour. Artist will promote heavily on their socials.
     HOW: featured_week field in artists.json. JS reads it, applies CSS class to <html>
          --color-accent overrides with artist's brand colour. Banner everywhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 6 — GAMIFICATION & RETENTION (Hooks that bring users back)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#32  "Arcade Room" Listener Achievement System
     WHY: Hooks casual listeners into a habit loop.
     HOW: localStorage tracks events. Achievements checked on each play.
          "Night Owl" (play after midnight), "Crate Digger" (5 non-trending tracks)
          Retro pixel-art badge displayed on local browser profile

#33  Collective "Vibe Check" Emoji Voting
     WHY: Micro-interaction that adds community feel with zero infrastructure.
     HOW: 🔥 😢 🚀 ☕ under each track. Click → localStorage increments count.
          Progress bar fills based on local tally. Resets on new browser. Fine.

#34  "Sign to My Label" Confetti Button
     WHY: Fan engagement gimmick. Shareable social moment. Costs nothing.
     HOW: Click → canvas confetti.js burst + local counter increments
          Counter shows "X fans want to sign [Artist]"

#35  Visual "Sticker Book" Drag-and-Place
     WHY: Memorable UX quirk. No platform does this. Pure personality.
     HOW: Click artist profile → unlock sticker to drag onto personal sidebar
          CSS drag API, positions stored in localStorage

#36  "Artist Trading Card" Auto-Generator
     WHY: Shareable content created by your platform = free viral marketing.
     HOW: HTML Canvas draws artist name + art + stats onto a styled card template
          Download button → canvas.toBlob() → anchor click download

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 7 — PERFORMANCE & TECHNICAL POLISH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#37  Service Worker Cache for Trending Tracks
     WHY: Makes repeat listens of your hosted tracks feel instant. Premium feel.
     HOW: service-worker.js intercepts fetch for /audio/*.mp3
          Cache-first strategy for audio files. Registers on page load.

#38  IndexedDB Binary Audio Cache
     WHY: Actual offline playback for your hosted tracks after first listen.
     HOW: On first play → store MP3 ArrayBuffer in IndexedDB under track ID
          On subsequent plays → load from IndexedDB, skip network entirely

#39  SoundCloud oEmbed API Client-Side Stealth Fetcher
     WHY: Never store iframe URLs in your codebase — just raw SC track URLs.
     HOW: fetch(`https://soundcloud.com/oembed?url=${scUrl}&format=json`)
          Parse returned HTML, inject into hidden wrapper, style the outer shell yourself

#40  Keyboard Shortcuts (Space, M, ←, →, L)
     WHY: Power-user signal that makes the platform feel like real software.
     HOW: document.addEventListener('keydown', handler)
          Space=play/pause, M=mute, arrows=seek 10s, L=like current track

#41  build.js Static Page Generator (Node script, not part of the site)
     WHY: Sanity saver. Generates 500 track pages from JSON automatically.
     HOW: node build.js reads tracks.json, writes individual track-[id].html files
          Push output to GitHub Pages. Edit JSON → run script → push. That's your CMS.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 8 — NICE TO HAVE (Do these once the core is solid)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#42  3D Audio Visualiser (Three.js or Canvas particle field)
     WHY: Visual wow factor for trending tracks page.
     HOW: Three.js from CDN. Particle sphere reacts to AnalyserNode frequency data.
          Only on desktop — disable with @media (max-width: 768px)

#43  GitHub Issues API as Comment Engine
     WHY: Free, real, persistent comments without a database.
     HOW: fetch('https://api.github.com/repos/user/fuse-comments/issues?labels=track_01')
          POST new comments as issue comments with a public PAT (read-only risk acceptable)
          60 req/hr unauth, 5000/hr with token. Fine for early traffic.

#44  Mixcloud Embed as Third Offsite Engine
     WHY: Better for DJ sets and mixes. Fills genre gaps SC misses.
     HOW: source_type: 'mixcloud' in tracks.json → render Mixcloud embed iframe
          Same hidden-iframe pattern as SoundCloud

#45  "Spatial Audio" CSS + StereoPannerNode Illusion
     WHY: Perceived audio quality upgrade, zero real processing needed.
     HOW: Web Audio API StereoPannerNode oscillating ±0.3 at 0.2Hz
          SVG feTurbulence on waveform visual. Toggle button on player.

#46  "Reaction/Shoutout" Submission via Formspree to Email
     WHY: Fan reactions become real content you can paste into track pages.
     HOW: Text input below track → Formspree submit → lands in your inbox
          Best ones hand-pasted into tracks.json reaction field during updates

#47  Animated 3D Rotating Album Art on Now Playing
     WHY: High impact visual, genuinely impressive for a static site.
     HOW: CSS perspective + rotateY transform on album art card
          Pauses rotation when audio paused. Pure CSS, zero JS needed.

#48  "The Unknown" Blind Discovery Page
     Wait — this is #28 rebranded. Already counted. Moved here as reminder.
     HOW: Dedicated /unknown route in hash router. Full-screen visualiser only.

#49  Progressive Web App (PWA) manifest.json + Service Worker
     WHY: "Add to Home Screen" = app icon on user's phone. Feels like a real app.
     HOW: manifest.json with name/icons/theme_color + service worker already built in #37
          One <link rel="manifest"> tag. Free. 30 minutes of work.

#50  SoundCloud oEmbed Fallback for Entire Offsite Catalogue
     WHY: Future-proofing. If SC changes embed rules, oEmbed is the backup API.
     HOW: Try direct iframe first. On iframe error event → fallback to oEmbed fetch.
          Graceful degradation chain: local → direct embed → oEmbed → "preview on SC"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  QUICK REFERENCE — TIERS AT A GLANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  TIER 1  (#01-05)  ← Build NOTHING else until these are done
  TIER 2  (#06-13)  ← The illusion layer. Site feels real after this.
  TIER 3  (#14-17)  ← Waitlist & growth. Do before any public traffic.
  TIER 4  (#18-25)  ← Social proof. Makes the platform feel buzzing.
  TIER 5  (#26-31)  ← Platform identity. Separates you from SoundCloud.
  TIER 6  (#32-36)  ← Gamification. Retention hooks.
  TIER 7  (#37-41)  ← Technical polish. Performance & dev tooling.
  TIER 8  (#42-50)  ← Nice to haves. Build these on a rainy day.

  MINIMUM VIABLE LAUNCH = #01 through #17 (Tiers 1–3)
  Impressive Launch    = #01 through #25 (Tiers 1–4)
  Full Vision          = All 50