let currentGenre = 'all';
const tracks = [
  {
    "id": "set1-01-velvet-frequency",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Velvet Frequency — Sunfrost",
    "artist": "Velvet Frequency",
    "album": "Nocturnal Signals",
    "year": "2013",
    "genre": "Rock and Alternative",
    "subgenre": "Tumblr Dark Indie-Rock",
    "bpm": 82,
    "mood": "Romantic, Reflective, Calm",
    "description": "A stark, minimalist monochrome photograph of a glowing white audio soundwave pulsing across a pitch-black matte sleeve, forming the subtle silhouette of two sunglasses frames, with microscopic clean typography at the bottom.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/01_Velvet_Frequency.jpg",
    "suno_prompt": "tumblr dark indie-rock, post-punk revival, wet chorus guitar, driving bassline, 115bpm, nocturnal male baritone vocals, reverberant tape saturation",
    "sonic_identity": "Brooding 2013-era indie rock defined by chorus-heavy rhythm guitars, driving basslines, and moody, reverberant baritone vocals."
  },
  {
    "id": "set1-02-pale-horizon",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Pale Horizon — I’m Gonna Bring It",
    "artist": "Pale Horizon",
    "album": "Chrome Stream",
    "year": "2015",
    "genre": "Rock and Alternative",
    "subgenre": "Australian Neo-Psychedelia / Dream-Pop",
    "bpm": 124,
    "mood": "Reflective, Suspenseful, Inspiring",
    "description": "A hypnotic, psych-digital 3D render of a liquid-mercury sphere slicing smoothly through vibrant, magenta-and-violet fluid dynamic streamlines, creating ripples across a glossy grid, with tiny clean sans-serif type floating in the corner.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/02_Pale_Horizon.jpg",
    "suno_prompt": "australian neo-psychedelia, dream-pop, swirling phaser guitars, lush synth pads, 110bpm, reverbed male vocals, sun-drenched atmosphere",
    "sonic_identity": "Sun-drenched Australian psych-rock and dream-pop featuring swirling phaser guitars, soaring synth pads, and reverbed vocal melodies."
  },
  {
    "id": "set1-03-the-broken-glass-union",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "The Broken Glass Union — Covert Operation",
    "artist": "The Broken Glass Union",
    "album": "The Law of by Lauruh",
    "year": "2018",
    "genre": "Rock and Alternative",
    "subgenre": "UK Post-Punk / Anti-Austerity",
    "bpm": 100,
    "mood": "Suspenseful, Scary",
    "description": "A harsh, direct-flash black-and-white photograph of a chaotic, grinning brawl at an English working-class wedding — torn rental suits, flying lager pints, and bloody noses mid-laughter — framed by a clean white border with bold hand-stamped crimson stencil letters.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/03_The_Broken_Glass_Union.jpg",
    "suno_prompt": "uk post-punk, anti-austerity punk, angular chorus guitar riffs, aggressive bassline, 135bpm, passionate shouting male vocals, raw British punk",
    "sonic_identity": "Fiery UK post-punk combining angular, razor-sharp guitar riffs, driving basslines, and impassioned anti-austerity vocal delivery."
  },
  {
    "id": "set1-04-astral-circuit",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Astral Circuit — Done Deal",
    "artist": "Astral Circuit",
    "album": "Mystic Cortex: Cosmic Frequencies",
    "year": "2016",
    "genre": "Rock and Alternative",
    "subgenre": "Microtonal Psychedelic Prog-Rock",
    "bpm": 105,
    "mood": "Fun, Happy, Quirky",
    "description": "A hyper-detailed, retro-futuristic digital painting of an intricate glowing nine-pointed geometric sigil hovering over an alien salt flat under emerald moons, surrounded by floating polyhedral crystals and warped microtonal sci-fi typography.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/04_Astral_Circuit.jpg",
    "suno_prompt": "microtonal psychedelic prog-rock, motorik beat, microtonal guitars, oscillating synth drone, 122bpm, hypnotic vocal chant, cosmic krautrock",
    "sonic_identity": "Hypnotic microtonal psych-prog built on relentless Krautrock motorik rhythms, microtonal guitar tunings, and oscillating synth drones."
  },
  {
    "id": "set1-05-blackout-canyon",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Blackout Canyon — Damage Control",
    "artist": "Blackout Canyon",
    "album": "Desert Drifters: Nightmare Embrace",
    "year": "2013",
    "genre": "Rock and Alternative",
    "subgenre": "Desert Hard Rock / Graphic Noir",
    "bpm": 160,
    "mood": "Angry, Fun",
    "description": "A gritty, comic-book-noir illustration by a contemporary graphic artist featuring a pale, hollow-eyed drifter in a leather biker jacket embracing a weeping femme fatale against a blood-red horizon, complete with distressed ink splatters and scratched typewriter font.",
    "duration": "0:33",
    "src": "assets/audio/last-tram-home.mp3",
    "cover": "assets/covers/05_Blackout_Canyon.jpg",
    "suno_prompt": "desert hard rock, graphic noir rock, heavy fuzz guitar riffs, thundering bass, 95bpm, raspy gravelly male vocals, dusty analog tape saturation",
    "sonic_identity": "Heavy, sun-baked desert hard rock with wall-of-sound fuzz riffs, thundering bass, and gravelly, noir-tinged male vocals."
  },
  {
    "id": "set1-06-modern-static",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Modern Static — Like This",
    "artist": "Modern Static",
    "album": "The Sensory Room: Glow",
    "year": "2016",
    "genre": "Pop and Electropop",
    "subgenre": "Melancholic Synth-Pop / Vaporwave Aesthetics",
    "bpm": 150,
    "mood": "Fun, Angry",
    "description": "A clean, conceptual photograph of an oblong neon tube glowing in soft millennial pink against an off-white gallery drywall, casting faint geometric shadows onto the floor, radiating Tumblr vaporwave nostalgia and cool indie-pop melodrama.",
    "duration": "0:33",
    "src": "assets/audio/nocturne-for-499.mp3",
    "cover": "assets/covers/06_Modern_Static.jpg",
    "suno_prompt": "melancholic synth-pop, vaporwave aesthetics, 80s analog synths, gated reverb drums, 108bpm, nostalgic male vocals, lush tape saturation",
    "sonic_identity": "Nostalgic synth-pop blending vintage 80s analog synths, gated reverb snares, and melancholic, vaporwave-influenced vocal hooks."
  },
  {
    "id": "set1-07-celeste-monet",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Celeste Monet — Maple Leaf Rag",
    "artist": "Celeste Monet",
    "album": "Violet Velvet: Strwbry Dreams",
    "year": "2010",
    "genre": "Pop and Electropop",
    "subgenre": "Maximalist Bubblegum Pop",
    "bpm": 106,
    "mood": "Quirky, Fun, Happy",
    "description": "A hyper-saturated, glossy pop portrait of the singer reclined nude on an impossibly fluffy pastel cloud made of strawberry spun sugar, surrounded by a radiant cyan sky, with the album title embossed in swirling peppermint-striped chrome lettering.",
    "duration": "0:36",
    "src": "assets/audio/paper-ticket-sunrise.mp3",
    "cover": "assets/covers/07_Celeste_Monet.jpg",
    "suno_prompt": "maximalist bubblegum pop, glittering synth plucks, sidechained bass, 124bpm, sparkling high-pitched female vocals, exuberant pop production",
    "sonic_identity": "Exuberant, maximalist bubblegum pop packed with glittering synth plucks, bouncy sidechained bass, and soaring female vocals."
  },
  {
    "id": "set1-08-echo-avenue",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Echo Avenue — Blue Window",
    "artist": "Echo Avenue",
    "album": "The Eastern Youth: Midnight Drift",
    "year": "2012",
    "genre": "Pop and Electropop",
    "subgenre": "UK Boyband Pop-Rock",
    "bpm": 130,
    "mood": "Calm, Reflective, Hopeful, Romantic",
    "description": "A candid, sun-bleached street shot of five British lads in tailored black skinny jeans, scoop-neck tees, and suede Chelsea boots leaning casually against an East London storefront, finished with warm VSCO-filtered vignetting and a neon-marker logo.",
    "duration": "0:36",
    "src": "assets/audio/platform-echo.mp3",
    "cover": "assets/covers/08_Echo_Avenue.jpg",
    "suno_prompt": "uk boyband pop-rock, driving distorted rhythm guitar, soaring stadium chorus, 126bpm, youthful harmonized male vocals, energetic radio pop-rock",
    "sonic_identity": "Radio-ready UK pop-rock combining driving guitar riffs, anthemic stadium choruses, and youthful multi-part vocal harmonies."
  },
  {
    "id": "set1-09-neon-babylon",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Neon Babylon — Run It Back",
    "artist": "Neon Babylon",
    "album": "Chromed Void",
    "year": "2011",
    "genre": "Pop and Electropop",
    "subgenre": "Avant-Garde Theatrical Pop",
    "bpm": 92,
    "mood": "Chill, Fun, Happy",
    "description": "A high-fashion, grotesque-glam editorial shot of the pop diva fused seamlessly into an angular, mirror-finish motorcycle frame, her cheekbones exaggerated with cybernetic prosthetic ridges and a platinum beehive wig, set against a black void with distressed metallic typography.",
    "duration": "0:37",
    "src": "assets/audio/redfern-current.mp3",
    "cover": "assets/covers/09_Neon_Babylon.jpg",
    "suno_prompt": "avant-garde theatrical pop, cabaret synth, dramatic harpsichord stabs, 118bpm, eccentric operatic vocal delivery, opulent dark pop",
    "sonic_identity": "Opulent, avant-garde cabaret pop driven by dramatic harpsichord stabs, heavy synth bass, and eccentric operatic vocal performances."
  },
  {
    "id": "set1-10-astrid-frost",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Astrid Frost — Unreal Engine",
    "artist": "Astrid Frost",
    "album": "Electropop",
    "year": "2010",
    "genre": "Pop and Electropop",
    "subgenre": "Scandinavian Minimalist Electropop",
    "bpm": 117,
    "mood": "Fun, Happy, Quirky",
    "description": "A stark, high-key studio portrait of the singer sporting a razor-sharp bleached bowl cut, an oversized nylon flight jacket, and platform creepers against an austere concrete wall, with a neon-lime wireframe cube icon floating beside clean geometric type.",
    "duration": "0:38",
    "src": "assets/audio/signal-at-central.mp3",
    "cover": "assets/covers/10_Astrid_Frost.jpg",
    "suno_prompt": "Scandinavian minimalist electropop, icy analog synth lead, subtle click-beat percussion, 105bpm, crystalline breathy female vocals, spacious mix",
    "sonic_identity": "Crystalline Scandinavian electropop featuring spacious synth pads, delicate click percussion, and breathy, minimalist female vocals."
  },
  {
    "id": "set1-11-suburbia-district",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Suburbia District — Every Single One",
    "artist": "Suburbia District",
    "album": "The Bay Collective: Pacific High",
    "year": "2017",
    "genre": "Hip Hop and Trap",
    "subgenre": "Suburban DIY Rap Collective",
    "bpm": 132,
    "mood": "Hopeful, Inspiring",
    "description": "A vibrant, sun-drenched close-up of a smiling young collective member with his face and neck entirely coated in cobalt-blue body paint, peering out the passenger window of a white sedan under blazing Southern California sun, framed by a safety-yellow graphic bar with bold Swiss typography.",
    "duration": "0:40",
    "src": "assets/audio/sixteen-lanes.mp3",
    "cover": "assets/covers/11_Suburbia_District.jpg",
    "suno_prompt": "suburban DIY rap collective, lo-fi cassette beats, energetic group rap trade-offs, 94bpm, raw unpolished male rap flows, underground hip-hop",
    "sonic_identity": "Raw suburban DIY hip-hop characterized by cassette tape beats, trade-off group verses, and energetic underground rap flows."
  },
  {
    "id": "set1-12-zone-six-syndicate",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Zone Six Syndicate — Beautiful Things",
    "artist": "Zone Six Syndicate",
    "album": "Blood & Diamonds: The Masked Gang",
    "year": "2017",
    "genre": "Hip Hop and Trap",
    "subgenre": "Atlanta Trap Powerhouse",
    "bpm": 72,
    "mood": "Reflective",
    "description": "A surreal, glossy 3D-collage portrait of three masked rappers dripping in tiered diamond Cuban link chains and tinted wireframe shades, rising out of a crimson smoke cloud surrounded by floating vintage sports cars, white doves, and burning roses, anchored by distressed block lettering.",
    "duration": "0:39",
    "src": "assets/audio/surry-line.mp3",
    "cover": "assets/covers/12_Zone_Six_Syndicate.jpg",
    "suno_prompt": "Atlanta trap powerhouse, heavy distorted 808 sub bass, rapid hi-hat stutter, 136bpm, aggressive dark trap rap vocals, atmospheric brass synth",
    "sonic_identity": "Hard-hitting Atlanta trap featuring subterranean distorted 808 sub-bass, rapid hi-hat rolls, and dark brass synth accents."
  },
  {
    "id": "set1-13-saint-phantom",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Saint Phantom — Fearless",
    "artist": "Saint Phantom",
    "album": "Zone 6 Nightcap",
    "year": "2015",
    "genre": "Hip Hop and Trap",
    "subgenre": "Melodic Cloud Trap / Atmospheric Nightwave",
    "bpm": 124,
    "mood": "Happy, Hopeful, Inspiring",
    "description": "A moody, purple-tinted night shot of a solo trap artist in a designer balaclava and heavy diamond pendant, eyes heavy with fatigue, with a floating Styrofoam cup and a hazy skyline blurred behind him, all filtered through a warm, distorted VHS scanline grain.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/13_Saint_Phantom.jpg",
    "suno_prompt": "melodic cloud trap, atmospheric nightwave, ambient synth pads, slow 808 kick, 128bpm, reverbed autotuned male rap vocals, hazy dreamscape",
    "sonic_identity": "Hazy melodic cloud trap blending ambient nightwave synth pads, slow 808 bass slides, and spacey autotuned vocal flows."
  },
  {
    "id": "set1-14-malachi-crown",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Malachi Crown — Railways",
    "artist": "Malachi Crown",
    "album": "We The People's Court",
    "year": "2015",
    "genre": "Hip Hop and Trap",
    "subgenre": "Conscious Hip-Hop / Political Poetry",
    "bpm": 120,
    "mood": "Hopeful, Inspiring",
    "description": "A gritty, high-contrast monochrome photograph of the rapper surrounded by neighborhood friends and shirtless kids on a sunlit city hall lawn, flashing handfuls of currency in celebration over a fallen gavel, with a single handwritten lyric scrawled across the bottom border in white chalk.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/14_Malachi_Crown.jpg",
    "suno_prompt": "conscious hip-hop, political poetry rap, soulful piano loop, warm bass, 88bpm, articulate passionate male rap vocals, boom-bap rhythm",
    "sonic_identity": "Thought-provoking conscious hip-hop featuring articulate political poetry, warm piano chords, and classic boom-bap rhythms."
  },
  {
    "id": "set1-15-clementine-peach",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Clementine Peach — Abundance",
    "artist": "Clementine Peach",
    "album": "Lavender Mansion",
    "year": "2019",
    "genre": "Hip Hop and Trap",
    "subgenre": "Eccentric Alt-Hip-Hop / Pastel Auteur",
    "bpm": 112,
    "mood": "Fun, Happy, Hopeful",
    "description": "A pastel, Wes Anderson-inspired symmetrical shot of the artist in an oversized pistachio-green suit and platinum bob wig, standing beside a pink vintage bicycle outside a brutalist pastel mansion, with a hand-painted faux-vintage title card centered below.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/15_Clementine_Peach.jpg",
    "suno_prompt": "eccentric alt-hip-hop, pastel auteur rap, quirky synth plucks, bouncy 808, 115bpm, charismatic playful male rap vocals, creative indie production",
    "sonic_identity": "Quirky, pastel-toned alt-hip-hop featuring inventive synth plucks, bouncy 808s, and highly charismatic, playful rap delivery."
  },
  {
    "id": "set1-16-the-velvet-harmonettes",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "The Velvet Harmonettes — Start Over Again",
    "artist": "The Velvet Harmonettes",
    "album": "Reflections in Chrome",
    "year": "2016",
    "genre": "RnB and Soul",
    "subgenre": "High-Glam Vocal Group",
    "bpm": 74,
    "mood": "Calm, Reflective, Sad",
    "description": "A glamorous golden-hour fashion spread of five young women posing statuesque in shimmering bronze and chrome bodysuits along an empty desert highway at dusk, their hair windswept against a turquoise sky.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/16_The_Velvet_Harmonettes.jpg",
    "suno_prompt": "high-glam vocal group, 60s Motown girl group soul, rhodes piano, horn section, 86bpm, rich female 3-part vocal harmonies, warm tape saturation",
    "sonic_identity": "Luxurious Motown-inspired soul featuring lush three-part female vocal harmonies, organic Rhodes chords, and warm horn arrangements."
  },
  {
    "id": "set1-17-julian-grey",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Julian Grey — Dizzy Dissolve",
    "artist": "Julian Grey",
    "album": "Submerged Light",
    "year": "2016",
    "genre": "RnB and Soul",
    "subgenre": "Experimental Alt-R&B",
    "bpm": 174,
    "mood": "Quirky, Fun",
    "description": "An intimate, high-contrast 35mm film still of the singer with a neon-lime cropped buzzcut, leaning over a tiled white shower stall with a hand over his face and a white band-aid on his knuckle, framed by an off-white border with lowercase Futura font.",
    "duration": "0:33",
    "src": "assets/audio/last-tram-home.mp3",
    "cover": "assets/covers/17_Julian_Grey.jpg",
    "suno_prompt": "experimental alt-r&b, moody ambient pads, sub bass, reverse vocal chops, 75bpm, falsetto male vocals, dark immersive production",
    "sonic_identity": "Atmospheric, avant-garde alt-R&B blending subterranean sub-bass, reverse audio textures, and introspective male falsetto vocals."
  },
  {
    "id": "set1-18-queen-solitaire",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Queen Solitaire — Bandit",
    "artist": "Queen Solitaire",
    "album": "Bayou Majesty",
    "year": "2016",
    "genre": "RnB and Soul",
    "subgenre": "Visual Album Imperial Soul",
    "bpm": 130,
    "mood": "Angry, Fun",
    "description": "A cinematic, Southern Gothic tableau of the singer resting her head against the hood of a vintage muscle car in a fur coat, thick blonde braids covering her lowered eyes, set against the humid golden light of a rural bayou.",
    "duration": "0:33",
    "src": "assets/audio/nocturne-for-499.mp3",
    "cover": "assets/covers/18_Queen_Solitaire.jpg",
    "suno_prompt": "visual album imperial soul, southern gothic, heavy brass section, organ, 70bpm, powerful gospel-infused female vocals, dramatic orchestral arrangement",
    "sonic_identity": "Stately, southern gothic soul led by thundering gospel vocals, cinematic brass, and dramatic Hammond organ sweeps."
  },
  {
    "id": "set1-19-maya-vance",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Maya Vance — Curious Orb",
    "artist": "Maya Vance",
    "album": "Ctrl Alt Dream",
    "year": "2017",
    "genre": "RnB and Soul",
    "subgenre": "Bedroom Alt-R&B",
    "bpm": 62,
    "mood": "Calm, Reflective",
    "description": "An airy, natural-light portrait of the singer sitting cross-legged in an overgrown vacant lot in an oversized thrifted button-down, backed by a monumental wall of discarded CRT computer monitors tangled in ivy.",
    "duration": "0:36",
    "src": "assets/audio/paper-ticket-sunrise.mp3",
    "cover": "assets/covers/19_Maya_Vance.jpg",
    "suno_prompt": "bedroom alt-r&b, lo-fi rhodes, muted 808 kick, vinyl noise, 80bpm, intimate breathy female vocals, cozy warm mix",
    "sonic_identity": "Intimate, lo-fi bedroom R&B driven by cozy Rhodes chords, subtle vinyl noise, and quiet, soulful breathy vocals."
  },
  {
    "id": "set1-20-sterling-fox",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Sterling Fox — Crescent",
    "artist": "Sterling Fox",
    "album": "24 Karat Velvet",
    "year": "2016",
    "genre": "RnB and Soul",
    "subgenre": "Retro-Funk Revival",
    "bpm": 92,
    "mood": "Chill",
    "description": "A vibrant, retro-futuristic funk portrait of a musician in an opulent silk track jacket, layered gold rope chains, and tinted aviators, winking under warm amber strobe lights while holding a gold-plated rotary telephone.",
    "duration": "0:36",
    "src": "assets/audio/platform-echo.mp3",
    "cover": "assets/covers/20_Sterling_Fox.jpg",
    "suno_prompt": "retro-funk, p-funk, boogie bassline, rhythm guitar chops, talkbox, 112bpm, charismatic male vocals, 80s synth brass",
    "sonic_identity": "Infectious 80s retro-funk with popping synth basslines, rhythmic guitar chops, and charismatic talkbox vocal accents."
  },
  {
    "id": "set1-21-the-binary-automata",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "The Binary Automata — The Shape Of A Dream",
    "artist": "The Binary Automata",
    "album": "Infinite Memory",
    "year": "2013",
    "genre": "Electronic and Dance",
    "subgenre": "French Electro / Nu-Disco",
    "bpm": 116,
    "mood": "Hopeful",
    "description": "A pristine, mirror-polished portrait of two humanoid android helmets merged in profile — one anodized gold, the other liquid chrome — wearing tailored Saint Laurent sequined tuxedo collars against an infinite starfield.",
    "duration": "0:37",
    "src": "assets/audio/redfern-current.mp3",
    "cover": "assets/covers/21_The_Binary_Automata.jpg",
    "suno_prompt": "French electro, nu-disco, sidechained synth bass, filter sweeps, 124bpm, robotic vocoder vocals, high-energy festival house beat",
    "sonic_identity": "High-octane French electro house featuring pumping sidechained synth basslines, dramatic filter sweeps, and robotic vocoder hooks."
  },
  {
    "id": "set1-22-glitch-cherub",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Glitch Cherub — Take Our Time",
    "artist": "Glitch Cherub",
    "album": "Pearlescent Skin",
    "year": "2018",
    "genre": "Electronic and Dance",
    "subgenre": "Hyperpop / Deconstructed Club",
    "bpm": 98,
    "mood": "Romantic, Reflective, Fun, Happy",
    "description": "A surreal, glossy digital render of an ethereal figure floating submerged in a pool of clear gel under a lavender twilight sky, surrounded by melting chrome spheres and liquid latex ribbons.",
    "duration": "0:38",
    "src": "assets/audio/signal-at-central.mp3",
    "cover": "assets/covers/22_Glitch_Cherub.jpg",
    "suno_prompt": "hyperpop, deconstructed club, metallic snare, stutter chops, pitch-shifted vocals, 150bpm, chaotic synth arpeggios, avant-garde pop",
    "sonic_identity": "Futuristic, chaotic hyperpop combining metallic percussion stutters, extreme pitch-shifted vocal hooks, and synth arpeggios."
  },
  {
    "id": "set1-23-voltage-overload",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Voltage Overload — A Case Of The Boos",
    "artist": "Voltage Overload",
    "album": "Sonic Shockwave",
    "year": "2011",
    "genre": "Electronic and Dance",
    "subgenre": "Brostep / Bass Explosion",
    "bpm": 69,
    "mood": "Quirky, Fun, Suspenseful",
    "description": "A high-contrast, side-lit portrait of a DJ mid-headbang with an asymmetrical shaved undercut and thick horn-rimmed glasses, silhouetted against an explosive lime-green audio waveform graphic with a cracked record-label stamp.",
    "duration": "0:40",
    "src": "assets/audio/sixteen-lanes.mp3",
    "cover": "assets/covers/23_Voltage_Overload.jpg",
    "suno_prompt": "brostep, dubstep explosion, screeching growl bass, heavy snare drop, 140bpm, aggressive male vocal chant, maximum sub bass",
    "sonic_identity": "Heavyweight 2010s dubstep characterized by aggressive synth growls, devastating 140bpm drops, and thunderous sub-bass."
  },
  {
    "id": "set1-24-zero-horizon",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Zero Horizon — Captivated",
    "artist": "Zero Horizon",
    "album": "Cellular Crystals",
    "year": "2013",
    "genre": "Electronic and Dance",
    "subgenre": "Ambient / Generative Electronics",
    "bpm": 124,
    "mood": "Hopeful, Inspiring",
    "description": "An austere, mesmerizing micro-photograph of chemical crystals blossoming into intricate spires of iridescent cyan, gold, and deep indigo under polarized laboratory light, set within a vast matte-white border.",
    "duration": "0:39",
    "src": "assets/audio/surry-line.mp3",
    "cover": "assets/covers/24_Zero_Horizon.jpg",
    "suno_prompt": "ambient, generative electronics, granulating synth textures, slow evolving pads, no beat, meditative serene atmosphere, hifi soundscape",
    "sonic_identity": "Serene, beatless ambient electronic music featuring evolving granular synthesis, lush pad layers, and deep meditative focus."
  },
  {
    "id": "set1-25-solar-ignition",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Solar Ignition — Original (ft. Daisha McBride)",
    "artist": "Solar Ignition",
    "album": "Festival Anthem",
    "year": "2013",
    "genre": "Electronic and Dance",
    "subgenre": "Stadium Progressive House",
    "bpm": 155,
    "mood": "Fun, Happy, Inspiring",
    "description": "A warm, split-tone festival portrait of a smiling young Swedish producer in a backward trucker hat and over-ear headphones, double-exposed with the raw timber grain of an acoustic guitar and neon laser bursts.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/25_Solar_Ignition.jpg",
    "suno_prompt": "stadium progressive house, euphoric piano riff, sidechained synth lead, massive build-up, 128bpm, uplifting festival drop, clean hifi",
    "sonic_identity": "Festival-ready progressive house driven by golden piano chords, soaring synth leads, and euphoric stadium build-ups."
  },
  {
    "id": "set1-26-silas-boone",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Silas Boone — Extreme Dream",
    "artist": "Silas Boone",
    "album": "Highway Dust",
    "year": "2015",
    "genre": "Country and Americana",
    "subgenre": "Outlaw Neo-Traditionalist",
    "bpm": 82,
    "mood": "Chill, Happy, Hopeful, Fun",
    "description": "A rugged, sepia-tinted black-and-white portrait of a wild-bearded singer with an eagle feather tucked into his beat-up Stetson, leaning against the weathered bed of an old pickup truck on a foggy mountain highway.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/26_Silas_Boone.jpg",
    "suno_prompt": "outlaw country, traditional neo-country, telecaster twang, acoustic rhythm, 108bpm, deep gravelly male vocals, classic pedal steel",
    "sonic_identity": "Raw outlaw country with biting Telecaster guitar twang, weeping pedal steel, and a deep, gravelly male vocal tone."
  },
  {
    "id": "set1-27-clara-june",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Clara June — Velvet Empire",
    "artist": "Clara June",
    "album": "Summer 1989",
    "year": "2014",
    "genre": "Country and Americana",
    "subgenre": "Country-Pop Crossover",
    "bpm": 80,
    "mood": "Inspiring, Fun",
    "description": "A nostalgic, slightly washed-out Polaroid print cropped just below the singer's eyes, showing a faded baby-blue sweatshirt printed with vintage bird silhouettes, with handwritten black Sharpie text across the white bottom margin.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/27_Clara_June.jpg",
    "suno_prompt": "country-pop crossover, acoustic guitar strum, bright fiddle, driving drums, 118bpm, catchy sweet female vocals, polished radio mix",
    "sonic_identity": "Polished, radio-ready country-pop featuring sparkling acoustic guitars, energetic fiddle hooks, and catchy female lead vocals."
  },
  {
    "id": "set1-28-prairie-opal",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Prairie Opal — With You",
    "artist": "Prairie Opal",
    "album": "Golden Skylines",
    "year": "2018",
    "genre": "Country and Americana",
    "subgenre": "Cosmic Country / Bluegrass Pop",
    "bpm": 140,
    "mood": "Romantic, Reflective, Calm",
    "description": "A sun-drenched, saturated 35mm portrait of a singer against an electric-blue summer sky, holding an open rainbow paper fan covering her mouth, bathed in golden Texas dusk light with subtle prism flare.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/28_Prairie_Opal.jpg",
    "suno_prompt": "cosmic country, bluegrass pop, fast banjo picking, upright bass, mandolin, 135bpm, crystalline female vocal harmonies, warm acoustic mix",
    "sonic_identity": "Upbeat cosmic bluegrass-pop featuring lightning-fast banjo rolls, wooden mandolin chops, and sparkling female vocal harmonies."
  },
  {
    "id": "set1-29-the-mojave-drifters",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "The Mojave Drifters — Takin The Cake (ft. Daisha McBride)",
    "artist": "The Mojave Drifters",
    "album": "Neon Canteen",
    "year": "2017",
    "genre": "Country and Americana",
    "subgenre": "Retro Country-Rock",
    "bpm": 145,
    "mood": "Fun",
    "description": "A sun-faded 1970s-throwback photograph of three musicians in custom rhinestone-piped suits and feathered cowboy hats leaning against a dusty 1976 El Camino outside a West Texas dive bar.",
    "duration": "0:33",
    "src": "assets/audio/last-tram-home.mp3",
    "cover": "assets/covers/29_The_Mojave_Drifters.jpg",
    "suno_prompt": "retro country-rock, laurel canyon acoustic, tremolo electric guitar, pedal steel, 98bpm, relaxed male vocal harmonies, warm vintage 70s mix",
    "sonic_identity": "Sun-drenched 70s country-rock blending tremolo-drenched electric guitars, pedal steel swells, and laid-back male vocal harmonies."
  },
  {
    "id": "set1-30-caleb-vance---the-rust-belt",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Caleb Vance & The Rust Belt — Overcrank",
    "artist": "Caleb Vance & The Rust Belt",
    "album": "Whiskey & Wire",
    "year": "2013",
    "genre": "Country and Americana",
    "subgenre": "Raw Americana / Southern Roots",
    "bpm": 170,
    "mood": "Fun",
    "description": "A somber, high-contrast monochrome portrait of the songwriter in a frayed denim jacket, clutching an acoustic guitar with heavy belt-buckle wear, standing beside an abandoned brick grain silo.",
    "duration": "0:33",
    "src": "assets/audio/nocturne-for-499.mp3",
    "cover": "assets/covers/30_Caleb_Vance_&_The_Rust_Belt.jpg",
    "suno_prompt": "americana, southern roots rock, rasping slide guitar, Hammond B3 organ, 102bpm, rugged male vocals, raw heartland production",
    "sonic_identity": "Gritty, heartland Americana rock featuring screaming slide guitar, warm Hammond B3 organ, and rugged, passionate vocals."
  },
  {
    "id": "set1-31-sol-invictus",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Sol Invictus — Days Gone By",
    "artist": "Sol Invictus",
    "album": "Celestial Anthem",
    "year": "2015",
    "genre": "Jazz",
    "subgenre": "Spiritual Cosmic Jazz",
    "bpm": 95,
    "mood": "Reflective, Calm",
    "description": "A monumental wide shot of a towering saxophonist in an ornate African wax-print tunic holding his horn toward the sky, standing at the edge of a desert cliff under a cosmic swirl of violet galaxies.",
    "duration": "0:36",
    "src": "assets/audio/paper-ticket-sunrise.mp3",
    "cover": "assets/covers/31_Sol_Invictus.jpg",
    "suno_prompt": "spiritual jazz, cosmic jazz, tenor saxophone solo, modal piano chords, gong, 88bpm, contemplative bass groove, warm analog acoustics",
    "sonic_identity": "Transcendent spiritual jazz anchored by soaring tenor saxophone improvs, modal piano chords, and meditative acoustic bass lines."
  },
  {
    "id": "set1-32-kojo-eclipse",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Kojo Eclipse — Welcome To The Good Life (ft. Daisha McBride)",
    "artist": "Kojo Eclipse",
    "album": "Afro-Futurism '17",
    "year": "2017",
    "genre": "Jazz",
    "subgenre": "Trap-Jazz / Afrofuturist Trumpet",
    "bpm": 100,
    "mood": "Fun, Happy, Inspiring, Hopeful",
    "description": "A sleek, Afrofuturist studio portrait of a trumpet virtuoso in an intricate hand-beaded ceremonial vest and heavy metallic collar, holding an upward-angled brass horn sliced by minimalist crimson laser beams.",
    "duration": "0:36",
    "src": "assets/audio/platform-echo.mp3",
    "cover": "assets/covers/32_Kojo_Eclipse.jpg",
    "suno_prompt": "trap-jazz, afrofuturist trumpet, 808 trap drums, muted brass, 132bpm, virtuoso trumpet solos, dark futuristic atmosphere",
    "sonic_identity": "Innovatory trap-jazz fusion pairing complex Afrofuturist trumpet solos over crisp 808 trap drums and dark atmospheric synths."
  },
  {
    "id": "set1-33-funkzilla",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Funkzilla — Life Giver",
    "artist": "Funkzilla",
    "album": "Poolside Odyssey",
    "year": "2017",
    "genre": "Jazz",
    "subgenre": "Wacky Virtuoso Jazz-Funk",
    "bpm": 110,
    "mood": "Calm, Hopeful",
    "description": "A playful, late-night poolside shot of a bassist submerged to his nostrils in red-lit water, wearing a faux-fur wolf cowl and oversized gold medallions, staring with wide deadpan eyes.",
    "duration": "0:37",
    "src": "assets/audio/redfern-current.mp3",
    "cover": "assets/covers/33_Funkzilla.jpg",
    "suno_prompt": "virtuoso jazz-funk, slap bass solo, wah-wah guitar, clavinet, 116bpm, eccentric vocal adlibs, tight horn section, high-energy funk",
    "sonic_identity": "High-octane, humorous jazz-funk featuring acrobatic slap bass solos, funky clavinet grooves, and punchy horn arrangements."
  },
  {
    "id": "set1-34-amina-thorne",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Amina Thorne — Gimmie A Yeehaw",
    "artist": "Amina Thorne",
    "album": "Brooklyn Reverie",
    "year": "2012",
    "genre": "Jazz",
    "subgenre": "Modern Vocal Jazz & Upright Bass",
    "bpm": 125,
    "mood": "Fun, Happy, Quirky",
    "description": "A joyful, sunlit portrait of a young prodigy with a voluminous halo afro and round glasses, laughing as she embraces her upright double bass on a Brooklyn brownstone stoop.",
    "duration": "0:38",
    "src": "assets/audio/signal-at-central.mp3",
    "cover": "assets/covers/34_Amina_Thorne.jpg",
    "suno_prompt": "vocal jazz, modern jazz trio, acoustic upright bass, brush drum kit, 78bpm, sultry velvet female vocals, intimate club acoustics",
    "sonic_identity": "Sophisticated modern vocal jazz featuring sultry velvet female lead vocals, delicate brush drumming, and woody upright bass solos."
  },
  {
    "id": "set1-35-the-basement-sessions",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "The Basement Sessions — Magic Everywhere",
    "artist": "The Basement Sessions",
    "album": "Late Night Tape Loops",
    "year": "2016",
    "genre": "Jazz",
    "subgenre": "Instrumental Hip-Hop / Post-Bop",
    "bpm": 118,
    "mood": "Hopeful, Inspiring, Happy",
    "description": "A grainy 16mm film capture of four young musicians in oversized thrifted knit sweaters and slacks, sitting quietly among tangled patch cords, a vintage Rhodes piano, and muffled drum kits in a wood-paneled basement.",
    "duration": "0:40",
    "src": "assets/audio/sixteen-lanes.mp3",
    "cover": "assets/covers/35_The_Basement_Sessions.jpg",
    "suno_prompt": "instrumental hip-hop, post-bop jazz, rhodes piano, muted trumpet, 86bpm boom-bap beat, live bass guitar, dusty crate digger lo-fi",
    "sonic_identity": "Dusty crate-digger instrumental hip-hop combining mellow Rhodes chords, muted jazz trumpet, and a head-nodding boom-bap beat."
  },
  {
    "id": "set1-36-order-of-the-black-sun",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Order of the Black Sun — Panic Protocol",
    "artist": "Order of the Black Sun",
    "album": "Cathedral of Ash",
    "year": "2015",
    "genre": "Metal",
    "subgenre": "Theatrical Occult Doom Metal",
    "bpm": 174,
    "mood": "Suspenseful",
    "description": "A towering, Art Deco cathedral facade rendered in charcoal and burnished bronze, where a skeletal anti-pope in embroidered vestments raises a chalice above a sea of chrome-masked acolytes.",
    "duration": "0:39",
    "src": "assets/audio/surry-line.mp3",
    "cover": "assets/covers/36_Order_of_the_Black_Sun.jpg",
    "suno_prompt": "occult doom metal, black sabbath worship, crushing low-tuned fuzz guitar, slow heavy drums, 60bpm, operatic theatrical male vocals",
    "sonic_identity": "Crushing, slow-burning occult doom metal featuring wall-of-sound fuzz riffs, thundering slow drums, and theatrical operatic vocals."
  },
  {
    "id": "set1-37-titan-rift",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Titan Rift — Don’t Play With My Heart",
    "artist": "Titan Rift",
    "album": "Molten Core",
    "year": "2016",
    "genre": "Metal",
    "subgenre": "Progressive Eco-Metal",
    "bpm": 145,
    "mood": "Fun, Happy, Quirky",
    "description": "A stark, minimalist woodblock illustration of a colossal volcanic crag fracturing down the center, shedding a single teardrop of molten gold magma into a bottomless black ocean.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/37_Titan_Rift.jpg",
    "suno_prompt": "progressive metal, djent, 8-string polyrhythmic guitar riffs, technical drumming, 130bpm, brutal growls transitioning to soaring clean vocals",
    "sonic_identity": "Technical progressive metalcore driven by heavy 8-string polyrhythmic djent riffs, complex drum patterns, and dynamic vocal shifts."
  },
  {
    "id": "set1-38-sunbleached",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Sunbleached — The Return Home",
    "artist": "Sunbleached",
    "album": "Blinding Horizon",
    "year": "2013",
    "genre": "Metal",
    "subgenre": "Blackgaze / Pastel Post-Metal",
    "bpm": 115,
    "mood": "Hopeful, Inspiring, Happy",
    "description": "A blinding, monochromatic field of warm pastel salmon-pink that deliberately defies heavy-metal cliches, overlaid with delicate, widely spaced white serif typography.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/38_Sunbleached.jpg",
    "suno_prompt": "blackgaze, pastel post-metal, tremolo picking, blast beats, lush shoegaze guitars, 145bpm, distant sibilant shriek vocals, euphoric swell",
    "sonic_identity": "Euphoric blackgaze shoegaze fusing wall-of-sound distorted guitars, fast blast beats, and distant, atmospheric vocal shrieks."
  },
  {
    "id": "set1-39-liturgy-of-the-frost",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Liturgy of the Frost — Confessions",
    "artist": "Liturgy of the Frost",
    "album": "Blackened Icons",
    "year": "2015",
    "genre": "Metal",
    "subgenre": "Atmospheric Orthodox Black Metal",
    "bpm": 100,
    "mood": "Calm, Suspenseful, Reflective",
    "description": "A distressed, antique wooden panel of an Eastern European icon where the faces of holy figures have been meticulously scraped away into pitch-black silhouettes, surrounded by dripping candle wax and gold leaf.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/39_Liturgy_of_the_Frost.jpg",
    "suno_prompt": "atmospheric black metal, raw Scandinavian production, icy tremolo guitar, fast blast beats, 160bpm, raspy high-pitched black metal screams",
    "sonic_identity": "Fierce, atmospheric Scandinavian black metal featuring icy tremolo guitar riffs, relentless blast beats, and harsh raspy screams."
  },
  {
    "id": "set1-40-architects-of-dawn",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Architects of Dawn — Dance All Night",
    "artist": "Architects of Dawn",
    "album": "Sacred Geometry",
    "year": "2013",
    "genre": "Metal",
    "subgenre": "Electronic Metalcore / Djent",
    "bpm": 120,
    "mood": "Fun, Happy, Quirky",
    "description": "A pristine gold foil embossing of the Flower of Life sacred geometry symbol centered against a velvety, matte-black textured sleeve, accented by subtle microscopic gridlines.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/40_Architects_of_Dawn.jpg",
    "suno_prompt": "electronic metalcore, synth-djent, aggressive guitar breakdowns, industrial synth pulses, 135bpm, harsh scream and catchy clean duet",
    "sonic_identity": "Futuristic electronic metalcore blending heavy djent guitar breakdowns, industrial synth pulses, and dual scream/clean vocals."
  },
  {
    "id": "set1-41-tobias-crane",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Tobias Crane — Lucky Duck",
    "artist": "Tobias Crane",
    "album": "Sarcastic Pastoral",
    "year": "2015",
    "genre": "Folk and Acoustic",
    "subgenre": "Cynical Laurel Canyon Chamber-Folk",
    "bpm": 157,
    "mood": "Fun, Happy, Quirky",
    "description": "A lush, satirical oil painting parodying Baroque church art, showing a bearded singer in a tuxedo kneeling in an alpine meadow nursing an infant with his own adult face, surrounded by haloed woodland animals.",
    "duration": "0:33",
    "src": "assets/audio/last-tram-home.mp3",
    "cover": "assets/covers/41_Tobias_Crane.jpg",
    "suno_prompt": "laurel canyon folk, chamber folk, fingerpicked acoustic guitar, string quartet, 82bpm, cynical dry male vocals, intimate parlor sound",
    "sonic_identity": "Wry, sardonic Laurel Canyon chamber folk featuring intricate fingerpicked acoustic guitars and elegant string quartet backings."
  },
  {
    "id": "set1-42-pine-needle-cathedral",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Pine Needle Cathedral — Divine Land",
    "artist": "Pine Needle Cathedral",
    "album": "33 / Glitch / Hymn",
    "year": "2016",
    "genre": "Folk and Acoustic",
    "subgenre": "Experimental Folktronica / Vocoder",
    "bpm": 120,
    "mood": "Hopeful, Inspiring, Calm",
    "description": "An esoteric, glitch-art collage of hand-drawn occult sigils, red digital numerology, alchemical diagrams, and distressed photocopy fragments printed on unbleached cardboard stock.",
    "duration": "0:33",
    "src": "assets/audio/nocturne-for-499.mp3",
    "cover": "assets/covers/42_Pine_Needle_Cathedral.jpg",
    "suno_prompt": "folktronica, experimental acoustic, vocoder vocal harmonies, glitch percussion, acoustic guitar, 95bpm, serene mysterious atmosphere",
    "sonic_identity": "Serene folktronica fusing organic acoustic guitar picking with vocoded vocal harmonies and subtle glitch electronic percussion."
  },
  {
    "id": "set1-43-the-juniper-belles",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "The Juniper Belles — Tempo",
    "artist": "The Juniper Belles",
    "album": "Nordic Whispers",
    "year": "2012",
    "genre": "Folk and Acoustic",
    "subgenre": "Nordic Sibling Harmony Folk",
    "bpm": 127,
    "mood": "Fun, Happy",
    "description": "A dreamy, natural-light portrait of two sisters in vintage floral prairie dresses and fringed suede jackets, standing shoulder-to-shoulder amid mist-shrouded spruce trees in a Nordic forest.",
    "duration": "0:36",
    "src": "assets/audio/paper-ticket-sunrise.mp3",
    "cover": "assets/covers/43_The_Juniper_Belles.jpg",
    "suno_prompt": "Nordic folk, sibling harmony folk, acoustic guitar, hardanger violin, 88bpm, haunting female twin vocal harmonies, Scandinavian acoustics",
    "sonic_identity": "Haunting Nordic indie folk characterized by pristine sibling vocal harmonies, acoustic guitar strumming, and Hardanger fiddle accents."
  },
  {
    "id": "set1-44-timber---twine",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Timber & Twine — Now I'm Here",
    "artist": "Timber & Twine",
    "album": "Front Porch Anthems",
    "year": "2012",
    "genre": "Folk and Acoustic",
    "subgenre": "Stomp-and-Holler Indie Folk",
    "bpm": 105,
    "mood": "Inspiring, Hopeful",
    "description": "A warm, candid black-and-white snapshot of four friends on the wooden porch of an old cabin, holding an upright bass, mandolin, and cello, with a hand-drawn song title and an antique ribbon microphone.",
    "duration": "0:36",
    "src": "assets/audio/platform-echo.mp3",
    "cover": "assets/covers/44_Timber_&_Twine.jpg",
    "suno_prompt": "stomp-and-holler, indie folk, gang vocals, acoustic guitar, tambourine, 120bpm, energetic passionate male vocals, foot-stomping rhythm",
    "sonic_identity": "Rousing stomp-and-holler indie folk featuring foot-stomping rhythms, group gang vocals, and acoustic guitar strumming."
  },
  {
    "id": "set1-45-the-cobblestone-troubadours",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "The Cobblestone Troubadours — Honey",
    "artist": "The Cobblestone Troubadours",
    "album": "Babel Alley",
    "year": "2012",
    "genre": "Folk and Acoustic",
    "subgenre": "Tweed Banjo-Folk Revival",
    "bpm": 116,
    "mood": "Happy, Calm, Romantic, Reflective",
    "description": "A sepia-drenched, flash-lit tavern shot of four young men in tweed waistcoats and rolled-up shirtsleeves laughing over wooden tankards, accordion and banjo in hand against an exposed brick wall.",
    "duration": "0:37",
    "src": "assets/audio/redfern-current.mp3",
    "cover": "assets/covers/45_The_Cobblestone_Troubadours.jpg",
    "suno_prompt": "tweed banjo folk, traditional British folk, open-back banjo, accordion, 105bpm, rustic storytelling male vocals, tavern acoustic vibe",
    "sonic_identity": "Rustic British banjo folk featuring lively open-back banjo picking, accordion flourishes, and storytelling acoustic vocals."
  },
  {
    "id": "set1-46-solaria",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Solaria — Level Up",
    "artist": "Solaria",
    "album": "Angels of Andalusia",
    "year": "2018",
    "genre": "Latin and Global",
    "subgenre": "Avant-Flamenco Urban Vanguard",
    "bpm": 145,
    "mood": "Fun, Happy",
    "description": "A surreal, high-art digital portrait of a singer floating weightlessly like an angelic Madonna among golden morning clouds, clad in sheer billowing white chiffon with long crystal-encrusted acrylic claws.",
    "duration": "0:38",
    "src": "assets/audio/signal-at-central.mp3",
    "cover": "assets/covers/46_Solaria.jpg",
    "suno_prompt": "avant-flamenco, urban vanguard, nylon string flamenco guitar, cajon, palmas clapping, 110bpm, passionate Spanish female vocals, modern sub bass",
    "sonic_identity": "Avant-garde flamenco-fusion pairing rapid nylon-string guitar rasgueados, cajón beats, and modern sub-bass pulses."
  },
  {
    "id": "set1-47-el-chico-malo",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "El Chico Malo — Moonlight",
    "artist": "El Chico Malo",
    "album": "Neon Nostalgia",
    "year": "2018",
    "genre": "Latin and Global",
    "subgenre": "Neon-Pastel Latin Trap",
    "bpm": 114,
    "mood": "Hopeful, Inspiring",
    "description": "A vibrant, neon-pastel cartoon portrait of a Latin trap singer with an inked third eye on his forehead, wearing reflective yellow goggles and a bright buzzcut, surrounded by doodles of sad hearts and melting palm trees.",
    "duration": "0:40",
    "src": "assets/audio/sixteen-lanes.mp3",
    "cover": "assets/covers/47_El_Chico_Malo.jpg",
    "suno_prompt": "latin trap, urbano, 808 bass, hi-hat rolls, reggaeton snare, 128bpm, auto-tuned Spanish male vocals, neon synth lead",
    "sonic_identity": "Neon-drenched Latin trap featuring heavy 808 sub-bass, rapid hi-hat rolls, and smooth autotuned Spanish vocals."
  },
  {
    "id": "set1-48-marisol-morales",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Marisol Morales — Tidal Light",
    "artist": "Marisol Morales",
    "album": "Colonial Courtyard",
    "year": "2015",
    "genre": "Latin and Global",
    "subgenre": "Latin Acoustic Indie-Folk",
    "bpm": 130,
    "mood": "Romantic, Reflective, Hopeful, Inspiring, Calm",
    "description": "A soft, warm-toned 35mm film photograph of a singer sitting peacefully with an acoustic nylon-string guitar in a sun-drenched colonial Mexican patio filled with terra-cotta pots and blooming bougainvillea.",
    "duration": "0:39",
    "src": "assets/audio/surry-line.mp3",
    "cover": "assets/covers/48_Marisol_Morales.jpg",
    "suno_prompt": "latin indie-folk, acoustic nylon guitar, gentle percussion, 84bpm, warm intimate Spanish female vocals, courtyard acoustic vibe",
    "sonic_identity": "Intimate Latin acoustic folk featuring delicate nylon-string guitar picking, soft shaker percussion, and warm female vocals."
  },
  {
    "id": "set1-49-mateo-delgado",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Mateo Delgado — Stronger Than Time",
    "artist": "Mateo Delgado",
    "album": "Charro de Medianoche",
    "year": "2017",
    "genre": "Latin and Global",
    "subgenre": "Modern Mariacheño Prodigy",
    "bpm": 150,
    "mood": "Reflective, Romantic, Hopeful, Inspiring",
    "description": "A formal, youthful portrait of an eighteen-year-old singer in a tailored black-and-silver embroidered mariachi jacket and wide felt sombrero, holding a guitar under dramatic stadium spotlights against a deep crimson curtain.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/49_Mateo_Delgado.jpg",
    "suno_prompt": "neo-mariachi, modern ranchera, trumpet duo, vihuela, guitarron, 92bpm, dramatic belting Spanish male vocals, romantic Mexican ballads",
    "sonic_identity": "Dramatic neo-mariachi featuring soaring dual trumpets, rhythmic vihuela strumming, and powerful, romantic Spanish lead vocals."
  },
  {
    "id": "set1-50-rey-caribe",
    "set": "Set 1 (2010s Fictional Originals)",
    "title": "Rey Caribe — Turns",
    "artist": "Rey Caribe",
    "album": "Vibra Tropical",
    "year": "2018",
    "genre": "Latin and Global",
    "subgenre": "Global Electro-Reggaeton",
    "bpm": 175,
    "mood": "Reflective, Suspenseful, Romantic",
    "description": "A hyper-vibrant, neon-saturated portrait of a reggaeton artist sporting rainbow-dyed hair and diamond grillz, grinning broadly against a bright yellow background packed with plush Takashi Murakami-style smiling flowers.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/50_Rey_Caribe.jpg",
    "suno_prompt": "global electro-reggaeton, dembow beat, tropical synth lead, 100bpm, energetic Caribbean male vocal chant, summer festival vibe",
    "sonic_identity": "High-energy global electro-reggaeton driven by infectious Dembow drum patterns, tropical synth leads, and festival vocal chants."
  },
  {
    "id": "set2-01-neon-mirage",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Neon Mirage — Release The Pressure",
    "artist": "Neon Mirage",
    "album": "Desert Oscillations",
    "year": "2014",
    "genre": "Rock and Alternative",
    "subgenre": "Neo-Garage Psych-Rock",
    "bpm": 134,
    "mood": "Angry, Fun",
    "description": "A grainy 35mm photograph of four musicians in vintage denim and retro sunglasses standing beside an abandoned turquoise motel pool in Palm Springs, double-exposed with a shimmering iridescent mirage wave.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/set2-01-neon-mirage.jpg",
    "suno_prompt": "neo-garage psych-rock, fuzz guitar riff, farfisa organ, driving drums, 124bpm, echoey male vocals, 60s garage rock revival",
    "sonic_identity": "Sun-drenched neo-garage psych-rock featuring buzzing fuzz guitars, swirling Farfisa organ, and reverberant garage vocals."
  },
  {
    "id": "set2-02-rust---reverie",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Rust & Reverie — Touch Some Grass",
    "artist": "Rust & Reverie",
    "album": "Static Highways",
    "year": "2012",
    "genre": "Rock and Alternative",
    "subgenre": "Heartland Post-Punk",
    "bpm": 108,
    "mood": "Fun, Happy, Quirky",
    "description": "A stark black-and-white landscape of rusted railway lines stretching toward an ominous thunderstorm over an industrial Midwestern river town, framed by a thick white Polaroid border and bold condensed serif font.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/set2-02-rust-and-reverie.jpg",
    "suno_prompt": "heartland post-punk, jangle guitar, pulsing bassline, 118bpm, earnest baritone male vocals, 80s college radio rock",
    "sonic_identity": "Earnest heartland post-punk blending jangly Rickenbacker guitars, driving basslines, and passionate baritone vocals."
  },
  {
    "id": "set2-03-the-riot-act",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "The Riot Act — Halo Balance",
    "artist": "The Riot Act",
    "album": "Concrete Youth",
    "year": "2017",
    "genre": "Rock and Alternative",
    "subgenre": "Riot Grrrl / Anarcho-Punk",
    "bpm": 113,
    "mood": "Chill, Fun, Happy",
    "description": "A xerox-distorted, high-contrast collage of torn protest flyers, safety pins, and a roaring singer clutching a taped-up microphone, slashed across the middle with electric-pink spray paint reading 'NO PERMISSION'.",
    "duration": "0:33",
    "src": "assets/audio/last-tram-home.mp3",
    "cover": "assets/covers/set2-03-the-riot-act.jpg",
    "suno_prompt": "riot grrrl, anarcho-punk, distorted power chords, fast driving drums, 150bpm, ferocious aggressive female vocals, raw DIY punk",
    "sonic_identity": "Ferocious 90s-style riot grrrl punk powered by heavy distorted power chords, fast tempo drums, and aggressive female vocals."
  },
  {
    "id": "set2-04-prism-of-andromeda",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Prism of Andromeda — Endless Motion",
    "artist": "Prism of Andromeda",
    "album": "Starlight Odyssey",
    "year": "2015",
    "genre": "Rock and Alternative",
    "subgenre": "Space Prog / Cosmic Krautrock",
    "bpm": 87,
    "mood": "Happy, Hopeful, Inspiring",
    "description": "A dazzling vintage sci-fi airbrush illustration of an explorer in an mirrored gold space helmet gazing into an open hyperspace wormhole shaped like an octahedron, floating in emerald and magenta star clusters.",
    "duration": "0:33",
    "src": "assets/audio/nocturne-for-499.mp3",
    "cover": "assets/covers/set2-04-prism-of-andromeda.jpg",
    "suno_prompt": "space prog, krautrock, analog synth arpeggios, motorik beat, 115bpm, soaring guitar solos, cosmic synth soundscape",
    "sonic_identity": "Expansive space prog and Krautrock featuring hypnotic analog synth arpeggios, motorik beats, and soaring guitar leads."
  },
  {
    "id": "set2-05-sunken-valleys",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Sunken Valleys — Padme",
    "artist": "Sunken Valleys",
    "album": "Dusk over Calico",
    "year": "2013",
    "genre": "Rock and Alternative",
    "subgenre": "Stoner Rock / Heavy Desert Fuzz",
    "bpm": 100,
    "mood": "Calm, Sad, Reflective",
    "description": "An ominous graphic print of a horned ram skull cast in weathered bronze resting on cracked desert earth under a blood-orange eclipse, textured with coarse sandpaper grit and heavy woodcut typography.",
    "duration": "0:36",
    "src": "assets/audio/paper-ticket-sunrise.mp3",
    "cover": "assets/covers/set2-05-sunken-valleys.jpg",
    "suno_prompt": "stoner rock, desert fuzz, heavy valve amp distortion, slow thundering drums, 85bpm, gravelly male vocals, raw vintage production",
    "sonic_identity": "Slow-burning, heavy desert stoner rock with wall-of-sound valve amp fuzz riffs and thundering, slow-tempo drum grooves."
  },
  {
    "id": "set2-06-synthetic-heart",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Synthetic Heart — Wildest Dreams",
    "artist": "Synthetic Heart",
    "album": "Midnight Hotline",
    "year": "2015",
    "genre": "Pop and Electropop",
    "subgenre": "Outrun Synthwave / Pop Melodrama",
    "bpm": 154,
    "mood": "Reflective, Hopeful, Inspiring",
    "description": "A gleaming sports car speeding along a palm-lined highway toward a wireframe vector grid sunset, bathed in violet and magenta neon glow with chrome italicized script across the windshield.",
    "duration": "0:36",
    "src": "assets/audio/platform-echo.mp3",
    "cover": "assets/covers/set2-06-synthetic-heart.jpg",
    "suno_prompt": "outrun synthwave, 80s electropop, linndrum beat, gated reverb snare, analog synth lead, 112bpm, dramatic male vocals, retro cyberpunk",
    "sonic_identity": "Cinematic 80s outrun synthwave featuring punchy LinnDrum patterns, gated reverb snares, and dramatic synth leads."
  },
  {
    "id": "set2-07-princess-glitterbomb",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Princess Glitterbomb — Leaving Slow",
    "artist": "Princess Glitterbomb",
    "album": "Sparkle Renaissance",
    "year": "2011",
    "genre": "Pop and Electropop",
    "subgenre": "Maximalist Hyper-Pop",
    "bpm": 124,
    "mood": "Calm, Reflective, Sad",
    "description": "A high-fashion bubblegum explosion of iridescent disco balls, pink latex balloons, and a singer in oversized diamond sunglasses holding a bedazzled scepter, with holographic foil lettering.",
    "duration": "0:37",
    "src": "assets/audio/redfern-current.mp3",
    "cover": "assets/covers/set2-07-princess-glitterbomb.jpg",
    "suno_prompt": "hyperpop, maximalist bubblegum bass, pitched vocals, metallic synth stabs, 155bpm, chaotic cheerful female pop vocals",
    "sonic_identity": "Maximalist, neon hyperpop packed with pitch-shifted vocal hooks, explosive bubblegum bass drops, and metallic synth stabs."
  },
  {
    "id": "set2-08-northside-boys",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Northside Boys — Paper Tide",
    "artist": "Northside Boys",
    "album": "Rooftop Confessions",
    "year": "2013",
    "genre": "Pop and Electropop",
    "subgenre": "Harmonized Indie-Pop Boyband",
    "bpm": 120,
    "mood": "Calm, Reflective, Hopeful",
    "description": "A golden-hour photograph of four stylish young men in rolled wool beanies, camel coats, and white sneakers laughing on a Brooklyn brownstone rooftop against the hazy Manhattan skyline.",
    "duration": "0:38",
    "src": "assets/audio/signal-at-central.mp3",
    "cover": "assets/covers/set2-08-northside-boys.jpg",
    "suno_prompt": "indie-pop boyband, acoustic guitar, polished 4-part vocal harmonies, snappy clap beat, 116bpm, radio-ready male pop vocals",
    "sonic_identity": "Polished, harmonized indie-pop boyband featuring bright acoustic guitar chords, handclaps, and slick four-part vocal harmonies."
  },
  {
    "id": "set2-09-automata-queen",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Automata Queen — Sofa",
    "artist": "Automata Queen",
    "album": "Cybernetic Love",
    "year": "2012",
    "genre": "Pop and Electropop",
    "subgenre": "Electro-Gothic Theatrical Pop",
    "bpm": 90,
    "mood": "Chill, Reflective, Calm",
    "description": "A dramatic close-up of a pop diva with porcelain doll skin and silver-plated tears, sporting a towering crown crafted from circuit boards and neon fiber optics against obsidian marble.",
    "duration": "0:40",
    "src": "assets/audio/sixteen-lanes.mp3",
    "cover": "assets/covers/set2-09-automata-queen.jpg",
    "suno_prompt": "electro-gothic, dark cabaret pop, pipe organ, industrial synth bass, 110bpm, dramatic theatrical female vocals, dark opera pop",
    "sonic_identity": "Theatrical electro-gothic pop blending haunting pipe organ chords, heavy industrial synth bass, and dramatic female vocals."
  },
  {
    "id": "set2-10-freja-vinter",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Freja Vinter — Forever After",
    "artist": "Freja Vinter",
    "album": "Glacier Echoes",
    "year": "2016",
    "genre": "Pop and Electropop",
    "subgenre": "Nordic Ambient Electropop",
    "bpm": 108,
    "mood": "Hopeful, Inspiring, Reflective, Romantic",
    "description": "An austere, minimalist aerial photograph of a lone figure in an oversized crimson parka walking across a vast, cracked azure ice shelf, framed by generous negative white space and razor-thin type.",
    "duration": "0:39",
    "src": "assets/audio/surry-line.mp3",
    "cover": "assets/covers/set2-10-freja-vinter.jpg",
    "suno_prompt": "Nordic ambient electropop, minimal synth pads, icy electronic percussion, 95bpm, breathy Scandinavian female vocals, spacious reverb",
    "sonic_identity": "Minimalist Nordic electropop featuring crystalline synth pads, subtle electronic beats, and icy, breathy female vocals."
  },
  {
    "id": "set2-11-808-cartel",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "808 Cartel — Deliverance",
    "artist": "808 Cartel",
    "album": "Sub-Zero Royalty",
    "year": "2016",
    "genre": "Hip Hop and Trap",
    "subgenre": "High-Bass Atlanta Trap",
    "bpm": 90,
    "mood": "Inspiring, Hopeful, Calm",
    "description": "A heavy, dark-toned 3D rendering of three platinum skulls wearing diamond-encrusted crowns, surrounded by stacks of frozen currency and glowing purple ice cubes with heavy embossed chrome lettering.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/set2-11-808-cartel.jpg",
    "suno_prompt": "Atlanta trap, heavy 808 sub bass, rapid hi-hat rolls, dark piano loop, 138bpm, aggressive male rap vocals, crisp modern mix",
    "sonic_identity": "Heavyweight Atlanta trap powered by subterranean 808 sub-bass, intricate hi-hat rolls, and sharp, aggressive rap delivery."
  },
  {
    "id": "set2-12-apex-predators",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Apex Predators — Soft Light, Slow Motion",
    "artist": "Apex Predators",
    "album": "Concrete Jungle '15",
    "year": "2015",
    "genre": "Hip Hop and Trap",
    "subgenre": "Hardcore Grime / UK Drill Vanguard",
    "bpm": 100,
    "mood": "Calm, Reflective",
    "description": "A gritty, low-angle night photo taken on an East London estate under flickering yellow sodium lights, four hooded figures in black puffers and balaclavas beside a snarling Rottweiler with red spray-painted graffiti.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/set2-12-apex-predators.jpg",
    "suno_prompt": "grime, UK drill, sliding 808 bass, staccato snare, 140bpm, intense fast-paced British male rap vocals, dark urban atmosphere",
    "sonic_identity": "Hard-hitting UK grime and drill featuring sliding 808 basslines, rapid staccato snares, and intense, fast-paced British rap flows."
  },
  {
    "id": "set2-13-trap-odyssey",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Trap Odyssey — Roll With It",
    "artist": "Trap Odyssey",
    "album": "Saturn V",
    "year": "2017",
    "genre": "Hip Hop and Trap",
    "subgenre": "Space Trap / Auto-Tune Cloud Rap",
    "bpm": 116,
    "mood": "Fun, Happy, Hopeful",
    "description": "A surreal purple-and-cyan digital artwork of a rocket booster lifting off from an Atlanta street corner, surrounded by floating diamond rings, drifting Styrofoam cups, and glitch scanlines.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/set2-13-trap-odyssey.jpg",
    "suno_prompt": "cloud rap, space trap, autotune vocals, ambient synth pads, 130bpm, slow 808 kick, hazy dreamlike rap atmosphere",
    "sonic_identity": "Spacey cloud rap blending lush ambient synth soundscapes, heavy autotuned vocal melodies, and slow-motion 808 drums."
  },
  {
    "id": "set2-14-the-griot-s-ledger",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "The Griot's Ledger — Living For",
    "artist": "The Griot's Ledger",
    "album": "Generations",
    "year": "2015",
    "genre": "Hip Hop and Trap",
    "subgenre": "Soulful Conscious Rap",
    "bpm": 184,
    "mood": "Fun, Happy, Hopeful, Inspiring",
    "description": "A warm sepia photograph of three generations of family members seated around a kitchen table laden with old photo albums and a brass trumpet, with elegant gold foil serif typography.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/set2-14-the-griot-s-ledger.jpg",
    "suno_prompt": "conscious hip-hop, boom-bap, soulful gospel sample, warm bass guitar, 90bpm, articulate storytelling male rap vocals",
    "sonic_identity": "Soulful conscious hip-hop featuring warm chopped gospel samples, live bass grooves, and articulate storytelling rap verses."
  },
  {
    "id": "set2-15-strawberry-sundown",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Strawberry Sundown — Red Sand",
    "artist": "Strawberry Sundown",
    "album": "Peach Motel",
    "year": "2018",
    "genre": "Hip Hop and Trap",
    "subgenre": "Lo-Fi Alt-Rap / Pastel Funk",
    "bpm": 90,
    "mood": "Suspenseful, Scary",
    "description": "A quirky, Wes Anderson-esque pastel photograph of a vintage 1970s yellow camper van parked beside a field of blooming sunflowers under a peach-pink sky, with hand-drawn comic doodles.",
    "duration": "0:33",
    "src": "assets/audio/last-tram-home.mp3",
    "cover": "assets/covers/set2-15-strawberry-sundown.jpg",
    "suno_prompt": "lo-fi alt-rap, pastel funk, rhodes piano, mellow drum loop, 84bpm, laid-back melodic male rap vocals, sunny relaxed vibe",
    "sonic_identity": "Relaxed lo-fi alt-rap blending pastel funk Rhodes chords, mellow drum loops, and easygoing melodic rap vocals."
  },
  {
    "id": "set2-16-the-satin-sirens",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "The Satin Sirens — Unbreakable",
    "artist": "The Satin Sirens",
    "album": "Velvet Harmonies",
    "year": "2014",
    "genre": "RnB and Soul",
    "subgenre": "Modern Girl Group Soul",
    "bpm": 73,
    "mood": "Hopeful, Inspiring, Reflective",
    "description": "Four women in emerald satin evening gowns and dramatic side-swept waves posed around a classic chrome studio ribbon microphone under moody cabaret spotlights.",
    "duration": "0:33",
    "src": "assets/audio/nocturne-for-499.mp3",
    "cover": "assets/covers/set2-16-the-satin-sirens.jpg",
    "suno_prompt": "modern R&B girl group, 90s R&B revival, lush 3-part vocal harmonies, smooth bassline, 88bpm, soulful female lead vocals",
    "sonic_identity": "Slick 90s R&B revival featuring tight multi-part female vocal harmonies, velvet basslines, and polished contemporary production."
  },
  {
    "id": "set2-17-dorian-silk",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Dorian Silk — A Quiet Promise",
    "artist": "Dorian Silk",
    "album": "Lavender Hours",
    "year": "2017",
    "genre": "RnB and Soul",
    "subgenre": "Sensual Neo-Soul",
    "bpm": 130,
    "mood": "Calm, Hopeful, Romantic",
    "description": "A dreamy, soft-focus portrait of the singer in an unbuttoned lavender silk shirt holding an antique porcelain teacup, bathed in dusty morning bedroom light with understated italic cursive.",
    "duration": "0:36",
    "src": "assets/audio/paper-ticket-sunrise.mp3",
    "cover": "assets/covers/set2-17-dorian-silk.jpg",
    "suno_prompt": "neo-soul, r&b, electric piano, subtle guitar licks, 78bpm, seductive male falsetto vocals, warm cozy mix",
    "sonic_identity": "Sensual, romantic neo-soul driven by silky electric piano chords, subtle guitar fills, and smooth male falsetto lead vocals."
  },
  {
    "id": "set2-18-empress-royale",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Empress Royale — I'll Be There",
    "artist": "Empress Royale",
    "album": "Golden Throne",
    "year": "2016",
    "genre": "RnB and Soul",
    "subgenre": "Imperial Cinematic Soul",
    "bpm": 93,
    "mood": "Hopeful, Inspiring, Chill",
    "description": "A breathtaking high-fashion shot of the singer draped in a 10-foot-long gold velvet cape and towering filigree crown, sitting atop a minimalist obsidian throne with bold geometric gold lettering.",
    "duration": "0:36",
    "src": "assets/audio/platform-echo.mp3",
    "cover": "assets/covers/set2-18-empress-royale.jpg",
    "suno_prompt": "cinematic soul, orchestral R&B, sweeping strings, grand piano, 72bpm, commanding majestic female vocals, epic soul ballad",
    "sonic_identity": "Epic cinematic soul combining lush orchestral string sections, grand piano chords, and commanding, majestic female lead vocals."
  },
  {
    "id": "set2-19-velvet-solitude",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Velvet Solitude — Go Go Go",
    "artist": "Velvet Solitude",
    "album": "Midnight Rain",
    "year": "2015",
    "genre": "RnB and Soul",
    "subgenre": "Late-Night Quiet Storm",
    "bpm": 160,
    "mood": "Fun, Happy, Quirky, Inspiring",
    "description": "A moody, cinematic shot through a rain-streaked luxury hotel window overlooking Tokyo at 3 AM, with blurred neon lights reflected across a grand piano and a solitary crystal tumbler.",
    "duration": "0:37",
    "src": "assets/audio/redfern-current.mp3",
    "cover": "assets/covers/set2-19-velvet-solitude.jpg",
    "suno_prompt": "quiet storm R&B, late-night soul, muted sax, smooth rhodes, 70bpm, soft intimate male vocals, rain soundscape",
    "sonic_identity": "Atmospheric late-night Quiet Storm R&B featuring soft saxophone fills, warm Rhodes piano, and intimate, romantic vocals."
  },
  {
    "id": "set2-20-apollo-groove",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Apollo Groove — The Churn",
    "artist": "Apollo Groove",
    "album": "Electric Disco 1985",
    "year": "2016",
    "genre": "RnB and Soul",
    "subgenre": "Electro-Funk / P-Funk Revival",
    "bpm": 174,
    "mood": "Fun, Angry",
    "description": "A colorful, vibrant illustration of a roller-disco dancer in sequined flared bell-bottoms and roller skates, surrounded by starburst sparkles and 1970s bubble typography in neon orange and gold.",
    "duration": "0:38",
    "src": "assets/audio/signal-at-central.mp3",
    "cover": "assets/covers/set2-20-apollo-groove.jpg",
    "suno_prompt": "electro-funk, P-funk revival, slap bass, synth brass, talkbox, 115bpm, high-energy male vocals, 80s party vibe",
    "sonic_identity": "Exuberant 80s P-Funk revival featuring popping slap bass, punchy synth brass stabs, and energetic party vocal chants."
  },
  {
    "id": "set2-21-digital-phantom",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Digital Phantom — Where The Wild Things Go",
    "artist": "Digital Phantom",
    "album": "Gridrunner",
    "year": "2012",
    "genre": "Electronic and Dance",
    "subgenre": "Electro-House / Cyberpunk Dance",
    "bpm": 116,
    "mood": "Reflective, Hopeful, Inspiring",
    "description": "A menacing, luminous neon-cyan Oni mask hovering in the center of a pitch-black server room filled with blinking green data racks and fiber-optic cables.",
    "duration": "0:40",
    "src": "assets/audio/sixteen-lanes.mp3",
    "cover": "assets/covers/set2-21-digital-phantom.jpg",
    "suno_prompt": "electro-house, cyberpunk dance, heavy sidechained synth lead, punchy kick, 126bpm, distorted vocal chops, dark rave atmosphere",
    "sonic_identity": "Dark cyberpunk electro-house featuring razor-sharp sidechained synth leads, driving 4-on-the-floor drums, and club production."
  },
  {
    "id": "set2-22-glitch-goddess",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Glitch Goddess — Digital Aftershock",
    "artist": "Glitch Goddess",
    "album": "Synthetic Euphoria",
    "year": "2018",
    "genre": "Electronic and Dance",
    "subgenre": "Hyperpop Bubblegum Bass",
    "bpm": 145,
    "mood": "Angry",
    "description": "A hyper-rendered glossy digital sculpture of a translucent baby-blue gummy bear melting over a chrome motherboard, with iridescent bubblegum typography and sparkle graphics.",
    "duration": "0:39",
    "src": "assets/audio/surry-line.mp3",
    "cover": "assets/covers/set2-22-glitch-goddess.jpg",
    "suno_prompt": "hyperpop bubblegum bass, bright metallic synths, pitch-shifted female vocals, 148bpm, explosive upbeat electronic pop",
    "sonic_identity": "High-octane bubblegum bass hyperpop featuring crystalline synth leads, frantic pitch-shifted vocals, and explosive beat drops."
  },
  {
    "id": "set2-23-sub-bass-havoc",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Sub-Bass Havoc — Assurance",
    "artist": "Sub-Bass Havoc",
    "album": "Earthquake Protocol",
    "year": "2011",
    "genre": "Electronic and Dance",
    "subgenre": "Heavy Dubstep / Riddim",
    "bpm": 98,
    "mood": "Hopeful, Inspiring, Happy",
    "description": "A cracked yellow hazard warning sign splitting in half over an apocalyptic crumbling skyscraper, with radioactive neon-green audio soundwaves tearing through the pavement.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/set2-23-sub-bass-havoc.jpg",
    "suno_prompt": "heavy dubstep, riddim, brutal synth growls, sub bass wobble, 140bpm, heavy snare drop, intense bass music",
    "sonic_identity": "Devastating riddim dubstep packed with abrasive synth growls, earth-shaking sub-bass wobbles, and heavy 140bpm snares."
  },
  {
    "id": "set2-24-ethereal-drift",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Ethereal Drift — Rocket",
    "artist": "Ethereal Drift",
    "album": "Deep Ocean Ambient",
    "year": "2014",
    "genre": "Electronic and Dance",
    "subgenre": "Drone / Deep Ambient",
    "bpm": 123,
    "mood": "Fun, Happy",
    "description": "A mesmerizing macro photograph of bioluminescent jellyfish drifting through the abyss of the Mariana Trench, glowing in soft turquoise and deep violet within a clean borderless sleeve.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/set2-24-ethereal-drift.jpg",
    "suno_prompt": "drone, deep ambient, evolving granular synth pads, sub bass hum, no beat, 60bpm feel, peaceful meditative soundscape",
    "sonic_identity": "Immersive deep ambient drone music featuring slowly evolving synth pads, subtle sub-bass hums, and tranquil atmospheres."
  },
  {
    "id": "set2-25-pulse-horizon",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Pulse Horizon — Changing",
    "artist": "Pulse Horizon",
    "album": "Sunrise Festival",
    "year": "2013",
    "genre": "Electronic and Dance",
    "subgenre": "Mainstage EDM / Festival Anthem",
    "bpm": 142,
    "mood": "Hopeful, Inspiring",
    "description": "An epic wide-angle panoramic photo of 80,000 festival-goers with glowsticks raised toward a colossal festival stage erupting in golden fireworks and purple laser beams at sunrise.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/set2-25-pulse-horizon.jpg",
    "suno_prompt": "mainstage EDM, festival progressive house, euphoric piano lead, massive synth drop, 128bpm, soaring vocal hook, clean hifi mix",
    "sonic_identity": "Massive festival EDM progressive house featuring euphoric piano melodies, soaring synth drops, and stadium-sized energy."
  },
  {
    "id": "set2-26-tennessee-driftwood",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Tennessee Driftwood — Starting Over",
    "artist": "Tennessee Driftwood",
    "album": "Old Pine Road",
    "year": "2015",
    "genre": "Country and Americana",
    "subgenre": "Raw Heartland Americana",
    "bpm": 118,
    "mood": "Hopeful, Inspiring, Fun",
    "description": "A worn, black-and-white tintype portrait of a weathered singer in a denim vest holding an acoustic guitar with a cracked finish, standing outside an overgrown Appalachian chapel.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/set2-26-tennessee-driftwood.jpg",
    "suno_prompt": "heartland americana, acoustic guitar, fiddle, stomp pedal, 100bpm, weathered male vocals, rustic porch acoustics",
    "sonic_identity": "Raw, weathered heartland Americana featuring earthy acoustic guitars, weeping fiddles, and foot-stomping rhythm tracks."
  },
  {
    "id": "set2-27-scarlett-rae",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Scarlett Rae — Alive At Zero",
    "artist": "Scarlett Rae",
    "album": "Cotton Candy Rodeo",
    "year": "2014",
    "genre": "Country and Americana",
    "subgenre": "Contemporary Country-Pop",
    "bpm": 170,
    "mood": "Suspenseful",
    "description": "A radiant golden-hour shot of the singer in turquoise cowboy boots and a fringed denim jacket, sitting on the tailgate of a pink vintage Ford pickup in a sprawling Kansas wheatfield.",
    "duration": "0:33",
    "src": "assets/audio/last-tram-home.mp3",
    "cover": "assets/covers/set2-27-scarlett-rae.jpg",
    "suno_prompt": "contemporary country-pop, steel guitar, bright acoustic strumming, 115bpm, sparkling female country vocals, radio-ready hit",
    "sonic_identity": "Upbeat contemporary country-pop with bright acoustic guitar strumming, soaring steel guitar, and sparkling female lead vocals."
  },
  {
    "id": "set2-28-wildflower-bluegrass",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Wildflower Bluegrass — Hearing Voices",
    "artist": "Wildflower Bluegrass",
    "album": "Smoky Mountain Mist",
    "year": "2016",
    "genre": "Country and Americana",
    "subgenre": "Traditional Bluegrass & Fiddle",
    "bpm": 80,
    "mood": "Scary, Suspenseful",
    "description": "A crisp, natural-light photo of a polished maple fiddle resting among wild mountain laurel flowers on a moss-covered log in the Great Smoky Mountains, with delicate engraved script.",
    "duration": "0:33",
    "src": "assets/audio/nocturne-for-499.mp3",
    "cover": "assets/covers/set2-28-wildflower-bluegrass.jpg",
    "suno_prompt": "traditional bluegrass, fast banjo picking, acoustic fiddle, mandolin, upright bass, 138bpm, high lonesome vocal harmonies",
    "sonic_identity": "Fast-paced traditional bluegrass featuring intricate banjo picking, fiery fiddle solos, and high-lonesome vocal harmonies."
  },
  {
    "id": "set2-29-canyon-sunset",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Canyon Sunset — We Were Made For This",
    "artist": "Canyon Sunset",
    "album": "Sedona Highways",
    "year": "2017",
    "genre": "Country and Americana",
    "subgenre": "Country-Rock / Desert Laurel Canyon",
    "bpm": 105,
    "mood": "Calm, Hopeful, Inspiring, Reflective, Romantic",
    "description": "A warm, sun-drenched landscape photograph of red sandstone buttes in Sedona glowing under a brilliant magenta and amber sunset, overlaid with vintage Western hand-drawn typography.",
    "duration": "0:36",
    "src": "assets/audio/paper-ticket-sunrise.mp3",
    "cover": "assets/covers/set2-29-canyon-sunset.jpg",
    "suno_prompt": "country-rock, Laurel Canyon 70s, electric guitar tremolo, pedal steel, 92bpm, warm male vocal harmonies, golden hour vibe",
    "sonic_identity": "Warm Laurel Canyon-inspired 70s country-rock featuring mellow electric guitar tremolos, pedal steel, and smooth harmonies."
  },
  {
    "id": "set2-30-red-dirt-revival",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Red Dirt Revival — Not So Gone",
    "artist": "Red Dirt Revival",
    "album": "Dust & Gasoline",
    "year": "2013",
    "genre": "Country and Americana",
    "subgenre": "Texas Country / Red Dirt Rock",
    "bpm": 118,
    "mood": "Chill, Reflective, Fun",
    "description": "A beat-up leather steering wheel framed against a dusty Oklahoma highway extending into an endless red-dirt horizon, with a faded roadside billboard in the distance.",
    "duration": "0:36",
    "src": "assets/audio/platform-echo.mp3",
    "cover": "assets/covers/set2-30-red-dirt-revival.jpg",
    "suno_prompt": "Texas country, Red Dirt rock, crunchy Telecaster, Hammond organ, 108bpm, gritty male vocals, southern bar band rock",
    "sonic_identity": "Gritty Texas Red Dirt country-rock featuring Telecaster guitar riffs, roaring Hammond organ, and authentic bar-band energy."
  },
  {
    "id": "set2-31-colossus-brass",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Colossus Brass — Fields of Light",
    "artist": "Colossus Brass",
    "album": "Spiritual Ascent",
    "year": "2015",
    "genre": "Jazz",
    "subgenre": "Modal Spiritual Jazz",
    "bpm": 194,
    "mood": "Hopeful, Inspiring, Romantic",
    "description": "A double-exposure portrait of a tenor saxophonist silhouetted against a brilliant solar flare, blending brass horn curves with astronomical sunspots, framed in deep burnished bronze lettering.",
    "duration": "0:37",
    "src": "assets/audio/redfern-current.mp3",
    "cover": "assets/covers/set2-31-colossus-brass.jpg",
    "suno_prompt": "modal spiritual jazz, tenor saxophone, modal piano, gong, acoustic bass, 84bpm, transcendent meditative jazz",
    "sonic_identity": "Expansive modal spiritual jazz featuring long, expressive tenor sax improvs, modal piano voicings, and deep acoustic bass."
  },
  {
    "id": "set2-32-nu-bop-orbit",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Nu-Bop Orbit — Skin",
    "artist": "Nu-Bop Orbit",
    "album": "Subterranean Bop",
    "year": "2017",
    "genre": "Jazz",
    "subgenre": "Contemporary Bebop / UK Jazz Explosion",
    "bpm": 119,
    "mood": "Chill, Reflective, Sad",
    "description": "A dynamic flash photograph of a sweat-drenched drummer and trumpet player locked in intense improvisation in a cramped, graffiti-covered London basement jazz club.",
    "duration": "0:38",
    "src": "assets/audio/signal-at-central.mp3",
    "cover": "assets/covers/set2-32-nu-bop-orbit.jpg",
    "suno_prompt": "UK jazz explosion, contemporary bebop, fast saxophone, energetic drums, 135bpm, virtuoso acoustic bass, modern jazz",
    "sonic_identity": "High-energy UK jazz fusion combining lightning-fast saxophone lines, complex syncopated drumming, and virtuoso bass solos."
  },
  {
    "id": "set2-33-electric-chameleon",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Electric Chameleon — Trenches",
    "artist": "Electric Chameleon",
    "album": "Rhodes & Funk",
    "year": "2016",
    "genre": "Jazz",
    "subgenre": "Vintage Jazz-Funk Fusion",
    "bpm": 114,
    "mood": "Suspenseful",
    "description": "A colorful psychedelic illustration of a kaleidoscopic chameleon playing a Fender Rhodes keyboard in a futuristic jungle of glowing neon ferns and floating synths.",
    "duration": "0:40",
    "src": "assets/audio/sixteen-lanes.mp3",
    "cover": "assets/covers/set2-33-electric-chameleon.jpg",
    "suno_prompt": "vintage jazz-funk, rhodes piano, wah guitar, funk bassline, 108bpm, tight horn section, groovy instrumental jazz",
    "sonic_identity": "Groovy 70s jazz-funk fusion driven by warm Rhodes piano solos, wah-wah guitar rhythm, and tight brass section stabs."
  },
  {
    "id": "set2-34-lady-sings-the-blues",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Lady Sings the Blues — Burnin",
    "artist": "Lady Sings the Blues",
    "album": "Harlem Moonlight",
    "year": "2014",
    "genre": "Jazz",
    "subgenre": "Classic Vocal Jazz & Torch Songs",
    "bpm": 104,
    "mood": "Fun, Happy, Quirky",
    "description": "A rich, velvety sepia close-up of a jazz vocalist in a satin turban and pearl drop earrings singing into a vintage Shure 55S microphone, bathed in a single spotlight beam.",
    "duration": "0:39",
    "src": "assets/audio/surry-line.mp3",
    "cover": "assets/covers/set2-34-lady-sings-the-blues.jpg",
    "suno_prompt": "classic jazz torch songs, muted trumpet, soft jazz piano, 68bpm, soulful emotive female vocals, late night Harlem jazz club",
    "sonic_identity": "Timeless jazz torch songs featuring soulful, emotive female vocals, delicate muted trumpet fills, and soft piano chords."
  },
  {
    "id": "set2-35-low-end-theory-quartet",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Low-End Theory Quartet — Life In The Morning Light",
    "artist": "Low-End Theory Quartet",
    "album": "Crate Digger Chronicles",
    "year": "2018",
    "genre": "Jazz",
    "subgenre": "Instrumental Hip-Hop Jazz",
    "bpm": 150,
    "mood": "Romantic, Hopeful, Calm",
    "description": "A moody overhead shot of a dusty vinyl crate, an MPC 2000XL drum machine, and a glass of bourbon resting on a worn Persian rug in an analog recording studio.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/set2-35-low-end-theory-quartet.jpg",
    "suno_prompt": "hip-hop jazz, instrumental alt-jazz, rhodes piano, upright acoustic bass, 88bpm boom-bap drums, vinyl crackle",
    "sonic_identity": "Chill instrumental hip-hop jazz featuring laid-back Rhodes melodies, woody upright bass, and crisp boom-bap drum beats."
  },
  {
    "id": "set2-36-black-cathedral",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Black Cathedral — Among The Stars",
    "artist": "Black Cathedral",
    "album": "Hymns of the Eclipse",
    "year": "2015",
    "genre": "Metal",
    "subgenre": "Gothic Doom / Occult Metal",
    "bpm": 100,
    "mood": "Chill, Reflective",
    "description": "An imposing Gothic cathedral silhouette carved into a jagged basalt cliffside against a blood-red moon, with gargoyles weeping molten wax and medieval Blackletter typography.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/set2-36-black-cathedral.jpg",
    "suno_prompt": "gothic doom metal, occult metal, heavy distorted riffs, pipe organ, 65bpm, dramatic low male vocals, dark cathedral reverb",
    "sonic_identity": "Dark gothic doom metal characterized by heavy slow-tempo guitar riffs, somber pipe organ chords, and deep male vocals."
  },
  {
    "id": "set2-37-magma-core",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Magma Core — Brookside",
    "artist": "Magma Core",
    "album": "Tectonic Fury",
    "year": "2016",
    "genre": "Metal",
    "subgenre": "Technical Progressive Metal",
    "bpm": 82,
    "mood": "Happy, Hopeful, Inspiring",
    "description": "A hyper-detailed 3D digital cross-section of the Earth's crust cracking open to reveal a blazing core of intricate mechanical gears and liquid gold lava.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/set2-37-magma-core.jpg",
    "suno_prompt": "progressive metal, technical metal, 7-string polyrhythmic guitar, complex drumming, 132bpm, aggressive harsh vocals",
    "sonic_identity": "Intricate technical progressive metal featuring polyrhythmic 7-string guitar riffs, relentless double-bass drumming, and shrieks."
  },
  {
    "id": "set2-38-ethereal-void",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Ethereal Void — Follow The Leader (ft. Daisha McBride)",
    "artist": "Ethereal Void",
    "album": "Shoegaze & Shivers",
    "year": "2014",
    "genre": "Metal",
    "subgenre": "Atmospheric Post-Black Metal",
    "bpm": 103,
    "mood": "Fun, Happy, Inspiring",
    "description": "A soft-focus, dreamlike photograph of a snowy Nordic birch forest bathed in delicate morning lilac and peach mist, contrasted by an unreadable spiky band logo in shimmering silver foil.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/set2-38-ethereal-void.jpg",
    "suno_prompt": "post-black metal, shoegaze metal, wall of reverb guitars, blast beats, 140bpm, distant raspy screams, euphoric swell",
    "sonic_identity": "Atmospheric post-black metal fusing ambient shoegaze guitar textures, fast blast beats, and emotional distant screaming."
  },
  {
    "id": "set2-39-winter-throne",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Winter Throne — Underdark",
    "artist": "Winter Throne",
    "album": "Frozen Sepulcher",
    "year": "2012",
    "genre": "Metal",
    "subgenre": "Raw Scandinavian Black Metal",
    "bpm": 110,
    "mood": "Suspenseful, Scary",
    "description": "A grainy black-and-white photograph of a lone medieval warrior in spiked chainmail kneeling in knee-deep snow before a colossal frozen waterfall, framed by ancient Norse runes.",
    "duration": "0:33",
    "src": "assets/audio/last-tram-home.mp3",
    "cover": "assets/covers/set2-39-winter-throne.jpg",
    "suno_prompt": "Scandinavian black metal, raw black metal, icy guitar tremolo, fast blast beats, 155bpm, harsh screeching vocals, raw production",
    "sonic_identity": "Fierce Scandinavian black metal featuring cold, abrasive tremolo guitar picking, fast blast beats, and piercing screeching vocals."
  },
  {
    "id": "set2-40-silicon-chainsaw",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Silicon Chainsaw — Convincing",
    "artist": "Silicon Chainsaw",
    "album": "Cybernetica",
    "year": "2013",
    "genre": "Metal",
    "subgenre": "Industrial Metalcore / Cyber-Djent",
    "bpm": 104,
    "mood": "Chill, Quirky, Fun",
    "description": "A gleaming chrome biomechanical skull intertwined with hydraulic hoses and glowing red laser diodes, stamped with an industrial barcode and warning labels.",
    "duration": "0:33",
    "src": "assets/audio/nocturne-for-499.mp3",
    "cover": "assets/covers/set2-40-silicon-chainsaw.jpg",
    "suno_prompt": "industrial metalcore, cyber-djent, heavy synth bass, aggressive guitar breakdowns, 130bpm, harsh screams and electronic beats",
    "sonic_identity": "Futuristic industrial metalcore blending crushing djent breakdowns, pulse synth bass, and harsh aggressive screams."
  },
  {
    "id": "set2-41-the-wandering-bard",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "The Wandering Bard — Floating",
    "artist": "The Wandering Bard",
    "album": "Songs from the Fire Escape",
    "year": "2015",
    "genre": "Folk and Acoustic",
    "subgenre": "Urban Folk Troubadour",
    "bpm": 112,
    "mood": "Chill, Fun, Happy",
    "description": "A black-and-white photograph of a young singer with an acoustic guitar sitting on an iron fire escape above a rainy New York City avenue, with handwritten lyrics scrawled along the brick wall.",
    "duration": "0:36",
    "src": "assets/audio/paper-ticket-sunrise.mp3",
    "cover": "assets/covers/set2-41-the-wandering-bard.jpg",
    "suno_prompt": "urban folk troubadour, acoustic guitar, harmonica, 88bpm, raspy storytelling male vocals, street acoustic vibe",
    "sonic_identity": "Raw urban folk featuring fingerpicked acoustic guitar, expressive harmonica solos, and gravelly storytelling male vocals."
  },
  {
    "id": "set2-42-cabin-in-the-pines",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Cabin in the Pines — Boomin",
    "artist": "Cabin in the Pines",
    "album": "Fireside Static",
    "year": "2013",
    "genre": "Folk and Acoustic",
    "subgenre": "Lo-Fi Indie Folktronica",
    "bpm": 111,
    "mood": "Angry, Fun",
    "description": "A cozy, warm-toned photograph of an old reel-to-reel tape recorder spinning beside an open stone hearth in a cedar log cabin, with light snow falling outside the window.",
    "duration": "0:36",
    "src": "assets/audio/platform-echo.mp3",
    "cover": "assets/covers/set2-42-cabin-in-the-pines.jpg",
    "suno_prompt": "lo-fi indie folktronica, acoustic guitar, gentle synth glitch, tape saturation, 82bpm, quiet intimate male vocals",
    "sonic_identity": "Cozy indie folktronica pairing delicate acoustic guitar strumming with subtle tape saturation and quiet, intimate vocal delivery."
  },
  {
    "id": "set2-43-silver---pine",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Silver & Pine — Forward Motion",
    "artist": "Silver & Pine",
    "album": "Autumn Hymns",
    "year": "2016",
    "genre": "Folk and Acoustic",
    "subgenre": "Acoustic Harmony Duo",
    "bpm": 126,
    "mood": "Hopeful, Inspiring, Happy",
    "description": "A beautiful golden-hour portrait of a man and woman in hand-knit wool sweaters and tweed trousers sitting on a split-rail fence in Vermont, surrounded by blazing orange maples.",
    "duration": "0:37",
    "src": "assets/audio/redfern-current.mp3",
    "cover": "assets/covers/set2-43-silver-and-pine.jpg",
    "suno_prompt": "acoustic harmony duo, dual acoustic guitars, cello, 90bpm, male female dual vocal harmonies, warm folk acoustics",
    "sonic_identity": "Warm acoustic folk duo characterized by interlocking acoustic guitars, rich cello underpinnings, and male/female vocal harmonies."
  },
  {
    "id": "set2-44-porchlight-hymns",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Porchlight Hymns — Find Your Why",
    "artist": "Porchlight Hymns",
    "album": "Banjo & Stomp",
    "year": "2012",
    "genre": "Folk and Acoustic",
    "subgenre": "Foot-Stomping Roots Folk",
    "bpm": 100,
    "mood": "Hopeful, Inspiring",
    "description": "A rustic close-up of worn work boots tapping on weathered wooden porch planks beside a scarred open-back banjo and an overturned washboard.",
    "duration": "0:38",
    "src": "assets/audio/signal-at-central.mp3",
    "cover": "assets/covers/set2-44-porchlight-hymns.jpg",
    "suno_prompt": "foot-stomping roots folk, banjo, acoustic bass, washboard, 118bpm, energetic group holler vocals, traditional roots",
    "sonic_identity": "Lively foot-stomping roots folk driven by rapid banjo picking, washboard percussion, and energetic group holler vocals."
  },
  {
    "id": "set2-45-the-celtic-hearth",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "The Celtic Hearth — Weekend Things",
    "artist": "The Celtic Hearth",
    "album": "Across the Irish Sea",
    "year": "2014",
    "genre": "Folk and Acoustic",
    "subgenre": "Traditional Irish Celtic Folk",
    "bpm": 124,
    "mood": "Quirky, Fun",
    "description": "A rich, atmospheric painting of a stone cottage interior in Connemara at dusk, with an Irish uilleann pipe and tin whistle resting on a rough-hewn oak table beside a turf fire.",
    "duration": "0:40",
    "src": "assets/audio/sixteen-lanes.mp3",
    "cover": "assets/covers/set2-45-the-celtic-hearth.jpg",
    "suno_prompt": "traditional Irish Celtic folk, tin whistle, bodhrán drum, fiddle, 110bpm, clear Irish female vocals, Celtic acoustics",
    "sonic_identity": "Authentic Irish Celtic folk featuring nimble tin whistle melodies, bodhrán drum beats, fiddle solos, and clear female vocals."
  },
  {
    "id": "set2-46-fuego-flamenco",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Fuego Flamenco — Other Worldly",
    "artist": "Fuego Flamenco",
    "album": "Pasión de Sevilla",
    "year": "2017",
    "genre": "Latin and Global",
    "subgenre": "Modern Flamenco-Pop",
    "bpm": 82,
    "mood": "Hopeful, Inspiring, Reflective",
    "description": "A dramatic motion-blur photograph of a flamenco dancer in a cascading scarlet ruffled gown spinning mid-clap, surrounded by swirling dust and dramatic golden stage lights.",
    "duration": "0:39",
    "src": "assets/audio/surry-line.mp3",
    "cover": "assets/covers/set2-46-fuego-flamenco.jpg",
    "suno_prompt": "modern flamenco-pop, nylon guitar rasgueado, cajon beat, palmas, 112bpm, passionate Spanish female vocals, modern pop bass",
    "sonic_identity": "Fiery modern flamenco-pop featuring virtuosic nylon-string guitar rasgueados, cajón rhythms, and passionate Spanish vocals."
  },
  {
    "id": "set2-47-trap-tropical",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Trap Tropical — Out Of Body",
    "artist": "Trap Tropical",
    "album": "San Juan Nights",
    "year": "2018",
    "genre": "Latin and Global",
    "subgenre": "Latin Trap / Urbano",
    "bpm": 130,
    "mood": "Happy, Hopeful, Inspiring",
    "description": "A vibrant neon-lit street scene in Old San Juan at midnight, featuring a custom matte-purple vintage muscle car under glowing palm trees with fluorescent graffiti lettering.",
    "duration": "0:35",
    "src": "assets/audio/after-hours-ledger.mp3",
    "cover": "assets/covers/set2-47-trap-tropical.jpg",
    "suno_prompt": "latin trap, urbano, 808 sub bass, tropical synth leads, 126bpm, autotuned Spanish male vocals, island vibe",
    "sonic_identity": "Vibrant Latin trap featuring heavy 808 sub-bass, tropical synth melodies, and smooth autotuned Spanish lead vocals."
  },
  {
    "id": "set2-48-corazón-de-seda",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Corazón de Seda — Digital Exploration",
    "artist": "Corazón de Seda",
    "album": "Bossa Nueva",
    "year": "2015",
    "genre": "Latin and Global",
    "subgenre": "Contemporary Bossa Nova",
    "bpm": 125,
    "mood": "Hopeful, Inspiring",
    "description": "A breezy, sun-dappled photograph of a terrace overlooking Ipanema Beach in Rio de Janeiro, with an acoustic guitar, tropical hibiscus flowers, and sea breeze catching sheer white curtains.",
    "duration": "0:34",
    "src": "assets/audio/crown-street-afterimage.mp3",
    "cover": "assets/covers/set2-48-coraz-n-de-seda.jpg",
    "suno_prompt": "bossa nova, contemporary bossa, nylon string guitar, soft brush drums, 86bpm, gentle Portuguese female vocals, lounge acoustic",
    "sonic_identity": "Elegant contemporary Bossa Nova featuring soft nylon-string guitar chords, subtle brush drumming, and whispery female vocals."
  },
  {
    "id": "set2-49-el-mariachi-dorado",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "El Mariachi Dorado — Cherry Soda Sunshine",
    "artist": "El Mariachi Dorado",
    "album": "Guitarras y Sombras",
    "year": "2016",
    "genre": "Latin and Global",
    "subgenre": "Traditional & Neo-Mariachi",
    "bpm": 125,
    "mood": "Fun, Happy, Quirky",
    "description": "A regal portrait of five mariachi musicians in black velvet suits heavily embroidered with gold Aztec suns, raising their vihuelas and guitarrón under the arches of a Guadalajara hacienda.",
    "duration": "0:37",
    "src": "assets/audio/harbour-plainclothes.mp3",
    "cover": "assets/covers/set2-49-el-mariachi-dorado.jpg",
    "suno_prompt": "neo-mariachi, traditional mariachi, dual trumpets, vihuela, guitarron, 94bpm, powerful Spanish male vocals, Mexican folk",
    "sonic_identity": "Majestic neo-mariachi featuring bright dual trumpet fanfare, rhythmic vihuela strumming, and passionate Spanish lead vocals."
  },
  {
    "id": "set2-50-ritmo-global",
    "set": "Set 2 (Brand New 2010s Originals)",
    "title": "Ritmo Global — Limbo",
    "artist": "Ritmo Global",
    "album": "Carnaval Electrónico",
    "year": "2018",
    "genre": "Latin and Global",
    "subgenre": "Global Moombahton / Reggaeton",
    "bpm": 140,
    "mood": "Calm, Romantic, Reflective, Happy",
    "description": "An explosion of colorful confetti, neon smoke plumes, and dancers in feathered carnival headdresses dancing before a colossal Mayan temple stage bathed in rainbow strobe lights.",
    "duration": "0:39",
    "src": "assets/audio/king-tide-edit.mp3",
    "cover": "assets/covers/set2-50-ritmo-global.jpg",
    "suno_prompt": "moombahton, global reggaeton, dembow beat, synth horn leads, 108bpm, energetic male vocals, tropical club anthem",
    "sonic_identity": "Bouncy global moombahton and reggaeton driven by heavy Dembow drum loops, horn synth stabs, and energetic festival vocals."
  }
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const storeKey = 'fuse-music-v2';
const defaults = {
  current: 0,
  queue: tracks.map(t => t.id),
  liked: [],
  playlists: {
    'Night bus': ['set1-01-velvet-frequency', 'set1-07-celeste-monet', 'set2-01-neon-mirage', 'set2-06-modern-static'],
    'Morning light': ['set1-02-pale-horizon', 'set2-10-saffron-sun', 'set2-48-coraz-n-de-seda']
  },
  shuffle: false,
  repeat: 'off',
  theme: 'dark',
  volume: 0.78,
  speed: 1.0,
  history: [],
  eq: { bass: 0, mid: 0, treble: 0, preset: 'Flat Studio' },
  crackle: { enabled: false, volume: 0.15 },
  crossfade: 2,
  crossfadeCurve: 'equal-power',
  vizMode: 'orbital',
  soundbed: { drone432: false, drone432Vol: 0.08, binaural: false, binauralVol: 0.08, rainBed: false, rainBedVol: 0.08 },
  contrast: 'normal',
  pitch: 0,
  pitchLock: true,
  linerNotes: {},
  stats: { totalSeconds: 0, heardTracks: [] }
};

let saved = {};
try { saved = JSON.parse(localStorage.getItem(storeKey) || '{}') || {}; } catch {}
let state = {
  ...defaults,
  ...saved,
  liked: Array.isArray(saved.liked) ? saved.liked : defaults.liked,
  playlists: saved.playlists && typeof saved.playlists === 'object' ? saved.playlists : defaults.playlists,
  history: Array.isArray(saved.history) ? saved.history : [],
  eq: saved.eq && typeof saved.eq === 'object' ? { ...defaults.eq, ...saved.eq } : defaults.eq,
  crackle: saved.crackle && typeof saved.crackle === 'object' ? { ...defaults.crackle, ...saved.crackle } : defaults.crackle,
  crossfade: [0, 2, 4, 8].includes(saved.crossfade) ? saved.crossfade : 2,
  crossfadeCurve: ['equal-power', 'linear'].includes(saved.crossfadeCurve) ? saved.crossfadeCurve : 'equal-power',
  vizMode: ['orbital', 'scope', 'bars'].includes(saved.vizMode) ? saved.vizMode : 'orbital',
  soundbed: saved.soundbed && typeof saved.soundbed === 'object' ? { ...defaults.soundbed, ...saved.soundbed } : defaults.soundbed,
  contrast: ['normal', 'high'].includes(saved.contrast) ? saved.contrast : 'normal',
  pitch: Number.isFinite(saved.pitch) ? Math.max(-8, Math.min(8, saved.pitch)) : 0,
  pitchLock: typeof saved.pitchLock === 'boolean' ? saved.pitchLock : true,
  linerNotes: saved.linerNotes && typeof saved.linerNotes === 'object' ? saved.linerNotes : {},
  stats: saved.stats && typeof saved.stats === 'object' ? {
    totalSeconds: Number(saved.stats.totalSeconds) || 0,
    heardTracks: Array.isArray(saved.stats.heardTracks) ? saved.stats.heardTracks.filter(id => tracks.some(t => t.id === id)) : []
  } : { totalSeconds: 0, heardTracks: [] }
};

state.playlists = Object.fromEntries(
  Object.entries(state.playlists)
    .filter(([name, ids]) => name && Array.isArray(ids))
    .map(([name, ids]) => [name, ids.filter((id, index) => tracks.some(t => t.id === id) && ids.indexOf(id) === index)])
);
state.queue = (Array.isArray(state.queue) ? state.queue : defaults.queue).filter(id => tracks.some(t => t.id === id));
if (!state.queue.length) state.queue = [tracks[0].id];
state.current = Math.min(Math.max(0, Number(state.current) || 0), state.queue.length - 1);
state.volume = Math.min(1, Math.max(0, Number(state.volume) || 0));
state.speed = [0.8, 1.0, 1.25].includes(state.speed) ? state.speed : 1.0;

const audioA = $('#audio'), audioB = new Audio(); audioB.preload = 'auto'; audioB.crossOrigin = 'anonymous';
let active = audioA, standby = audioB, fading = false, fadeFrame = 0, searchText = '', queuedNext = -1, artistDirectory = [], pendingSetTrack = '';
let crossfadeAllowed = true, standbyPrimed = false, lastAudibleVolume = state.volume || 0.78, noticeTimer = 0;
let currentTempo = 'all', currentMood = 'all';
let audioCtx = null, analyser = null, sourceNodeA = null, sourceNodeB = null;
let eqBass = null, eqMid = null, eqTreble = null, crackleSource = null, crackleGain = null;
let sleepMode = 'off', sleepRemainingSeconds = 0, sleepTimer = null;
let touchStartX = 0, touchStartY = 0;
let selectedTrackIds = new Set();
let abActiveSource = 'A';
let currentLinerNotesSet = '';
let nudgeTimer = null;
let activeStation = null;
let lastStatsSecond = 0;
let droneOsc = null, droneGain = null;
let binauralOscL = null, binauralOscR = null, binauralMerger = null, binauralGain = null;
let rainSource = null, rainGain = null;
let commandSelectedIndex = 0, currentAlphaLetter = 'ALL';
let isCinemaActive = false;
let isScratching = false, scratchStartAngle = 0, scratchCurrentAngle = 0, lastScratchAngle = 0, lastScratchTime = 0;

const byId = id => tracks.find(t => t.id === id);
const current = () => byId(state.queue[state.current]) || tracks[0];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const save = () => { try { localStorage.setItem(storeKey, JSON.stringify(state)); } catch {} };
const fmt = sec => Number.isFinite(sec) ? `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, '0')}` : '0:00';

function timeAgo(ms) {
  const sec = Math.floor((Date.now() - ms) / 1000);
  if (sec < 60) return 'Just now';
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const days = Math.floor(hr / 24);
  return `${days}d ago`;
}

function announce(message) {
  const el = $('#globalNotice');
  if (!el) return;
  clearTimeout(noticeTimer);
  el.textContent = message;
  el.classList.add('show');
  noticeTimer = setTimeout(() => el.classList.remove('show'), 3200);
}
window.fuseNotice = announce;

function updateSeekA11y() {
  const duration = Number.isFinite(active.duration) ? active.duration : 22;
  const elapsed = Number.isFinite(active.currentTime) ? active.currentTime : 0;
  const seek = $('#seek');
  if (seek) {
    seek.setAttribute('aria-valuenow', seek.value);
    seek.setAttribute('aria-valuetext', `${fmt(elapsed)} of ${fmt(duration)}`);
  }
}

function updateMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const t = current();
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: t.title,
      artist: t.artist,
      album: t.album,
      artwork: [{ src: new URL(t.cover, location.href).href, type: 'image/jpeg' }]
    });
    navigator.mediaSession.playbackState = active.paused ? 'paused' : 'playing';
  } catch {}
}

function updatePlayer() {
  const t = current();
  $('#nowCover').src = t.cover;
  $('#nowCover').alt = `Artwork for ${t.title}`;
  $('#nowTitle').textContent = t.title;
  $('#nowArtist').textContent = `${t.artist} · ${t.album}`;
  $('#duration').textContent = fmt(active.duration || 22);
  $('#playBtn').textContent = active.paused ? '▶' : 'Ⅱ';
  $('#playBtn').setAttribute('aria-label', active.paused ? 'Play' : 'Pause');
  $('#shuffleBtn').classList.toggle('liked', state.shuffle);
  $('#shuffleBtn').setAttribute('aria-pressed', String(state.shuffle));
  $('#repeatBtn').classList.toggle('liked', state.repeat !== 'off');
  $('#repeatBtn').textContent = state.repeat === 'off' ? '↻' : state.repeat === 'one' ? '↻₁' : '↻';
  $('#repeatBtn').title = `Repeat ${state.repeat} (R)`;
  $('#repeatBtn').setAttribute('aria-label', `Repeat ${state.repeat}`);
  $('#muteBtn').textContent = state.volume === 0 ? 'MUTED' : 'VOL';
  $('#muteBtn').setAttribute('aria-pressed', String(state.volume === 0));
  $('#muteBtn').setAttribute('aria-label', state.volume === 0 ? 'Unmute' : 'Mute');

  const speedBtn = $('#speedBtn');
  if (speedBtn) {
    speedBtn.textContent = `${state.speed || 1.0}x`;
    speedBtn.setAttribute('aria-label', `Playback speed: ${state.speed || 1.0}x`);
  }

  const nowLikeBtn = $('#nowLikeBtn');
  if (nowLikeBtn) {
    const isLiked = state.liked.includes(t.id);
    nowLikeBtn.textContent = isLiked ? '♥' : '♡';
    nowLikeBtn.classList.toggle('liked', isLiked);
    nowLikeBtn.setAttribute('aria-label', isLiked ? 'Unlike current cut' : 'Like current cut');
  }

  const discCover = document.getElementById('discCover');
  if (discCover) discCover.src = t.cover;
  const heroTitle = document.getElementById('heroNowTitle');
  if (heroTitle) heroTitle.textContent = `${t.title} — ${t.artist}`;
  const disc = document.getElementById('heroArtDisc');
  if (disc) {
    disc.classList.toggle('paused', active.paused);
    disc.classList.toggle('spinning', !active.paused);
    disc.setAttribute('aria-pressed', String(!active.paused));
  }
  const eq = document.getElementById('playerEq');
  if (eq) eq.classList.toggle('paused', active.paused);

  $$('[data-track-id]').forEach(el => el.classList.toggle('playing', el.dataset.trackId === t.id));
  $$('.shelf-filters .filter-pill').forEach(p => p.setAttribute('aria-pressed', String(p.dataset.genre === currentGenre)));
  $$('#tempoFilters .filter-pill').forEach(p => p.setAttribute('aria-pressed', String(p.dataset.tempo === currentTempo)));
  $$('#moodFilters .filter-pill').forEach(p => p.setAttribute('aria-pressed', String(p.dataset.mood === currentMood)));
  updateSeekA11y();
  updateMediaSession();
  updateQueueStats();
  drawWaveform();
  updateAmbientAtmosphere(t);
  updateCrackleState();
  updateSoundbedState();
  updateSleepTimerUI();
  updateCinemaUI();
  updateAudioDiagnostics();
  if (t && t.id) {
    if (!state.stats.heardTracks.includes(t.id)) {
      state.stats.heardTracks.push(t.id);
      save();
    }
    updateMilestonesUI();
  }
}

function updateQueueStats() {
  const statsEl = $('#queueStats');
  if (!statsEl) return;
  let totalSec = 0;
  for (const id of state.queue) {
    const t = byId(id);
    if (t && t.duration) {
      const parts = t.duration.split(':').map(Number);
      if (parts.length === 2) totalSec += parts[0] * 60 + parts[1];
    }
  }
  const mins = Math.floor(totalSec / 60);
  const hrs = Math.floor(mins / 60);
  const remMins = mins % 60;
  const timeStr = hrs > 0 ? `${hrs} HR ${remMins} MIN` : `${mins} MIN`;
  statsEl.textContent = `${state.queue.length} CUTS IN RUNNING ORDER · ${timeStr} · CURRENT: CUT ${state.current + 1} OF ${state.queue.length}`;
}

function prepareStandby() {
  const nextIndex = nextIndexForPlayback();
  queuedNext = nextIndex;
  if (nextIndex >= 0 && state.repeat !== 'one') {
    const t = byId(state.queue[nextIndex]);
    if (t && standby.src !== new URL(t.src, location.href).href) {
      standby.src = t.src;
      standby.playbackRate = state.speed || 1.0;
      standby.load();
    }
  } else {
    standby.removeAttribute('src');
    standby.load();
  }
}

function stopFade() {
  cancelAnimationFrame(fadeFrame);
  fading = false;
  standby.pause();
  standby.volume = 0;
  standby.muted = false;
  active.volume = state.volume;
}

function remember(id) {
  const now = Date.now();
  if (!Array.isArray(state.history)) state.history = [];
  state.history = [{ id, time: now }, ...state.history.filter(x => x.id !== id)].slice(0, 50);
  state.recent = state.history.map(x => x.id).slice(0, 12);
  save();
}

function loadTrack(play = false) {
  stopFade();
  crossfadeAllowed = true;
  active.pause();
  active.src = current().src;
  active.playbackRate = state.speed || 1.0;
  active.load();
  active.volume = state.volume;
  $('#elapsed').textContent = '0:00';
  $('#seek').value = 0;
  remember(current().id);
  updatePlayer();
  prepareStandby();
  render();
  if (play) {
    active.play().then(() => {
      ensureAudioContext();
    }).catch(() => {
      announce('Tap play to start audio on this device.');
      updatePlayer();
    });
  }
  save();
}

function playIndex(i) {
  if (i < 0 || i >= state.queue.length) return;
  state.current = i;
  loadTrack(true);
}

function playTrack(id) {
  const idx = state.queue.indexOf(id);
  if (idx < 0) {
    state.queue.splice(state.current + 1, 0, id);
    state.current++;
  } else {
    state.current = idx;
  }
  loadTrack(true);
}

function playNext(id) {
  const existingIdx = state.queue.indexOf(id);
  if (existingIdx >= 0) {
    state.queue.splice(existingIdx, 1);
    if (existingIdx < state.current) state.current--;
  }
  state.queue.splice(state.current + 1, 0, id);
  render();
  prepareStandby();
  save();
  announce('Queued next in the running order.');
}

function nextIndexForPlayback() {
  if (state.shuffle && state.queue.length > 1) {
    let i = state.current;
    while (i === state.current) i = Math.floor(Math.random() * state.queue.length);
    return i;
  }
  if (state.current < state.queue.length - 1) return state.current + 1;
  if (state.repeat === 'all') return 0;
  return -1;
}

function next(auto = false) {
  if (auto && state.repeat === 'one') {
    active.currentTime = 0;
    active.play().catch(() => {});
    return;
  }
  const i = queuedNext >= 0 ? queuedNext : nextIndexForPlayback();
  if (i < 0) {
    active.pause();
    updatePlayer();
    return;
  }
  state.current = i;
  loadTrack(true);
}

function previous() {
  if (active.currentTime > 3) {
    active.currentTime = 0;
    return;
  }
  const i = state.current > 0 ? state.current - 1 : state.queue.length - 1;
  playIndex(i);
}

function transition() {
  if (!crossfadeAllowed || fading || active.paused || state.repeat === 'one') return;
  const i = queuedNext;
  if (i < 0 || !standby.src) return;
  fading = true;
  const outgoing = active, incoming = standby;
  incoming.currentTime = 0;
  incoming.volume = 0;
  incoming.playbackRate = state.speed || 1.0;
  const len = (state.crossfade ?? 2) * 1000;

  if (len <= 0) {
    outgoing.pause();
    outgoing.volume = 0;
    active = incoming;
    standby = outgoing;
    fading = false;
    state.current = i;
    remember(current().id);
    updatePlayer();
    render();
    prepareStandby();
    save();
    incoming.volume = state.volume;
    incoming.play().catch(() => {});
    return;
  }

  incoming.play().then(() => {
    const started = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - started) / len);
      if (state.crossfadeCurve === 'linear') {
        outgoing.volume = state.volume * (1 - p);
        incoming.volume = state.volume * p;
      } else {
        outgoing.volume = state.volume * Math.cos(p * 0.5 * Math.PI);
        incoming.volume = state.volume * Math.sin(p * 0.5 * Math.PI);
      }
      if (p < 1) {
        fadeFrame = requestAnimationFrame(tick);
      } else {
        outgoing.pause();
        outgoing.volume = 0;
        active = incoming;
        standby = outgoing;
        fading = false;
        state.current = i;
        remember(current().id);
        updatePlayer();
        render();
        prepareStandby();
        save();
      }
    }
    fadeFrame = requestAnimationFrame(tick);
  }).catch(() => {
    fading = false;
    crossfadeAllowed = false;
    if (outgoing.duration - outgoing.currentTime < 0.8) {
      state.current = i;
      loadTrack(true);
    }
  });
}

function addQueue(id) {
  state.queue.push(id);
  render();
  prepareStandby();
  save();
  announce('Added to Up Next.');
}

function toggleLike(id) {
  state.liked = state.liked.includes(id) ? state.liked.filter(x => x !== id) : [...state.liked, id];
  render();
  save();
}

function setPlaybackSpeed(rate) {
  state.speed = rate;
  applyPitch();
  updatePlayer();
  save();
  announce(`Playback rate: ${rate}x`);
}

function applyPitch() {
  const p = Number(state.pitch) || 0;
  const baseRate = state.speed || 1.0;
  const pitchRatio = 1 + (p / 100);
  const finalRate = Math.max(0.25, Math.min(2.0, baseRate * pitchRatio));
  active.playbackRate = finalRate;
  standby.playbackRate = finalRate;
  active.preservesPitch = Boolean(state.pitchLock);
  standby.preservesPitch = Boolean(state.pitchLock);

  const pitchVal = $('#pitchVal');
  if (pitchVal) pitchVal.textContent = `${p >= 0 ? '+' : ''}${p.toFixed(1)}%`;
  const pitchSlider = $('#pitchSlider');
  if (pitchSlider) {
    pitchSlider.value = p;
    pitchSlider.setAttribute('aria-valuetext', `${p >= 0 ? '+' : ''}${p.toFixed(1)}%`);
  }
  const pitchLockToggle = $('#pitchLockToggle');
  if (pitchLockToggle) pitchLockToggle.checked = Boolean(state.pitchLock);
}

function nudgePitch(delta) {
  const p = Number(state.pitch) || 0;
  const baseRate = (state.speed || 1.0) * (1 + (p / 100));
  const nudgedRate = Math.max(0.25, Math.min(2.0, baseRate * (1 + delta)));
  active.playbackRate = nudgedRate;
  standby.playbackRate = nudgedRate;
}

function releaseNudge() {
  applyPitch();
}

function applyContrast() {
  if (state.contrast === 'high') {
    document.documentElement.setAttribute('data-contrast', 'high');
  } else {
    document.documentElement.removeAttribute('data-contrast');
  }
  const btn = $('#topContrastBtn');
  if (btn) {
    btn.setAttribute('aria-pressed', String(state.contrast === 'high'));
    btn.classList.toggle('active', state.contrast === 'high');
  }
}

function updateMilestonesUI() {
  const heardCount = state.stats?.heardTracks?.length || 0;
  const counter = $('#cutsExploredCount');
  if (counter) {
    counter.textContent = `${heardCount} / 100 CUTS EXPLORED`;
  }

  const heardGenres = new Set();
  (state.stats?.heardTracks || []).forEach(id => {
    const t = byId(id);
    if (t && t.genre) heardGenres.add(t.genre.toLowerCase());
  });

  const bRegular = $('#badgeRegular');
  if (bRegular) bRegular.classList.toggle('unlocked', heardCount >= 10);

  const bExplorer = $('#badgeExplorer');
  if (bExplorer) bExplorer.classList.toggle('unlocked', heardGenres.size >= 10);

  const bCenturion = $('#badgeCenturion');
  if (bCenturion) bCenturion.classList.toggle('unlocked', heardCount >= 100);

  const currentHour = new Date().getHours();
  const isNight = currentHour >= 0 && currentHour <= 5;
  const bNightOwl = $('#badgeNightOwl');
  if (bNightOwl) bNightOwl.classList.toggle('unlocked', isNight || heardCount >= 25);
}

function parseSearchQuery(query) {
  const text = (query || '').trim();
  const filters = {
    bpmOp: null,
    bpmVal: null,
    genre: null,
    mood: null,
    year: null,
    artist: null,
    prompt: null,
    keywords: []
  };

  const tokenRegex = /(\b(?:bpm|genre|mood|year|artist|prompt)):([^\s]+)/gi;
  let match;
  while ((match = tokenRegex.exec(text)) !== null) {
    const key = match[1].toLowerCase();
    const val = match[2];
    if (key === 'bpm') {
      const bpmMatch = val.match(/^([><]=?|==?)?(\d+)$/);
      if (bpmMatch) {
        filters.bpmOp = bpmMatch[1] || '==';
        filters.bpmVal = Number(bpmMatch[2]);
      }
    } else if (key === 'genre') {
      filters.genre = val.toLowerCase();
    } else if (key === 'mood') {
      filters.mood = val.toLowerCase();
    } else if (key === 'year') {
      filters.year = Number(val);
    } else if (key === 'artist') {
      filters.artist = val.toLowerCase();
    } else if (key === 'prompt') {
      filters.prompt = val.toLowerCase();
    }
  }

  const cleanKeywords = text.replace(tokenRegex, '').trim().toLowerCase();
  filters.keywords = cleanKeywords ? cleanKeywords.split(/\s+/).filter(Boolean) : [];

  const filteredTracks = tracks.filter(t => {
    if (filters.bpmVal !== null) {
      const bpm = t.bpm || 0;
      if (filters.bpmOp === '>' && !(bpm > filters.bpmVal)) return false;
      if (filters.bpmOp === '>=' && !(bpm >= filters.bpmVal)) return false;
      if (filters.bpmOp === '<' && !(bpm < filters.bpmVal)) return false;
      if (filters.bpmOp === '<=' && !(bpm <= filters.bpmVal)) return false;
      if ((filters.bpmOp === '==' || filters.bpmOp === '=') && !(bpm === filters.bpmVal)) return false;
    }
    if (filters.genre) {
      const g = `${t.genre || ''} ${t.subgenre || ''}`.toLowerCase();
      if (!g.includes(filters.genre)) return false;
    }
    if (filters.mood) {
      const m = (t.mood || '').toLowerCase();
      if (!m.includes(filters.mood)) return false;
    }
    if (filters.year) {
      if (t.year !== filters.year) return false;
    }
    if (filters.artist) {
      if (!t.artist.toLowerCase().includes(filters.artist)) return false;
    }
    if (filters.prompt) {
      if (!t.suno_prompt.toLowerCase().includes(filters.prompt)) return false;
    }
    if (filters.keywords.length > 0) {
      const blob = [t.title, t.artist, t.album, t.mood, t.subgenre, t.suno_prompt, String(t.bpm)].join(' ').toLowerCase();
      for (const kw of filters.keywords) {
        if (!blob.includes(kw)) return false;
      }
    }
    return true;
  });

  const activeFilters = [];
  if (filters.bpmVal !== null) activeFilters.push(`BPM ${filters.bpmOp}${filters.bpmVal}`);
  if (filters.genre) activeFilters.push(`genre:${filters.genre}`);
  if (filters.mood) activeFilters.push(`mood:${filters.mood}`);
  if (filters.year) activeFilters.push(`year:${filters.year}`);
  if (filters.artist) activeFilters.push(`artist:${filters.artist}`);
  if (filters.prompt) activeFilters.push(`prompt:${filters.prompt}`);
  if (filters.keywords.length) activeFilters.push(`"${filters.keywords.join(' ')}"`);

  return {
    results: filteredTracks,
    summary: activeFilters.length ? `(${activeFilters.join(', ')})` : ''
  };
}

function updateBatchBar() {
  const bar = $('#batchBar');
  const countEl = $('#batchCount');
  if (!bar || !countEl) return;
  if (selectedTrackIds.size > 0) {
    bar.style.display = 'flex';
    countEl.textContent = `${selectedTrackIds.size} SELECTED`;
  } else {
    bar.style.display = 'none';
  }
}

function cyclePlaybackSpeed() {
  const rates = [0.8, 1.0, 1.25];
  const nextRate = rates[(rates.indexOf(state.speed || 1.0) + 1) % rates.length];
  setPlaybackSpeed(nextRate);
}

function skipAudio(seconds) {
  if (Number.isFinite(active.duration)) {
    active.currentTime = Math.max(0, Math.min(active.duration, active.currentTime + seconds));
    updateSeekA11y();
    announce(seconds > 0 ? '+10s' : '-10s');
  }
}

function jumpToNowPlaying() {
  const playingEl = $('#queueList .item.playing');
  if (playingEl) {
    playingEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    playingEl.style.transition = 'outline 0.25s ease';
    playingEl.style.outline = '2px solid var(--gold)';
    setTimeout(() => { playingEl.style.outline = 'none'; }, 2200);
  }
}

const eqPresets = {
  'Flat Studio': { bass: 0, mid: 0, treble: 0 },
  'Warm Tube': { bass: 3, mid: 1.5, treble: -2 },
  'Bass Boost': { bass: 6, mid: 0, treble: 1 },
  'Vocal Clarity': { bass: -2, mid: 4, treble: 3 },
  'Late Night Vinyl': { bass: 2, mid: -1, treble: -3 }
};

function applyEqSettings() {
  if (eqBass) eqBass.gain.value = state.eq.bass;
  if (eqMid) eqMid.gain.value = state.eq.mid;
  if (eqTreble) eqTreble.gain.value = state.eq.treble;

  const b = $('#eqBass'), m = $('#eqMid'), tr = $('#eqTreble');
  if (b) b.value = state.eq.bass;
  if (m) m.value = state.eq.mid;
  if (tr) tr.value = state.eq.treble;

  const bv = $('#eqBassVal'), mv = $('#eqMidVal'), tv = $('#eqTrebleVal');
  const bassStr = `${state.eq.bass > 0 ? '+' : ''}${state.eq.bass} dB`;
  const midStr = `${state.eq.mid > 0 ? '+' : ''}${state.eq.mid} dB`;
  const trebleStr = `${state.eq.treble > 0 ? '+' : ''}${state.eq.treble} dB`;

  if (bv) bv.textContent = bassStr;
  if (mv) mv.textContent = midStr;
  if (tv) tv.textContent = trebleStr;

  if (b) b.setAttribute('aria-valuetext', bassStr);
  if (m) m.setAttribute('aria-valuetext', midStr);
  if (tr) tr.setAttribute('aria-valuetext', trebleStr);

  $$('.eq-presets .filter-pill').forEach(btn => {
    const isActive = btn.dataset.eqPreset === state.eq.preset;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function updateCrossfadeUI() {
  $$('#crossfadePills .filter-pill').forEach(btn => {
    const isActive = Number(btn.dataset.crossfade) === (state.crossfade ?? 2);
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function initCrackle() {
  if (!audioCtx) return;
  try {
    const bufferSize = audioCtx.sampleRate * 3;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      let sample = lastOut * 0.14;
      if (Math.random() < 0.0004) {
        sample += (Math.random() * 2 - 1) * (0.35 + Math.random() * 0.55);
      }
      data[i] = sample;
    }
    crackleSource = audioCtx.createBufferSource();
    crackleSource.buffer = buffer;
    crackleSource.loop = true;

    crackleGain = audioCtx.createGain();
    const targetGain = (state.crackle?.enabled && !active.paused) ? (state.crackle.volume || 0.15) * 0.22 : 0;
    crackleGain.gain.value = targetGain;

    crackleSource.connect(crackleGain);
    crackleGain.connect(audioCtx.destination);
    crackleSource.start(0);
  } catch {}
}

function updateCrackleState() {
  if (!crackleGain || !audioCtx) return;
  try {
    const targetGain = (state.crackle?.enabled && !active.paused) ? (state.crackle.volume || 0.15) * 0.22 : 0;
    crackleGain.gain.setTargetAtTime(targetGain, audioCtx.currentTime, 0.08);
  } catch {}
}

function updateSleepTimerUI() {
  const btn = $('#sleepTimerBtn');
  const statusEl = $('#sleepStatus');
  if (!btn || !statusEl) return;

  $$('#sleepOptions .sleep-btn').forEach(b => {
    const isActive = b.dataset.sleep === sleepMode;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', String(isActive));
  });

  if (sleepMode === 'off') {
    btn.textContent = 'SLEEP ⏱';
    btn.classList.remove('active');
    btn.setAttribute('aria-label', 'Sleep timer off');
    statusEl.textContent = 'Timer inactive.';
  } else if (sleepMode === 'track') {
    btn.textContent = 'SLEEP (END)';
    btn.classList.add('active');
    btn.setAttribute('aria-label', 'Sleep timer active: Stop at end of track');
    statusEl.textContent = 'Timer active: will stop at the end of the current cut.';
  } else {
    const mins = Math.ceil(sleepRemainingSeconds / 60);
    btn.textContent = `SLEEP (${mins}m)`;
    btn.classList.add('active');
    btn.setAttribute('aria-label', `Sleep timer active: ${mins} minutes remaining`);
    statusEl.textContent = `Timer active: ${mins}m (${sleepRemainingSeconds}s) remaining until gentle fade-out.`;
  }
}

function setSleepMode(mode) {
  clearInterval(sleepTimer);
  sleepMode = mode;
  if (mode === 'off') {
    sleepRemainingSeconds = 0;
    announce('Sleep timer cancelled.');
  } else if (mode === 'track') {
    announce('Sleep timer set: will stop at the end of this cut.');
  } else {
    const mins = parseInt(mode, 10);
    sleepRemainingSeconds = mins * 60;
    announce(`Sleep timer set for ${mins} minutes.`);
    sleepTimer = setInterval(() => {
      sleepRemainingSeconds--;
      if (sleepRemainingSeconds <= 15 && sleepRemainingSeconds > 0) {
        active.volume = Math.max(0, state.volume * (sleepRemainingSeconds / 15));
      } else if (sleepRemainingSeconds <= 0) {
        clearInterval(sleepTimer);
        sleepMode = 'off';
        active.pause();
        active.volume = state.volume;
        updatePlayer();
        announce('Listening room sleep timer completed. Room powered down.');
      }
      updateSleepTimerUI();
    }, 1000);
  }
  updateSleepTimerUI();
}

const trackPeaksCache = {};
function getTrackPeaks(track) {
  if (!track) return [];
  if (trackPeaksCache[track.id]) return trackPeaksCache[track.id];
  let seed = 0;
  for (let i = 0; i < track.id.length; i++) seed = (seed * 31 + track.id.charCodeAt(i)) >>> 0;
  const peaks = [];
  const count = 90;
  let prev = 0.45;
  for (let i = 0; i < count; i++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const rnd = (seed % 1000) / 1000;
    const envelope = Math.sin((i / count) * Math.PI) * 0.45 + 0.35;
    prev = prev * 0.65 + rnd * 0.35;
    const height = Math.min(1, Math.max(0.12, prev * envelope * 1.5));
    peaks.push(height);
  }
  trackPeaksCache[track.id] = peaks;
  return peaks;
}

function drawWaveform() {
  const canvas = document.getElementById('waveformCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const t = current();
  const peaks = getTrackPeaks(t);
  const dur = Number.isFinite(active.duration) ? active.duration : 22;
  const curTime = Number.isFinite(active.currentTime) ? active.currentTime : 0;
  const progress = Math.max(0, Math.min(1, curTime / dur));

  const barCount = peaks.length;
  const gap = 2;
  const barW = (w - (barCount - 1) * gap) / barCount;

  for (let i = 0; i < barCount; i++) {
    const x = i * (barW + gap);
    const barH = Math.max(3, peaks[i] * (h - 4));
    const y = (h - barH) / 2;
    const isPlayed = (i / barCount) <= progress;

    ctx.fillStyle = isPlayed ? '#f4b942' : 'rgba(165, 170, 155, 0.35)';
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, barW, barH, 1);
    } else {
      ctx.rect(x, y, barW, barH);
    }
    ctx.fill();
  }

  if (dur > 0 && state.crossfade > 0) {
    const fadeCueTime = Math.max(0, dur - state.crossfade);
    const cueX = (fadeCueTime / dur) * w;
    ctx.strokeStyle = 'rgba(85, 199, 180, 0.75)';
    ctx.setLineDash([2, 2]);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cueX, 2);
    ctx.lineTo(cueX, h - 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

function updateVuMeter() {
  const vuL = document.getElementById('vuL');
  const vuR = document.getElementById('vuR');
  if (!vuL || !vuR) return;

  if (active.paused || !analyser) {
    vuL.style.height = '0%';
    vuR.style.height = '0%';
    return;
  }

  const freq = new Uint8Array(64);
  try {
    analyser.getByteFrequencyData(freq);
    let leftSum = 0, rightSum = 0;
    for (let i = 0; i < 16; i++) leftSum += freq[i];
    for (let i = 16; i < 32; i++) rightSum += freq[i];
    const leftPct = Math.min(100, Math.round((leftSum / (16 * 255)) * 140));
    const rightPct = Math.min(100, Math.round((rightSum / (16 * 255)) * 140));
    vuL.style.height = `${leftPct}%`;
    vuR.style.height = `${rightPct}%`;
  } catch {
    vuL.style.height = '0%';
    vuR.style.height = '0%';
  }
}

function updateAmbientAtmosphere(t) {
  if (!t) return;
  const genreAtmospheres = {
    'Rock and Alternative': 'rgba(235, 94, 40, 0.08)',
    'Pop and Electropop': 'rgba(85, 199, 180, 0.09)',
    'Hip Hop and Trap': 'rgba(213, 234, 123, 0.08)',
    'RnB and Soul': 'rgba(244, 185, 66, 0.09)',
    'Electronic and Dance': 'rgba(120, 220, 255, 0.08)',
    'Country and Americana': 'rgba(224, 167, 52, 0.08)',
    'Jazz': 'rgba(180, 140, 255, 0.08)',
    'Metal': 'rgba(255, 65, 84, 0.08)',
    'Folk and Acoustic': 'rgba(212, 190, 150, 0.08)',
    'Latin and Global': 'rgba(255, 170, 50, 0.09)'
  };
  const glow = genreAtmospheres[t.genre] || 'rgba(244, 185, 66, 0.07)';
  document.documentElement.style.setProperty('--ambient-glow', glow);
}

function getRecommendations(trackId, count = 4) {
  const target = byId(trackId);
  if (!target) return [];
  const candidates = tracks.filter(t => t.id !== trackId);

  return candidates.map(t => {
    let score = 0;
    if (t.genre === target.genre) score += 5;
    if (t.subgenre === target.subgenre) score += 3;
    if (t.mood === target.mood) score += 4;
    const bpmDiff = Math.abs(t.bpm - target.bpm);
    if (bpmDiff <= 8) score += 4;
    else if (bpmDiff <= 18) score += 2;
    if (t.year === target.year) score += 1;
    return { track: t, score };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, count)
  .map(x => x.track);
}

function openTrackInfo(trackOrId) {
  const t = typeof trackOrId === 'string' ? byId(trackOrId) : trackOrId;
  if (!t) return;
  const artistObj = artistDirectory.find(a => a.name.toLowerCase() === t.artist.toLowerCase() || a.id === t.id.replace(/^set[12]-\d+-/, '')) || {};

  $('#infoCover').src = t.cover;
  $('#infoCover').alt = `Artwork for ${t.title}`;
  $('#infoTitle').textContent = t.title;
  $('#infoArtistAlbum').textContent = `${t.artist} · ${t.album} (${t.year})`;
  $('#infoMood').textContent = `Mood: ${t.mood} · Tempo: ${t.bpm} BPM`;
  $('#infoGenre').textContent = t.genre;
  $('#infoBpm').textContent = `${t.bpm} BPM`;
  $('#infoYear').textContent = t.year;

  const prompt = t.suno_prompt || artistObj.suno_prompt || `${t.subgenre.toLowerCase()}, ${t.genre.toLowerCase()}, ${t.bpm}bpm, instrumental recording`;
  const sonic = t.sonic_identity || artistObj.sonic_identity || t.description || 'Original master recording from the Fuse Music listening room archives.';

  $('#infoSonic').textContent = sonic;
  $('#infoPrompt').textContent = prompt;

  const recs = getRecommendations(t.id, 4);
  const recsContainer = $('#infoRecs');
  if (recsContainer) {
    recsContainer.innerHTML = recs.map(r => `
      <article class="rec-card">
        <img src="${r.cover}" alt="">
        <div class="rec-card-info">
          <h4>${esc(r.title)}</h4>
          <p>${esc(r.artist)} · ${r.bpm} BPM</p>
          <span>${esc(r.mood)}</span>
        </div>
        <div class="rec-card-actions">
          <button type="button" data-action="play" data-id="${r.id}" title="Play ${esc(r.title)}" aria-label="Play ${esc(r.title)}">▶</button>
          <button type="button" data-action="playnext" data-id="${r.id}" title="Play next" aria-label="Play next">+ NEXT</button>
        </div>
      </article>
    `).join('');
  }

  $('#infoPlayBtn').onclick = () => {
    $('#trackInfoDialog').close();
    playTrack(t.id);
  };
  $('#infoQueueNextBtn').onclick = () => {
    $('#trackInfoDialog').close();
    playNext(t.id);
  };
  $('#infoAddSetBtn').onclick = () => {
    $('#trackInfoDialog').close();
    pendingSetTrack = t.id;
    if (!Object.keys(state.playlists).length) {
      location.hash = 'library';
      setTimeout(() => $('#playlistName')?.focus(), 120);
      announce('Create a set first.');
      return;
    }
    $('#dialogPlaylistSelect').innerHTML = Object.keys(state.playlists).map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join('');
    $('#addToSetDialog').showModal();
  };

  $('#trackInfoDialog').showModal();
}

function shareSet(name) {
  const ids = state.playlists[name] || [];
  if (!ids.length) {
    announce('Add tracks to this set before sharing.');
    return;
  }
  const shareUrl = `${location.origin}${location.pathname}#share-set?name=${encodeURIComponent(name)}&tracks=${encodeURIComponent(ids.join(','))}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl).then(() => {
      announce(`Share link for "${name}" copied to clipboard! ↗`);
    }).catch(() => {
      prompt('Shareable link for set:', shareUrl);
    });
  } else {
    prompt('Shareable link for set:', shareUrl);
  }
}

function checkSharedSet() {
  const hash = location.hash.slice(1);
  if (hash.startsWith('share-set?')) {
    const params = new URLSearchParams(hash.slice(10));
    const name = params.get('name') || 'Shared Set';
    const tracksParam = params.get('tracks') || '';
    const trackIds = tracksParam.split(',').filter(byId);
    if (trackIds.length > 0) {
      if (confirm(`Import shared set "${name}" (${trackIds.length} cuts) into your collection?`)) {
        let finalName = name;
        if (state.playlists[finalName]) finalName = `${name} (Imported)`;
        state.playlists[finalName] = trackIds;
        save();
        location.hash = 'library';
        render();
        announce(`Imported set "${finalName}" with ${trackIds.length} cuts.`);
      }
    }
  }
}

function ensureAudioContext() {
  if (audioCtx) {
    if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
    updateCrackleState();
    updateSoundbedState();
    updateAudioDiagnostics();
    return;
  }
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioCtx = new AudioContextClass();

    eqBass = audioCtx.createBiquadFilter();
    eqBass.type = 'lowshelf';
    eqBass.frequency.value = 150;
    eqBass.gain.value = state.eq?.bass || 0;

    eqMid = audioCtx.createBiquadFilter();
    eqMid.type = 'peaking';
    eqMid.frequency.value = 1000;
    eqMid.Q.value = 1.0;
    eqMid.gain.value = state.eq?.mid || 0;

    eqTreble = audioCtx.createBiquadFilter();
    eqTreble.type = 'highshelf';
    eqTreble.frequency.value = 3500;
    eqTreble.gain.value = state.eq?.treble || 0;

    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.8;

    sourceNodeA = audioCtx.createMediaElementSource(audioA);
    sourceNodeA.connect(eqBass);
    sourceNodeB = audioCtx.createMediaElementSource(audioB);
    sourceNodeB.connect(eqBass);

    eqBass.connect(eqMid);
    eqMid.connect(eqTreble);
    eqTreble.connect(analyser);
    analyser.connect(audioCtx.destination);

    initCrackle();
    initSoundbedNodes();
    updateAudioDiagnostics();
  } catch {}
}

function initSoundbedNodes() {
  if (!audioCtx) return;
  try {
    // 432Hz Drone
    droneOsc = audioCtx.createOscillator();
    droneOsc.type = 'sine';
    droneOsc.frequency.value = 432;
    droneGain = audioCtx.createGain();
    droneGain.gain.value = (state.soundbed?.drone432 && !active.paused) ? (state.soundbed?.drone432Vol || 0.08) : 0;
    droneOsc.connect(droneGain);
    droneGain.connect(audioCtx.destination);
    droneOsc.start();

    // 10Hz Alpha Focus Beat (L: 216Hz, R: 226Hz)
    binauralOscL = audioCtx.createOscillator();
    binauralOscL.type = 'sine';
    binauralOscL.frequency.value = 216;

    binauralOscR = audioCtx.createOscillator();
    binauralOscR.type = 'sine';
    binauralOscR.frequency.value = 226;

    binauralMerger = audioCtx.createChannelMerger(2);
    binauralOscL.connect(binauralMerger, 0, 0);
    binauralOscR.connect(binauralMerger, 0, 1);

    binauralGain = audioCtx.createGain();
    binauralGain.gain.value = (state.soundbed?.binaural && !active.paused) ? (state.soundbed?.binauralVol || 0.08) : 0;
    binauralMerger.connect(binauralGain);
    binauralGain.connect(audioCtx.destination);
    binauralOscL.start();
    binauralOscR.start();

    // Analog Rain Bed
    const bufSize = audioCtx.sampleRate * 3;
    const rainBuf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
    const data = rainBuf.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.03 * white) / 1.03;
      data[i] = lastOut * 0.6;
    }
    rainSource = audioCtx.createBufferSource();
    rainSource.buffer = rainBuf;
    rainSource.loop = true;

    const rainFilter = audioCtx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.value = 1100;

    rainGain = audioCtx.createGain();
    rainGain.gain.value = (state.soundbed?.rainBed && !active.paused) ? (state.soundbed?.rainBedVol || 0.08) : 0;

    rainSource.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(audioCtx.destination);
    rainSource.start();
  } catch {}
}

function updateSoundbedState() {
  if (!audioCtx) return;
  const isPlaying = !active.paused;
  try {
    if (droneGain) {
      const target = (state.soundbed?.drone432 && isPlaying) ? (state.soundbed?.drone432Vol || 0.08) : 0;
      droneGain.gain.setTargetAtTime(target, audioCtx.currentTime, 0.08);
    }
    if (binauralGain) {
      const target = (state.soundbed?.binaural && isPlaying) ? (state.soundbed?.binauralVol || 0.08) : 0;
      binauralGain.gain.setTargetAtTime(target, audioCtx.currentTime, 0.08);
    }
    if (rainGain) {
      const target = (state.soundbed?.rainBed && isPlaying) ? (state.soundbed?.rainBedVol || 0.08) : 0;
      rainGain.gain.setTargetAtTime(target, audioCtx.currentTime, 0.08);
    }
  } catch {}
  updateAudioDiagnostics();
}

function initVisualizer() {
  const canvas = document.getElementById('audioVisualizer');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cinemaCanvas = document.getElementById('cinemaVisualizer');
  const cinemaCtx = cinemaCanvas ? cinemaCanvas.getContext('2d') : null;

  const timeData = new Uint8Array(128);
  const freqData = new Uint8Array(64);

  function draw() {
    requestAnimationFrame(draw);
    updateVuMeter();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const isPlaying = !active.paused;

    let hasRealData = false;
    if (analyser && isPlaying) {
      try {
        analyser.getByteFrequencyData(freqData);
        analyser.getByteTimeDomainData(timeData);
        if (freqData.some(v => v > 0)) hasRealData = true;
      } catch {}
    }

    const eqBars = $$('#playerEq span');
    if (eqBars.length >= 4) {
      if (isPlaying && hasRealData) {
        let bSum = (freqData[0] + freqData[1] + freqData[2] + freqData[3]) / 4;
        let mSum = (freqData[8] + freqData[12] + freqData[16] + freqData[20]) / 4;
        let tSum = (freqData[32] + freqData[40] + freqData[48] + freqData[56]) / 4;
        let hSum = (freqData[4] + freqData[10] + freqData[24] + freqData[30]) / 4;
        eqBars[0].style.height = `${Math.max(3, (bSum / 255) * 18)}px`;
        eqBars[1].style.height = `${Math.max(3, (mSum / 255) * 18)}px`;
        eqBars[2].style.height = `${Math.max(3, (tSum / 255) * 18)}px`;
        eqBars[3].style.height = `${Math.max(3, (hSum / 255) * 18)}px`;
      } else if (!isPlaying) {
        eqBars.forEach(b => { b.style.height = '3px'; });
      }
    }

    const t = current();
    const bpm = t && t.bpm ? t.bpm : 110;
    const pulse = isPlaying ? (Math.sin(performance.now() * 0.0035 * (bpm / 60)) * 0.18 + 0.82) : 0.25;

    if (state.vizMode === 'scope') {
      // CRT Oscilloscope
      ctx.save();
      ctx.strokeStyle = isPlaying ? '#55c7b4' : 'rgba(85,199,180,0.3)';
      ctx.shadowColor = '#55c7b4';
      ctx.shadowBlur = isPlaying ? 8 : 2;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      const sliceW = canvas.width / (timeData.length || 64);
      for (let i = 0; i < timeData.length; i++) {
        let v = hasRealData ? (timeData[i] / 128.0) : (isPlaying ? 1 + Math.sin(i * 0.2 + performance.now() * 0.005) * 0.2 : 1.0);
        let y = v * cy;
        let x = i * sliceW;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(85,199,180,0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    } else if (state.vizMode === 'bars') {
      // 32-Band Spectrum
      ctx.save();
      const numBars = 32;
      const barWidth = 7;
      const barSpacing = 4;
      const startX = cx - ((numBars * (barWidth + barSpacing)) / 2);
      for (let i = 0; i < numBars; i++) {
        const val = hasRealData ? (freqData[i] / 255) : (isPlaying ? (Math.sin(i * 0.4 + performance.now() * 0.004) * 0.35 + 0.45) : 0.05);
        const barH = Math.max(4, val * 120 * pulse);
        const x = startX + i * (barWidth + barSpacing);
        const y = cy + 60 - barH;
        ctx.fillStyle = i % 2 === 0 ? '#f4b942' : '#eb5e28';
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(x, y, barWidth, barH, 2);
        } else {
          ctx.rect(x, y, barWidth, barH);
        }
        ctx.fill();
      }
      ctx.restore();
    } else {
      // Default: Orbital Pulsar
      const count = 44;
      const baseRadius = 145;
      ctx.save();
      ctx.translate(cx, cy);

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        let val = hasRealData ? (freqData[i % freqData.length] / 255) : (isPlaying ? Math.sin(angle * 4 + performance.now() * 0.004) * 0.35 + 0.5 : 0.08);
        val = val * pulse;

        const barLen = 6 + val * 42;
        const x1 = Math.cos(angle) * baseRadius;
        const y1 = Math.sin(angle) * baseRadius;
        const x2 = Math.cos(angle) * (baseRadius + barLen);
        const y2 = Math.sin(angle) * (baseRadius + barLen);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = isPlaying ? (i % 2 === 0 ? '#f4b942' : '#55c7b4') : 'rgba(244,185,66,0.18)';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(0, 0, baseRadius + 2, 0, Math.PI * 2);
      ctx.strokeStyle = isPlaying ? 'rgba(244,185,66,0.4)' : 'rgba(244,185,66,0.12)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }

    if (isCinemaActive && cinemaCtx && cinemaCanvas) {
      cinemaCtx.clearRect(0, 0, cinemaCanvas.width, cinemaCanvas.height);
      const cw = cinemaCanvas.width;
      const ch = cinemaCanvas.height;
      const cBars = 48;
      const cGap = 4;
      const cBarW = (cw - (cBars - 1) * cGap) / cBars;
      for (let i = 0; i < cBars; i++) {
        const val = hasRealData ? (freqData[i % freqData.length] / 255) : (isPlaying ? (Math.sin(i * 0.3 + performance.now() * 0.004) * 0.35 + 0.45) : 0.05);
        const bH = Math.max(3, val * (ch - 8) * pulse);
        const x = i * (cBarW + cGap);
        const y = ch - bH;
        cinemaCtx.fillStyle = isPlaying ? '#f4b942' : 'rgba(244,185,66,0.2)';
        cinemaCtx.fillRect(x, y, cBarW, bH);
      }
    }
  }

  draw();
}

function row(t, i) {
  const isSelected = selectedTrackIds.has(t.id);
  return `<article class="item" data-track-id="${t.id}">
    <input type="checkbox" class="item-select" data-id="${t.id}" ${isSelected ? 'checked' : ''} aria-label="Select ${esc(t.title)}">
    <img src="${t.cover}" alt="">
    <div>
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.artist)} · ${esc(t.album)} · ${t.bpm} BPM</p>
    </div>
    <div class="item-actions">
      <button data-action="play" data-id="${t.id}" aria-label="Play ${esc(t.title)}">PLAY</button>
      <button data-action="playnext" data-id="${t.id}" aria-label="Play ${esc(t.title)} next">+ NEXT</button>
      <button data-action="queue" data-id="${t.id}" aria-label="Queue ${esc(t.title)}">+ QUEUE</button>
      <button data-action="info" data-id="${t.id}" aria-label="Info for ${esc(t.title)}">INFO ⓘ</button>
      <button data-action="addtoset" data-id="${t.id}" aria-label="Add ${esc(t.title)} to a set">+ SET</button>
      <button class="${state.liked.includes(t.id) ? 'liked' : ''}" data-action="like" data-id="${t.id}" aria-label="${state.liked.includes(t.id) ? 'Unlike' : 'Like'} ${esc(t.title)}">${state.liked.includes(t.id) ? '♥ SAVED' : '♡ SAVE'}</button>
    </div>
  </article>`;
}

// ── Homepage all-songs carousel ──────────────────────────────────────────
let carouselTimer = null, carouselPaused = false;
function carouselSlide(t, i) {
  const liked = state.liked.includes(t.id);
  return `<article class="carousel-card" data-track-id="${t.id}">
    <div class="carousel-art">
      <img src="${esc(t.cover)}" alt="Artwork for ${esc(t.title)}" loading="lazy">
      <span class="carousel-index">FUSE / ${String(i + 1).padStart(3, '0')}</span>
      <span class="carousel-bpm">${t.bpm || '—'} BPM</span>
      <button type="button" class="carousel-play" data-action="play" data-id="${esc(t.id)}" aria-label="Play ${esc(t.title)}">▶</button>
    </div>
    <div class="carousel-body">
      <p class="carousel-meta">${esc(t.genre || '')}</p>
      <h3>${esc(t.title)}</h3>
      <p class="carousel-artist">${esc(t.artist)} · ${esc(t.album)}</p>
      <div class="carousel-row">
        <button class="primary" data-action="play" data-id="${esc(t.id)}" aria-label="Play ${esc(t.title)}">PLAY ↗</button>
        <button data-action="queue" data-id="${esc(t.id)}" aria-label="Queue ${esc(t.title)}">+ QUEUE</button>
        <button class="iconbtn${liked ? ' liked' : ''}" data-action="like" data-id="${esc(t.id)}" data-carousel-like aria-label="${liked ? 'Unlike' : 'Like'} ${esc(t.title)}">${liked ? '♥' : '♡'}</button>
      </div>
    </div>
  </article>`;
}
function carouselStep() {
  const vp = $('#carouselViewport');
  const card = vp && vp.querySelector('.carousel-card');
  return card ? card.getBoundingClientRect().width + 16 : 336;
}
function carouselScrollBy(dir) {
  const vp = $('#carouselViewport');
  if (vp) vp.scrollBy({ left: dir * carouselStep(), behavior: 'smooth' });
}
function carouselGoTo(i) {
  const vp = $('#carouselViewport');
  if (vp) vp.scrollTo({ left: i * carouselStep(), behavior: 'smooth' });
}
function updateCarouselUI() {
  const vp = $('#carouselViewport');
  if (!vp) return;
  const total = tracks.length;
  if (!total) return;
  const step = carouselStep();
  const idx = Math.max(0, Math.min(total - 1, Math.round(vp.scrollLeft / step)));
  const countEl = $('#carouselCount');
  if (countEl) countEl.textContent = `CUT ${String(idx + 1).padStart(3, '0')} / ${String(total).padStart(3, '0')}`;
  const dots = $('#carouselDots');
  if (dots) dots.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}
function stopCarouselAuto() {
  if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; }
}
function startCarouselAuto() {
  stopCarouselAuto();
  carouselTimer = setInterval(() => {
    if (carouselPaused) return;
    const vp = $('#carouselViewport');
    if (!vp) return;
    const atEnd = vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - 4;
    if (atEnd) carouselGoTo(0); else carouselScrollBy(1);
  }, 5000);
}
function initCarouselControls() {
  const vp = $('#carouselViewport');
  if (!vp) return;
  $('#carouselPrev')?.addEventListener('click', () => carouselScrollBy(-1));
  $('#carouselNext')?.addEventListener('click', () => carouselScrollBy(1));
  const dots = $('#carouselDots');
  if (dots) {
    dots.innerHTML = tracks.map((t, i) => `<button type="button" class="carousel-dot" role="tab" data-slide="${i}" aria-label="Go to ${esc(t.title)}"></button>`).join('');
    dots.querySelectorAll('[data-slide]').forEach(b => b.addEventListener('click', () => carouselGoTo(+b.dataset.slide)));
  }
  vp.addEventListener('scroll', updateCarouselUI, { passive: true });
  vp.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); carouselScrollBy(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); carouselScrollBy(-1); }
  });
  const pauseBtn = $('#carouselPause');
  if (pauseBtn) pauseBtn.addEventListener('click', () => {
    carouselPaused = !carouselPaused;
    pauseBtn.setAttribute('aria-pressed', String(carouselPaused));
    pauseBtn.textContent = carouselPaused ? '▶' : '❚❚';
    pauseBtn.setAttribute('aria-label', carouselPaused ? 'Resume auto-rotation' : 'Pause auto-rotation');
  });
  vp.addEventListener('mouseenter', stopCarouselAuto);
  vp.addEventListener('mouseleave', startCarouselAuto);
  vp.addEventListener('focusin', stopCarouselAuto);
  vp.addEventListener('focusout', startCarouselAuto);
  window.addEventListener('resize', updateCarouselUI);
  startCarouselAuto();
}
function renderCarousel() {
  const trackEl = $('#carouselTrack');
  if (!trackEl) return;
  if (!trackEl.dataset.built) {
    trackEl.innerHTML = tracks.map(carouselSlide).join('');
    trackEl.dataset.built = '1';
    initCarouselControls();
    updateCarouselUI();
  }
  trackEl.querySelectorAll('[data-carousel-like]').forEach(btn => {
    const on = state.liked.includes(btn.dataset.id);
    btn.classList.toggle('liked', on);
    btn.textContent = on ? '♥' : '♡';
    btn.setAttribute('aria-label', `${on ? 'Unlike' : 'Like'} ${btn.closest('.carousel-card')?.querySelector('h3')?.textContent.trim() || ''}`);
  });
}

function render() {
  const filteredTracks = tracks.filter(t => {
    const matchGenre = currentGenre === 'all' ||
      (t.genre && t.genre.toLowerCase().includes(currentGenre.toLowerCase())) ||
      (t.subgenre && t.subgenre.toLowerCase().includes(currentGenre.toLowerCase()));
    if (!matchGenre) return false;

    const bpm = t.bpm || 100;
    if (currentTempo === 'slow' && bpm >= 95) return false;
    if (currentTempo === 'mid' && (bpm < 95 || bpm > 125)) return false;
    if (currentTempo === 'fast' && bpm <= 125) return false;

    if (currentMood !== 'all' && (!t.mood || !t.mood.toLowerCase().includes(currentMood.toLowerCase()))) {
      return false;
    }
    return true;
  });

  $('#trackGrid').innerHTML = filteredTracks.map((t, i) => {
    const isSelected = selectedTrackIds.has(t.id);
    return `<article class="card" data-track-id="${t.id}">
      <input type="checkbox" class="item-select" data-id="${t.id}" ${isSelected ? 'checked' : ''} aria-label="Select ${esc(t.title)}">
      <img src="${t.cover}" alt="Artwork for ${esc(t.title)}" loading="lazy">
      <div class="card-meta">
        <span>FUSE / ${String(i + 1).padStart(2, '0')}</span>
        <span>${t.bpm} BPM</span>
      </div>
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.artist)} · ${esc(t.album)}</p>
      <p class="mood">${esc(t.mood)}</p>
      <div class="row">
        <button class="primary" data-action="play" data-id="${t.id}" aria-label="Play ${esc(t.title)}">PLAY ↗</button>
        <button data-action="playnext" data-id="${t.id}" aria-label="Play ${esc(t.title)} next">+ NEXT</button>
        <button data-action="queue" data-id="${t.id}" aria-label="Queue ${esc(t.title)}">+ QUEUE</button>
        <button data-action="info" data-id="${t.id}" aria-label="Info for ${esc(t.title)}">INFO ⓘ</button>
        <button data-action="addtoset" data-id="${t.id}" aria-label="Add ${esc(t.title)} to a set">+ SET</button>
        <button class="iconbtn ${state.liked.includes(t.id) ? 'liked' : ''}" data-action="like" data-id="${t.id}" aria-label="${state.liked.includes(t.id) ? 'Unlike' : 'Like'} ${esc(t.title)}">${state.liked.includes(t.id) ? '♥' : '♡'}</button>
      </div>
    </article>`;
  }).join('');

  const parsed = parseSearchQuery(searchText);
  let results = parsed.results;
  if (currentAlphaLetter !== 'ALL') {
    results = results.filter(t => t.title.toUpperCase().startsWith(currentAlphaLetter) || t.artist.toUpperCase().startsWith(currentAlphaLetter));
  }
  $('#resultCount').textContent = `${results.length} CUT${results.length === 1 ? '' : 'S'} ${parsed.summary}${currentAlphaLetter !== 'ALL' ? ` [LETTER ${currentAlphaLetter}]` : ''}`;
  $('#searchResults').innerHTML = results.length ? results.map(row).join('') : '<p class="empty">Nothing on that frequency. Try a title, artist, tempo or prompt keyword.</p>';

  let artistResults = searchText.trim() ? artistDirectory.filter(a => [a.name, a.genre, a.type, a.location, a.bio, a.album, a.year, a.coverBrief, a.subgenre, a.suno_prompt].join(' ').toLowerCase().includes(searchText.toLowerCase())) : (currentAlphaLetter !== 'ALL' ? artistDirectory : []);
  if (currentAlphaLetter !== 'ALL') {
    artistResults = artistResults.filter(a => (a.name || '').toUpperCase().startsWith(currentAlphaLetter));
  }
  $('#artistResultCount').textContent = (searchText.trim() || currentAlphaLetter !== 'ALL') ? `${artistResults.length} MATCH${artistResults.length === 1 ? '' : 'ES'}` : 'TYPE TO SEARCH';
  $('#artistSearchResults').innerHTML = artistResults.length ? artistResults.slice(0, 16).map(a => `<article class="item artist-result">
    <img src="${esc(a.image || a.album_cover)}" alt="">
    <div>
      <h3><a href="#artist/${esc(a.id)}">${esc(a.name)} ↗</a></h3>
      <p>${esc(a.album)} · ${esc(a.genre)} · ${esc(a.year)}</p>
    </div>
    <div style="display:flex;gap:6px">
      <button data-action="play" data-id="${esc(a.track_id || '')}" style="font-size:9px;padding:6px 10px">PLAY ▶</button>
      <a class="result-link" href="#artist/${esc(a.id)}" style="display:grid;place-items:center;padding:6px 10px;border:1px solid var(--line)">PROFILE</a>
    </div>
  </article>`).join('') : ((searchText.trim() || currentAlphaLetter !== 'ALL') ? '<p class="empty">No matching artists or releases.</p>' : '<p class="empty">Artist and release matches will appear here as you type.</p>');

  $('#libraryList').innerHTML = state.liked.map(byId).filter(Boolean).map(row).join('') || '<p class="empty">Your shelf is clear. Save a track to bring it here.</p>';

  // Recently played history
  const historyItems = (state.history || []).map(h => ({ track: byId(h.id), time: h.time })).filter(x => x.track);
  const historyListEl = $('#historyList');
  if (historyListEl) {
    historyListEl.innerHTML = historyItems.length ? historyItems.map(item => `<article class="item" data-track-id="${item.track.id}">
      <input type="checkbox" class="item-select" data-id="${item.track.id}" ${selectedTrackIds.has(item.track.id) ? 'checked' : ''} aria-label="Select ${esc(item.track.title)}">
      <img src="${item.track.cover}" alt="">
      <div>
        <h3>${esc(item.track.title)}</h3>
        <p>${esc(item.track.artist)} · ${esc(item.track.album)}</p>
      </div>
      <span class="item-time">${timeAgo(item.time)}</span>
      <div class="item-actions">
        <button data-action="play" data-id="${item.track.id}">PLAY</button>
        <button data-action="playnext" data-id="${item.track.id}">+ NEXT</button>
        <button data-action="info" data-id="${item.track.id}">INFO ⓘ</button>
      </div>
    </article>`).join('') : '<p class="empty">No recently played tracks yet. Start listening in the room!</p>';
  }

  // Queue running order
  $('#queueList').innerHTML = state.queue.map((id, i) => {
    const t = byId(id);
    return `<article class="item ${i === state.current ? 'playing' : ''}" data-track-id="${t.id}" data-index="${i}">
      <input type="checkbox" class="item-select" data-id="${t.id}" ${selectedTrackIds.has(t.id) ? 'checked' : ''} aria-label="Select ${esc(t.title)}">
      <img src="${t.cover}" alt="">
      <div>
        <h3>${String(i + 1).padStart(2, '0')} / ${esc(t.title)}</h3>
        <p>${esc(t.artist)} · ${t.duration}</p>
      </div>
      <div class="item-actions">
        <button data-action="playq" data-index="${i}">PLAY</button>
        <button data-action="info" data-id="${t.id}">INFO</button>
        <button data-action="moveq" data-index="${i}" data-dir="-1" ${i === 0 ? 'disabled' : ''} aria-label="Move up">↑</button>
        <button data-action="moveq" data-index="${i}" data-dir="1" ${i === state.queue.length - 1 ? 'disabled' : ''} aria-label="Move down">↓</button>
        <button data-action="removeq" data-index="${i}" ${state.queue.length === 1 ? 'disabled' : ''} aria-label="Remove ${esc(t.title)} from queue">REMOVE</button>
      </div>
    </article>`;
  }).join('');
  $('#queueBadge').textContent = `${state.queue.length} IN THE RUNNING ORDER`;

  const chosen = $('#playlistTrack').value;
  $('#playlistTrack').innerHTML = tracks.map(t => `<option value="${t.id}">${esc(t.title)} — ${esc(t.artist)}</option>`).join('');
  if (chosen) $('#playlistTrack').value = chosen;

  const playlistNames = Object.keys(state.playlists);
  const selectedSet = $('#playlistSelect').value;
  $('#playlistSelect').innerHTML = playlistNames.map(name => `<option value="${esc(name)}">${esc(name)}</option>`).join('') || '<option value="">Create a set first</option>';
  if (selectedSet && state.playlists[selectedSet]) $('#playlistSelect').value = selectedSet;
  $('#dialogPlaylistSelect').innerHTML = $('#playlistSelect').innerHTML;

  $('#playlistArea').innerHTML = Object.entries(state.playlists).map(([name, ids]) => `<section class="playlist">
    <div class="playlist-head">
      <h3>${esc(name)} <small>${ids.length} CUTS</small></h3>
      <div>
        <button data-action="playset" data-name="${esc(name)}">REPLACE QUEUE & PLAY</button>
        <button data-action="queueset" data-name="${esc(name)}">ADD TO UP NEXT</button>
        <button data-action="shareset" data-name="${esc(name)}" class="share-set-btn">SHARE SET ↗</button>
        <button data-action="linernotes" data-name="${esc(name)}" class="liner-notes-btn">LINER NOTES ✎</button>
        <button data-action="printcue" data-name="${esc(name)}" class="print-cue-btn">PRINT CUE / J-CARD 🖨</button>
        <button data-action="renameset" data-name="${esc(name)}">RENAME</button>
        <button data-action="deleteset" data-name="${esc(name)}" aria-label="Delete ${esc(name)}">DELETE</button>
      </div>
    </div>
    ${state.linerNotes && state.linerNotes[name] ? `<div class="liner-notes-box"><div><strong>LINER NOTES:</strong> <p>${esc(state.linerNotes[name])}</p></div><button type="button" data-action="linernotes" data-name="${esc(name)}" class="text-button" style="font-size:9px">EDIT</button></div>` : ''}
    <div class="list">
      ${ids.length ? ids.map(byId).filter(Boolean).map((t, i) => `<article class="item" data-track-id="${t.id}">
        <input type="checkbox" class="item-select" data-id="${t.id}" ${selectedTrackIds.has(t.id) ? 'checked' : ''} aria-label="Select ${esc(t.title)}">
        <img src="${t.cover}" alt="">
        <div>
          <h3>${esc(t.title)}</h3>
          <p>${esc(t.artist)}</p>
        </div>
        <div class="item-actions">
          <button data-action="play" data-id="${t.id}">PLAY</button>
          <button data-action="info" data-id="${t.id}">INFO</button>
          <button data-action="moveset" data-name="${esc(name)}" data-index="${i}" data-direction="-1" ${i === 0 ? 'disabled' : ''} aria-label="Move ${esc(t.title)} up">↑</button>
          <button data-action="moveset" data-name="${esc(name)}" data-index="${i}" data-direction="1" ${i === ids.length - 1 ? 'disabled' : ''} aria-label="Move ${esc(t.title)} down">↓</button>
          <button data-action="removefromset" data-name="${esc(name)}" data-index="${i}">REMOVE</button>
        </div>
      </article>`).join('') : '<p class="empty">Add a track above to start this set.</p>'}
    </div>
  </section>`).join('');

  updatePlayer();
  initQueueDrag();
  initPlaylistDrag();
  updateMilestonesUI();
  updateBatchBar();
  renderCarousel();
}

function initQueueDrag() {
  const items = $$('#queueList .item');
  let dragSrcIndex = -1;
  items.forEach((item, index) => {
    item.setAttribute('draggable', 'true');
    item.classList.add('draggable');
    item.ondragstart = e => {
      dragSrcIndex = index;
      e.dataTransfer.setData('text/plain', String(index));
    };
    item.ondragover = e => {
      e.preventDefault();
      item.classList.add('drag-over');
    };
    item.ondragleave = () => {
      item.classList.remove('drag-over');
    };
    item.ondragend = () => {
      dragSrcIndex = -1;
      items.forEach(it => it.classList.remove('drag-over'));
    };
    item.ondrop = e => {
      e.preventDefault();
      item.classList.remove('drag-over');
      if (dragSrcIndex >= 0 && dragSrcIndex !== index) {
        const movedId = state.queue.splice(dragSrcIndex, 1)[0];
        state.queue.splice(index, 0, movedId);
        if (state.current === dragSrcIndex) state.current = index;
        else if (dragSrcIndex < state.current && index >= state.current) state.current--;
        else if (dragSrcIndex > state.current && index <= state.current) state.current++;
        dragSrcIndex = -1;
        render();
        prepareStandby();
        save();
      }
    };
  });
}

function initPlaylistDrag() {
  $$('#playlistArea .playlist').forEach(playlistEl => {
    const titleEl = playlistEl.querySelector('.playlist-head h3');
    if (!titleEl) return;
    const setName = titleEl.childNodes[0]?.textContent?.trim();
    if (!setName || !state.playlists[setName]) return;

    const items = playlistEl.querySelectorAll('.list .item');
    let dragSrcIdx = -1;
    items.forEach((item, index) => {
      item.setAttribute('draggable', 'true');
      item.classList.add('draggable');
      item.ondragstart = e => {
        dragSrcIdx = index;
        e.dataTransfer.setData('text/plain', String(index));
      };
      item.ondragover = e => {
        e.preventDefault();
        item.classList.add('drag-over');
      };
      item.ondragleave = () => {
        item.classList.remove('drag-over');
      };
      item.ondragend = () => {
        dragSrcIdx = -1;
        items.forEach(it => it.classList.remove('drag-over'));
      };
      item.ondrop = e => {
        e.preventDefault();
        item.classList.remove('drag-over');
        if (dragSrcIdx >= 0 && dragSrcIdx !== index) {
          const list = state.playlists[setName];
          if (list && list.length > index) {
            const [moved] = list.splice(dragSrcIdx, 1);
            list.splice(index, 0, moved);
            dragSrcIdx = -1;
            save();
            render();
            announce(`Reordered cuts in "${setName}".`);
          }
        }
      };
    });
  });
}

function initTouchGestures() {
  const bar = $('#playerBar');
  if (!bar) return;
  bar.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  bar.addEventListener('touchend', e => {
    if (e.changedTouches.length === 1) {
      const diffX = e.changedTouches[0].clientX - touchStartX;
      const diffY = e.changedTouches[0].clientY - touchStartY;
      const absX = Math.abs(diffX);
      const absY = Math.abs(diffY);

      if (absX > 50 && absX > absY) {
        if (diffX < 0) {
          next();
          announce('Next cut ↗');
        } else {
          previous();
          announce('Previous cut ↖');
        }
      } else if (diffY < -50 && absY > absX) {
        openTrackInfo(current().id);
      }
    }
  }, { passive: true });
}

function route() {
  const target = (location.hash || '#home').slice(1);
  if (target.startsWith('share-set?')) {
    checkSharedSet();
    return;
  }
  const communityRoute = /^(artists|artist\/[^/]+|signup|signin|profile|artist-apply|guidelines|privacy)$/.test(target);
  const view = communityRoute ? 'community' : ['home', 'search', 'library', 'queue', 'about', 'charts'].includes(target) ? target : 'home';

  function applyView() {
    $$('[data-panel]').forEach(p => p.classList.toggle('active', p.dataset.panel === view));
    $$('[data-view]').forEach(a => a.classList.toggle('active', a.dataset.view === view || (view === 'community' && a.dataset.view === (target === 'artists' || target.startsWith('artist/') ? 'artists' : 'profile'))));
    if (view === 'search' && target === 'search') setTimeout(() => $('#searchInput').focus(), 50);
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Accessibility focus routing
    const heading = $(`section[data-panel="${view}"] h1`) || $(`section[data-panel="${view}"] h2`);
    if (heading && typeof heading.focus === 'function') {
      heading.focus();
    }
  }

  const supportsViewTransitions = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (supportsViewTransitions) {
    document.startViewTransition(() => applyView());
  } else {
    applyView();
  }
}

function theme(t) {
  state.theme = t;
  document.documentElement.dataset.theme = t;
  $('#themeToggle').textContent = t === 'dark' ? 'SWITCH TO LIGHT' : 'SWITCH TO DARK';
  document.querySelector('meta[name="theme-color"]').content = t === 'dark' ? '#11130f' : '#f1eee2';
  save();
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const { action, id, name, index, dir, direction } = btn.dataset;
  switch (action) {
    case 'play':
      playTrack(id);
      break;
    case 'playnext':
      playNext(id);
      break;
    case 'info':
      openTrackInfo(id);
      break;
    case 'queue':
      addQueue(id);
      break;
    case 'like':
      toggleLike(id);
      break;
    case 'addtoset': {
      pendingSetTrack = id;
      if (!Object.keys(state.playlists).length) {
        location.hash = 'library';
        setTimeout(() => $('#playlistName')?.focus(), 120);
        announce('Create a set first.');
        break;
      }
      $('#dialogPlaylistSelect').innerHTML = Object.keys(state.playlists).map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join('');
      $('#addToSetDialog').showModal();
      break;
    }
    case 'playq':
      playIndex(+index);
      break;
    case 'moveq': {
      const idx = +index;
      const targetIdx = idx + (+dir);
      if (targetIdx < 0 || targetIdx >= state.queue.length) break;
      const [item] = state.queue.splice(idx, 1);
      state.queue.splice(targetIdx, 0, item);
      if (state.current === idx) state.current = targetIdx;
      else if (idx < state.current && targetIdx >= state.current) state.current--;
      else if (idx > state.current && targetIdx <= state.current) state.current++;
      render();
      prepareStandby();
      save();
      break;
    }
    case 'removeq': {
      const i = +index;
      if (state.queue.length === 1) break;
      const wasCurrent = i === state.current;
      state.queue.splice(i, 1);
      if (i < state.current) state.current--;
      else if (state.current >= state.queue.length) state.current = 0;
      if (wasCurrent) loadTrack(!active.paused);
      else { render(); prepareStandby(); save(); }
      break;
    }
    case 'playset': {
      const ids = (state.playlists[name] || []).filter(byId);
      if (ids.length) {
        state.queue = [...ids];
        state.current = 0;
        loadTrack(true);
      }
      break;
    }
    case 'queueset': {
      const ids = (state.playlists[name] || []).filter(byId);
      state.queue.push(...ids);
      render();
      prepareStandby();
      save();
      announce(`${ids.length} track${ids.length === 1 ? '' : 's'} added to Up Next.`);
      break;
    }
    case 'shareset':
      shareSet(name);
      break;
    case 'renameset': {
      const nextName = prompt('New set name', name)?.trim();
      if (!nextName || nextName === name) break;
      if (state.playlists[nextName]) {
        announce('A set with that name already exists.');
        break;
      }
      state.playlists[nextName] = state.playlists[name];
      delete state.playlists[name];
      render();
      save();
      break;
    }
    case 'deleteset':
      if (confirm(`Delete the set “${name}”?`)) {
        delete state.playlists[name];
        render();
        save();
      }
      break;
    case 'moveset': {
      const list = state.playlists[name], i = +index, j = i + (+direction);
      if (!list || j < 0 || j >= list.length) break;
      [list[i], list[j]] = [list[j], list[i]];
      render();
      save();
      break;
    }
    case 'removefromset':
      state.playlists[name]?.splice(+index, 1);
      render();
      save();
      break;
  }
});

$('#playBtn').onclick = () => {
  if (active.paused) {
    active.play().then(() => ensureAudioContext()).catch(() => {});
  } else {
    active.pause();
  }
};
$('#nextBtn').onclick = () => next();
$('#prevBtn').onclick = previous;
$('#skipBackBtn').onclick = () => skipAudio(-10);
$('#skipFwdBtn').onclick = () => skipAudio(10);
$('#speedBtn').onclick = cyclePlaybackSpeed;
$('#nowLikeBtn').onclick = () => toggleLike(current().id);
$('#nowInfoBtn').onclick = () => openTrackInfo(current().id);

$('#playFeatured').onclick = () => {
  state.queue = tracks.map(t => t.id);
  state.current = 0;
  loadTrack(true);
};
$('#shuffleFeatured').onclick = () => {
  state.queue = tracks.map(t => t.id);
  state.shuffle = true;
  state.current = Math.floor(Math.random() * state.queue.length);
  loadTrack(true);
};
$('#shuffleBtn').onclick = () => {
  state.shuffle = !state.shuffle;
  render();
  prepareStandby();
  save();
};
$('#repeatBtn').onclick = () => {
  state.repeat = state.repeat === 'off' ? 'all' : state.repeat === 'all' ? 'one' : 'off';
  render();
  prepareStandby();
  save();
};
$('#clearQueue').onclick = () => {
  state.queue = [current().id];
  state.current = 0;
  render();
  prepareStandby();
  save();
};
$('#jumpNowPlaying').onclick = jumpToNowPlaying;
$('#clearState').onclick = () => {
  if (confirm('Reset only your music likes, sets, queue and player preferences?')) {
    localStorage.removeItem(storeKey);
    location.reload();
  }
};
$('#clearAllState').onclick = () => {
  if (confirm('Reset all local Fuse Music data, including the music collection and community preview?')) {
    localStorage.removeItem(storeKey);
    localStorage.removeItem('fuse-community-preview-v1');
    location.reload();
  }
};

$('#themeToggle').onclick = () => theme(state.theme === 'dark' ? 'light' : 'dark');
$('#volume').oninput = e => {
  state.volume = +e.target.value;
  if (state.volume > 0) lastAudibleVolume = state.volume;
  active.volume = state.volume;
  $('#muteBtn').textContent = state.volume === 0 ? 'MUTED' : 'VOL';
  updatePlayer();
  save();
};
$('#muteBtn').onclick = () => {
  if (state.volume > 0) {
    lastAudibleVolume = state.volume;
    state.volume = 0;
  } else {
    state.volume = lastAudibleVolume || 0.78;
  }
  $('#volume').value = state.volume;
  active.volume = state.volume;
  updatePlayer();
  save();
};

const seek = $('#seek');
const seekTooltip = $('#seekTooltip');
seek.oninput = e => {
  if (Number.isFinite(active.duration)) {
    active.currentTime = (+e.target.value / 1000) * active.duration;
  }
  updateSeekA11y();
  drawWaveform();
};
seek.onmousemove = e => {
  const rect = seek.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const dur = Number.isFinite(active.duration) ? active.duration : 22;
  seekTooltip.textContent = fmt(pct * dur);
  seekTooltip.style.left = `${pct * 100}%`;
  seekTooltip.classList.add('show');
};
seek.onmouseleave = () => seekTooltip.classList.remove('show');

// Sound Shaping & EQ Dialog Bindings
const openSoundDialog = () => {
  ensureAudioContext();
  applyEqSettings();
  updateCrossfadeUI();
  applyPitch();
  const crackleToggle = $('#crackleToggle');
  if (crackleToggle) crackleToggle.checked = Boolean(state.crackle?.enabled);
  const crackleVol = $('#crackleVolume');
  if (crackleVol) crackleVol.value = state.crackle?.volume || 0.15;
  const crackleVal = $('#crackleVolVal');
  if (crackleVal) crackleVal.textContent = `${Math.round((state.crackle?.volume || 0.15) * 100)}%`;

  // Visualizer mode pills
  $$('#vizModePills button').forEach(b => {
    const isActive = b.dataset.viz === (state.vizMode || 'orbital');
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', String(isActive));
  });

  // Crossfade curve pills
  $$('#curvePills button').forEach(b => {
    const isActive = b.dataset.curve === (state.crossfadeCurve || 'equal-power');
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', String(isActive));
  });

  // Soundbed inputs
  const dToggle = $('#drone432Toggle');
  if (dToggle) dToggle.checked = Boolean(state.soundbed?.drone432);
  const dVol = $('#drone432Vol');
  if (dVol) dVol.value = state.soundbed?.drone432Vol || 0.08;

  const bToggle = $('#binauralToggle');
  if (bToggle) bToggle.checked = Boolean(state.soundbed?.binaural);
  const bVol = $('#binauralVol');
  if (bVol) bVol.value = state.soundbed?.binauralVol || 0.08;

  const rToggle = $('#rainBedToggle');
  if (rToggle) rToggle.checked = Boolean(state.soundbed?.rainBed);
  const rVol = $('#rainBedVol');
  if (rVol) rVol.value = state.soundbed?.rainBedVol || 0.08;

  $('#soundDialog').showModal();
};

const soundBtn = $('#soundShapingBtn');
if (soundBtn) soundBtn.onclick = openSoundDialog;
const topSoundBtn = $('#topSoundBtn');
if (topSoundBtn) topSoundBtn.onclick = openSoundDialog;

const eqBassInput = $('#eqBass');
if (eqBassInput) {
  eqBassInput.oninput = e => {
    state.eq.bass = +e.target.value;
    state.eq.preset = 'Custom';
    applyEqSettings();
    save();
  };
}
const eqMidInput = $('#eqMid');
if (eqMidInput) {
  eqMidInput.oninput = e => {
    state.eq.mid = +e.target.value;
    state.eq.preset = 'Custom';
    applyEqSettings();
    save();
  };
}
const eqTrebleInput = $('#eqTreble');
if (eqTrebleInput) {
  eqTrebleInput.oninput = e => {
    state.eq.treble = +e.target.value;
    state.eq.preset = 'Custom';
    applyEqSettings();
    save();
  };
}

document.addEventListener('click', e => {
  const presetBtn = e.target.closest('.eq-presets button');
  if (presetBtn) {
    const presetName = presetBtn.dataset.eqPreset;
    if (eqPresets[presetName]) {
      state.eq = { ...eqPresets[presetName], preset: presetName };
      applyEqSettings();
      save();
      announce(`EQ preset: ${presetName}`);
    }
    return;
  }

  const crossfadeBtn = e.target.closest('#crossfadePills button');
  if (crossfadeBtn) {
    state.crossfade = +crossfadeBtn.dataset.crossfade;
    updateCrossfadeUI();
    save();
    announce(`Crossfade blend: ${state.crossfade}s`);
    return;
  }

  const vizBtn = e.target.closest('#vizModePills button');
  if (vizBtn) {
    state.vizMode = vizBtn.dataset.viz;
    $$('#vizModePills button').forEach(b => {
      const isActive = b === vizBtn;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });
    save();
    announce(`Visualizer harmonic mode: ${vizBtn.textContent}`);
    return;
  }

  const curveBtn = e.target.closest('#curvePills button');
  if (curveBtn) {
    state.crossfadeCurve = curveBtn.dataset.curve;
    $$('#curvePills button').forEach(b => {
      const isActive = b === curveBtn;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });
    save();
    announce(`Crossfade curve: ${curveBtn.textContent}`);
    return;
  }

  const printCueBtn = e.target.closest('[data-action="printcue"]');
  if (printCueBtn) {
    const setName = printCueBtn.dataset.name;
    if (setName) openCueCard(setName);
    return;
  }

  const sleepOptionBtn = e.target.closest('#sleepOptions button');
  if (sleepOptionBtn) {
    setSleepMode(sleepOptionBtn.dataset.sleep);
    return;
  }

  const linerNotesBtn = e.target.closest('[data-action="linernotes"]');
  if (linerNotesBtn) {
    const setName = linerNotesBtn.dataset.name;
    if (setName && state.playlists[setName]) {
      currentLinerNotesSet = setName;
      const titleEl = $('#linerNotesTitle');
      if (titleEl) titleEl.textContent = `Set: ${setName} — Liner Notes`;
      const txtEl = $('#linerNotesText');
      if (txtEl) txtEl.value = state.linerNotes[setName] || '';
      $('#linerNotesDialog')?.showModal();
    }
    return;
  }

  const smartOptBtn = e.target.closest('.smart-option-btn');
  if (smartOptBtn) {
    generateSmartSet(smartOptBtn.dataset.smart);
    return;
  }

  const stationPill = e.target.closest('.station-pill');
  if (stationPill) {
    tuneStation(stationPill.dataset.station);
    return;
  }
});

// Feature 26: Pitch bend & jog nudge controls
const pitchSlider = $('#pitchSlider');
if (pitchSlider) {
  pitchSlider.oninput = e => {
    state.pitch = Number(e.target.value);
    applyPitch();
    save();
  };
}
const resetPitchBtn = $('#resetPitchBtn');
if (resetPitchBtn) {
  resetPitchBtn.onclick = () => {
    state.pitch = 0;
    applyPitch();
    save();
    announce('Pitch bend reset to 0%');
  };
}
const pitchLockToggle = $('#pitchLockToggle');
if (pitchLockToggle) {
  pitchLockToggle.onchange = e => {
    state.pitchLock = e.target.checked;
    applyPitch();
    save();
    announce(state.pitchLock ? 'Preserve pitch enabled (time-stretch).' : 'Analog vinyl pitch drop mode.');
  };
}
const nudgeDownBtn = $('#nudgeDownBtn');
if (nudgeDownBtn) {
  nudgeDownBtn.addEventListener('mousedown', () => nudgePitch(-0.04));
  nudgeDownBtn.addEventListener('mouseup', releaseNudge);
  nudgeDownBtn.addEventListener('mouseleave', releaseNudge);
  nudgeDownBtn.addEventListener('touchstart', e => { e.preventDefault(); nudgePitch(-0.04); }, { passive: false });
  nudgeDownBtn.addEventListener('touchend', releaseNudge);
}
const nudgeUpBtn = $('#nudgeUpBtn');
if (nudgeUpBtn) {
  nudgeUpBtn.addEventListener('mousedown', () => nudgePitch(0.04));
  nudgeUpBtn.addEventListener('mouseup', releaseNudge);
  nudgeUpBtn.addEventListener('mouseleave', releaseNudge);
  nudgeUpBtn.addEventListener('touchstart', e => { e.preventDefault(); nudgePitch(0.04); }, { passive: false });
  nudgeUpBtn.addEventListener('touchend', releaseNudge);
}

// Feature 24: A/B Audio Comparison Tool
function openAbCompare() {
  const currentTrack = current();
  const titleA = $('#abTitleA');
  if (titleA) titleA.textContent = currentTrack.title;
  const artistA = $('#abArtistA');
  if (artistA) artistA.textContent = `${currentTrack.artist} · ${currentTrack.album}`;
  const bpmA = $('#abBpmA');
  if (bpmA) bpmA.textContent = `${currentTrack.bpm} BPM`;

  const selectB = $('#abSelectB');
  if (selectB) {
    selectB.innerHTML = tracks
      .filter(t => t.id !== currentTrack.id)
      .map(t => `<option value="${t.id}">${esc(t.title)} — ${esc(t.artist)} (${t.bpm} BPM)</option>`)
      .join('');
    updateAbTrackB();
  }
  abActiveSource = 'A';
  $('#slotA')?.classList.add('active');
  $('#slotB')?.classList.remove('active');
  const ind = $('#abActiveIndicator');
  if (ind) ind.textContent = 'LISTENING TO: SOURCE A (LIVE)';
  $('#abCompareDialog')?.showModal();
}

function updateAbTrackB() {
  const selectB = $('#abSelectB');
  if (!selectB) return;
  const trackB = byId(selectB.value);
  if (!trackB) return;
  const artistB = $('#abArtistB');
  if (artistB) artistB.textContent = `${trackB.artist} · ${trackB.album}`;
  const bpmB = $('#abBpmB');
  if (bpmB) bpmB.textContent = `${trackB.bpm} BPM`;
}

function toggleAbCut() {
  const trackA = current();
  const selectB = $('#abSelectB');
  const trackB = selectB ? byId(selectB.value) : null;
  if (!trackB) return;

  const currentRatio = (Number.isFinite(active.currentTime) && Number.isFinite(active.duration) && active.duration > 0)
    ? (active.currentTime / active.duration)
    : 0;

  if (abActiveSource === 'A') {
    abActiveSource = 'B';
    $('#slotA')?.classList.remove('active');
    $('#slotB')?.classList.add('active');
    const ind = $('#abActiveIndicator');
    if (ind) ind.textContent = `LISTENING TO: SOURCE B (${trackB.title})`;

    active.src = trackB.src;
    active.onloadedmetadata = () => {
      active.currentTime = (active.duration || 22) * currentRatio;
      active.play().then(() => ensureAudioContext()).catch(() => {});
      active.onloadedmetadata = null;
    };
  } else {
    abActiveSource = 'A';
    $('#slotA')?.classList.add('active');
    $('#slotB')?.classList.remove('active');
    const ind = $('#abActiveIndicator');
    if (ind) ind.textContent = `LISTENING TO: SOURCE A (${trackA.title})`;

    active.src = trackA.src;
    active.onloadedmetadata = () => {
      active.currentTime = (active.duration || 22) * currentRatio;
      active.play().then(() => ensureAudioContext()).catch(() => {});
      active.onloadedmetadata = null;
    };
  }
}

const topAbBtn = $('#topAbBtn');
if (topAbBtn) topAbBtn.onclick = openAbCompare;

const toggleAbBtn = $('#toggleAbBtn');
if (toggleAbBtn) toggleAbBtn.onclick = toggleAbCut;

const abSelectB = $('#abSelectB');
if (abSelectB) abSelectB.onchange = updateAbTrackB;

const abDialog = $('#abCompareDialog');
if (abDialog) {
  abDialog.addEventListener('close', () => {
    if (abActiveSource === 'B') {
      abActiveSource = 'A';
      const trackA = current();
      const currentRatio = (Number.isFinite(active.currentTime) && Number.isFinite(active.duration) && active.duration > 0)
        ? (active.currentTime / active.duration)
        : 0;
      active.src = trackA.src;
      active.onloadedmetadata = () => {
        active.currentTime = (active.duration || 22) * currentRatio;
        active.play().then(() => ensureAudioContext()).catch(() => {});
        active.onloadedmetadata = null;
      };
    }
  });
}

// Feature 25: Smart Set Generator
function generateSmartSet(type) {
  let name = '';
  let ids = [];
  if (type === 'tempo-rise') {
    name = 'Smart Set: Tempo Ascent Arc';
    const sorted = [...tracks].sort((a, b) => a.bpm - b.bpm);
    ids = sorted.filter(t => t.bpm >= 80 && t.bpm <= 145).slice(0, 10).map(t => t.id);
  } else if (type === 'wind-down') {
    name = 'Smart Set: Evening Wind-Down';
    const calm = tracks.filter(t => ['calm', 'reflective', 'warm', 'chill', 'gentle'].some(m => (t.mood || '').toLowerCase().includes(m)));
    ids = calm.sort((a, b) => b.bpm - a.bpm).slice(0, 10).map(t => t.id);
  } else if (type === 'deep-focus') {
    name = 'Smart Set: Deep Focus Flow';
    const focus = tracks.filter(t => ['cinematic', 'ambient', 'lo-fi', 'neo-classical', 'piano'].some(g => `${t.genre} ${t.subgenre}`.toLowerCase().includes(g)));
    ids = focus.slice(0, 12).map(t => t.id);
  } else if (type === 'high-rush') {
    name = 'Smart Set: High Energy Peak';
    const rush = tracks.filter(t => t.bpm >= 125);
    ids = rush.slice(0, 10).map(t => t.id);
  }
  if (!ids.length) ids = tracks.slice(0, 10).map(t => t.id);

  state.playlists[name] = ids;
  save();
  render();
  $('#smartSetDialog')?.close();
  announce(`Created "${name}" with ${ids.length} cuts!`);
}

const smartSetBtn = $('#smartSetBtn');
if (smartSetBtn) {
  smartSetBtn.onclick = () => $('#smartSetDialog')?.showModal();
}

// Feature 21/Stations: Curated Frequencies
const STATIONS = {
  'surry-hills': {
    name: 'Surry Hills Midnight',
    filter: t => t.bpm >= 65 && t.bpm <= 95 && ['neo-soul', 'jazz', 'lo-fi', 'chill'].some(k => `${t.genre} ${t.subgenre} ${t.mood}`.toLowerCase().includes(k))
  },
  'golden-hour': {
    name: 'Golden Neon',
    filter: t => t.bpm >= 95 && t.bpm <= 120 && ['electronic', 'electropop', 'warm', 'groove'].some(k => `${t.genre} ${t.subgenre} ${t.mood}`.toLowerCase().includes(k))
  },
  'acoustic-cellar': {
    name: 'Acoustic Cellar',
    filter: t => ['acoustic', 'guitar', 'folk', 'piano', 'neo-classical'].some(k => `${t.genre} ${t.subgenre}`.toLowerCase().includes(k))
  },
  'subterranean': {
    name: 'Subterranean Wave',
    filter: t => t.bpm >= 120 && ['post-punk', 'wave', 'techno', 'dark', 'driving'].some(k => `${t.genre} ${t.subgenre} ${t.mood}`.toLowerCase().includes(k))
  },
  'deep-focus': {
    name: 'Deep Focus Flow',
    filter: t => ['ambient', 'minimal', 'cinematic', 'piano'].some(k => `${t.genre} ${t.subgenre}`.toLowerCase().includes(k))
  }
};

function tuneStation(stationId) {
  const station = STATIONS[stationId];
  if (!station) return;
  activeStation = stationId;
  const matchingTracks = tracks.filter(station.filter);
  const queueIds = matchingTracks.length ? matchingTracks.map(t => t.id) : tracks.slice(0, 12).map(t => t.id);
  state.queue = queueIds;
  state.current = 0;
  $$('.station-pill').forEach(btn => {
    const isActive = btn.dataset.station === stationId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  playTrack(state.queue[0]);
  announce(`Tuned frequency: ${station.name} (${queueIds.length} cuts)`);
  save();
  render();
}

// Feature 28: Multi-track Batch Operations Toolbar
document.addEventListener('change', e => {
  if (e.target.classList.contains('item-select')) {
    const id = e.target.dataset.id;
    if (!id) return;
    if (e.target.checked) selectedTrackIds.add(id);
    else selectedTrackIds.delete(id);
    updateBatchBar();
    $$(`.item-select[data-id="${id}"]`).forEach(cb => { cb.checked = e.target.checked; });
  }
});

const batchQueueBtn = $('#batchQueueBtn');
if (batchQueueBtn) {
  batchQueueBtn.onclick = () => {
    let added = 0;
    for (const id of selectedTrackIds) {
      if (!state.queue.includes(id)) {
        state.queue.push(id);
        added++;
      }
    }
    const count = selectedTrackIds.size;
    selectedTrackIds.clear();
    updateBatchBar();
    render();
    save();
    announce(`Added ${count} cuts to queue (${added} new).`);
  };
}

const batchLikeBtn = $('#batchLikeBtn');
if (batchLikeBtn) {
  batchLikeBtn.onclick = () => {
    let added = 0;
    for (const id of selectedTrackIds) {
      if (!state.liked.includes(id)) {
        state.liked.push(id);
        added++;
      }
    }
    const count = selectedTrackIds.size;
    selectedTrackIds.clear();
    updateBatchBar();
    render();
    save();
    announce(`Saved ${count} cuts to your shelf.`);
  };
}

const batchSetBtn = $('#batchSetBtn');
if (batchSetBtn) {
  batchSetBtn.onclick = () => {
    const defaultName = `Curated Set ${Object.keys(state.playlists).length + 1}`;
    const setName = prompt('Name for this curated set:', defaultName);
    if (!setName || !setName.trim()) return;
    const cleanName = setName.trim();
    state.playlists[cleanName] = Array.from(selectedTrackIds);
    const count = selectedTrackIds.size;
    selectedTrackIds.clear();
    updateBatchBar();
    render();
    save();
    announce(`Created set "${cleanName}" with ${count} cuts.`);
  };
}

const batchClearBtn = $('#batchClearBtn');
if (batchClearBtn) {
  batchClearBtn.onclick = () => {
    selectedTrackIds.clear();
    updateBatchBar();
    $$('.item-select').forEach(cb => { cb.checked = false; });
  };
}

// Feature 23: Liner notes
const saveLinerNotesBtn = $('#saveLinerNotesBtn');
if (saveLinerNotesBtn) {
  saveLinerNotesBtn.onclick = () => {
    if (!currentLinerNotesSet) return;
    const txt = $('#linerNotesText')?.value.trim();
    if (txt) {
      state.linerNotes[currentLinerNotesSet] = txt;
    } else {
      delete state.linerNotes[currentLinerNotesSet];
    }
    save();
    render();
    $('#linerNotesDialog')?.close();
    announce(`Liner notes saved for "${currentLinerNotesSet}".`);
  };
}

// Feature 30: AAA Contrast Mode
const topContrastBtn = $('#topContrastBtn');
if (topContrastBtn) {
  topContrastBtn.onclick = () => {
    state.contrast = state.contrast === 'high' ? 'normal' : 'high';
    applyContrast();
    save();
    announce(`High-contrast AAA mode: ${state.contrast === 'high' ? 'ON' : 'OFF'}`);
  };
}

// Feature 22: Interactive Sonic Atlas
function initAtlas() {
  const canvas = $('#atlasCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const clusters = [
    { id: 'lofi', name: 'Lo-Fi Beat', x: 180, y: 110, color: '#f3c969', bpm: '72 - 90 BPM', vibe: 'Warm tape hiss & MPC swing', desc: 'Analog dust, muted Rhodes chords, and head-nod grooves for midnight focus.' },
    { id: 'ambient-el', name: 'Ambient Electronic', x: 360, y: 90, color: '#68d8d6', bpm: '90 - 118 BPM', vibe: 'Ethereal synth drift', desc: 'Modulated analog filters, lush reverbs, and floating arpeggios.' },
    { id: 'piano', name: 'Neo-Classical & Piano', x: 540, y: 80, color: '#d8b4e2', bpm: '68 - 100 BPM', vibe: 'Felted hammer dynamics', desc: 'Intimate felt piano recordings, cello resonances, and poignant chordal movements.' },
    { id: 'cinema', name: 'Cinematic Ambient', x: 740, y: 120, color: '#70a9a1', bpm: '62 - 88 BPM', vibe: 'Wide-screen sonic horizons', desc: 'Sub-bass drones, orchestral swells, and evocative atmospheric storytelling.' },
    { id: 'jazz', name: 'Neo-Soul & Jazz', x: 160, y: 260, color: '#e07a5f', bpm: '78 - 105 BPM', vibe: 'Syncopated velvet warmth', desc: 'Upright bass walks, brushed snares, and lush 7th and 9th chord voicings.' },
    { id: 'acoustic', name: 'Acoustic Chill & Guitar', x: 340, y: 230, color: '#81b29a', bpm: '82 - 110 BPM', vibe: 'Fingerpicked cedar warmth', desc: 'Steel string shimmer, room microphones, and relaxed wooden overtones.' },
    { id: 'folk', name: 'Indie Rock & Folk', x: 520, y: 220, color: '#f2cc8f', bpm: '100 - 132 BPM', vibe: 'Raw melodic hooks', desc: 'Jangle guitars, driving live drum grooves, and energetic basement dynamics.' },
    { id: 'wave', name: 'Post-Punk & Wave', x: 720, y: 240, color: '#e76f51', bpm: '122 - 150 BPM', vibe: 'Angular driving basslines', desc: 'Cold chorused guitars, motorik drums, and moody analog synth lines.' },
    { id: 'hiphop', name: 'Midnight Hip-Hop', x: 260, y: 350, color: '#e29578', bpm: '84 - 102 BPM', vibe: 'Boom-bap punch & deep 808s', desc: 'Crisp snares, soul chops, and weighty low-end for night drives.' },
    { id: 'techno', name: 'Deep Electronic & Techno', x: 620, y: 340, color: '#4ea8de', bpm: '124 - 144 BPM', vibe: 'Hypnotic modular pulse', desc: 'Four-on-the-floor kick drums, resonant acid sequences, and warehouse spatiality.' }
  ];

  const links = [
    [0, 1], [1, 2], [2, 3],
    [0, 4], [4, 5], [5, 6], [6, 7],
    [4, 8], [8, 9], [6, 9], [7, 9],
    [1, 5], [2, 6], [3, 7]
  ];

  let hoveredCluster = null;
  let selectedCluster = null;
  let mouseX = -100, mouseY = -100;
  let animPhase = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animPhase += 0.03;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 40; x < canvas.width; x += 60) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 30; y < canvas.height; y += 50) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    links.forEach(([i, j]) => {
      const a = clusters[i], b = clusters[j];
      const isHighlighted = (hoveredCluster === a || hoveredCluster === b);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = isHighlighted ? 'rgba(235, 237, 233, 0.5)' : 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = isHighlighted ? 2 : 1;
      if (isHighlighted) ctx.setLineDash([4, 4]);
      else ctx.setLineDash([]);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    clusters.forEach(c => {
      const isHovered = (hoveredCluster === c);
      const isSelected = (selectedCluster === c);
      const pulse = Math.sin(animPhase + c.x * 0.01) * 2;
      const radius = (isHovered || isSelected ? 12 : 7) + (active.paused ? 0 : pulse);

      const grad = ctx.createRadialGradient(c.x, c.y, 2, c.x, c.y, radius * 3);
      grad.addColorStop(0, c.color + (isHovered ? 'bb' : '55'));
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(c.x, c.y, radius * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(c.x, c.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#ffffff' : c.color;
      ctx.fill();
      ctx.strokeStyle = '#11130f';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.font = isHovered || isSelected ? 'bold 11px system-ui, sans-serif' : '10px system-ui, sans-serif';
      ctx.fillStyle = isHovered || isSelected ? '#ffffff' : 'rgba(235, 237, 233, 0.7)';
      ctx.textAlign = 'center';
      ctx.fillText(c.name, c.x, c.y + radius + 14);
    });

    requestAnimationFrame(draw);
  }

  function getClusterAt(x, y) {
    return clusters.find(c => {
      const dx = c.x - x, dy = c.y - y;
      return Math.sqrt(dx * dx + dy * dy) <= 32;
    }) || null;
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    mouseX = (e.clientX - rect.left) * scaleX;
    mouseY = (e.clientY - rect.top) * scaleY;
    hoveredCluster = getClusterAt(mouseX, mouseY);
    canvas.style.cursor = hoveredCluster ? 'pointer' : 'default';
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredCluster = null;
    mouseX = -100; mouseY = -100;
  });

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;
    const clicked = getClusterAt(clickX, clickY);
    if (clicked) {
      selectedCluster = clicked;
      const genreEl = $('#atlasGenre');
      if (genreEl) genreEl.textContent = `${clicked.name.toUpperCase()} · ${clicked.bpm}`;
      const titleEl = $('#atlasTitle');
      if (titleEl) titleEl.textContent = clicked.vibe;
      const descEl = $('#atlasDesc');
      if (descEl) descEl.textContent = clicked.desc;
      const playBtn = $('#atlasPlayBtn');
      if (playBtn) {
        playBtn.style.display = 'inline-block';
        playBtn.onclick = () => {
          const match = tracks.find(t => `${t.genre} ${t.subgenre}`.toLowerCase().includes(clicked.name.toLowerCase().split('&')[0].trim()));
          if (match) {
            playTrack(match.id);
            announce(`Playing ${match.title} from ${clicked.name} constellation`);
          }
        };
      }
    }
  });

  draw();
}

const crackleToggleEl = $('#crackleToggle');
if (crackleToggleEl) {
  crackleToggleEl.onchange = e => {
    ensureAudioContext();
    state.crackle.enabled = e.target.checked;
    updateCrackleState();
    save();
    announce(state.crackle.enabled ? 'Analog vinyl crackle enabled.' : 'Analog crackle disabled.');
  };
}

const crackleVolEl = $('#crackleVolume');
if (crackleVolEl) {
  crackleVolEl.oninput = e => {
    state.crackle.volume = +e.target.value;
    $('#crackleVolVal').textContent = `${Math.round(state.crackle.volume * 100)}%`;
    updateCrackleState();
    save();
  };
}

// Feature 38: Tape Studio Drone & Binaural Soundbed controls
const droneToggle = $('#drone432Toggle');
if (droneToggle) {
  droneToggle.onchange = e => {
    ensureAudioContext();
    state.soundbed.drone432 = e.target.checked;
    updateSoundbedState();
    save();
    announce(state.soundbed.drone432 ? '432Hz Calm Drone activated.' : '432Hz Drone disabled.');
  };
}
const droneVol = $('#drone432Vol');
if (droneVol) {
  droneVol.oninput = e => {
    state.soundbed.drone432Vol = Number(e.target.value);
    updateSoundbedState();
    save();
  };
}

const binauralToggle = $('#binauralToggle');
if (binauralToggle) {
  binauralToggle.onchange = e => {
    ensureAudioContext();
    state.soundbed.binaural = e.target.checked;
    updateSoundbedState();
    save();
    announce(state.soundbed.binaural ? '10Hz Alpha Focus Beat activated.' : 'Binaural beat disabled.');
  };
}
const binauralVol = $('#binauralVol');
if (binauralVol) {
  binauralVol.oninput = e => {
    state.soundbed.binauralVol = Number(e.target.value);
    updateSoundbedState();
    save();
  };
}

const rainBedToggle = $('#rainBedToggle');
if (rainBedToggle) {
  rainBedToggle.onchange = e => {
    ensureAudioContext();
    state.soundbed.rainBed = e.target.checked;
    updateSoundbedState();
    save();
    announce(state.soundbed.rainBed ? 'Analog Rain Bed activated.' : 'Rain bed disabled.');
  };
}
const rainBedVol = $('#rainBedVol');
if (rainBedVol) {
  rainBedVol.oninput = e => {
    state.soundbed.rainBedVol = Number(e.target.value);
    updateSoundbedState();
    save();
  };
}

// Feature 37: Printable Vinyl Cue Sheets & Cassette J-Cards
function openCueCard(setName) {
  const ids = state.playlists[setName] || [];
  if (!ids.length) {
    announce('Add tracks to this set before printing a cue card.');
    return;
  }
  const setTracks = ids.map(byId).filter(Boolean);
  let totalSec = 0;
  setTracks.forEach(t => {
    const parts = (t.duration || '0:00').split(':').map(Number);
    if (parts.length === 2) totalSec += parts[0] * 60 + parts[1];
  });
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;

  const half = Math.ceil(setTracks.length / 2);
  const sideA = setTracks.slice(0, half);
  const sideB = setTracks.slice(half);

  const notes = state.linerNotes && state.linerNotes[setName] ? state.linerNotes[setName] : 'Archived in the Fuse Music listening room repository, Surry Hills.';

  const renderTable = (list, offset = 0) => `
    <table class="cue-table">
      <thead>
        <tr>
          <th>#</th>
          <th>TITLE</th>
          <th>ARTIST</th>
          <th>GENRE</th>
          <th>BPM</th>
          <th>TIME</th>
        </tr>
      </thead>
      <tbody>
        ${list.map((t, idx) => `
          <tr>
            <td>${String(offset + idx + 1).padStart(2, '0')}</td>
            <td><strong>${esc(t.title)}</strong></td>
            <td>${esc(t.artist)}</td>
            <td>${esc(t.genre)}</td>
            <td>${t.bpm}</td>
            <td>${t.duration}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  const html = `
    <div class="cue-card-sheet">
      <div class="cue-header">
        <div>
          <span class="cue-tag">FUSE MUSIC · ARCHIVAL CUE CARD &amp; J-CARD</span>
          <h2 class="cue-title">${esc(setName)}</h2>
          <p class="cue-meta">${setTracks.length} CUTS · TOTAL ESTIMATED RUNNING TIME: ${timeStr} · MASTER FORMAT: STEREO</p>
        </div>
        <div class="cue-stamp">
          <span>FM — SYD</span>
          <strong>499 CROWN ST</strong>
        </div>
      </div>

      <div class="cue-sides">
        <div class="cue-side">
          <h3>SIDE A <small>(${sideA.length} CUTS)</small></h3>
          ${renderTable(sideA, 0)}
        </div>
        ${sideB.length ? `
        <div class="cue-side">
          <h3>SIDE B <small>(${sideB.length} CUTS)</small></h3>
          ${renderTable(sideB, half)}
        </div>
        ` : ''}
      </div>

      <div class="cue-notes">
        <h4>CURATION &amp; LINER NOTES:</h4>
        <p>${esc(notes)}</p>
      </div>

      <div class="cue-footer">
        <span>FUSE MUSIC AUSTRALIA · WWW.FUSEMUSIC.COM.AU</span>
        <span>CASSETTE J-CARD &amp; 12" SLEEVE INSERT READY</span>
      </div>
    </div>
  `;

  const container = $('#cueCardPrintArea');
  if (container) container.innerHTML = html;
  $('#cueCardDialog')?.showModal();
}

const printCueBtn = $('#printCueBtn');
if (printCueBtn) {
  printCueBtn.onclick = () => window.print();
}

// Feature 32: Cinema / Immersive Listening Room Mode
function openCinemaMode() {
  isCinemaActive = true;
  const overlay = $('#cinemaOverlay');
  if (overlay) overlay.style.display = 'flex';
  updateCinemaUI();
  announce('Cinema Listening Room mode activated. Press ESC to exit.');
}

function closeCinemaMode() {
  isCinemaActive = false;
  const overlay = $('#cinemaOverlay');
  if (overlay) overlay.style.display = 'none';
}

function updateCinemaUI() {
  if (!isCinemaActive) return;
  const t = current();
  const title = $('#cinemaTitle');
  if (title) title.textContent = t.title;
  const artist = $('#cinemaArtist');
  if (artist) artist.textContent = `${t.artist} · ${t.album}`;
  const genreBpm = $('#cinemaGenreBpm');
  if (genreBpm) genreBpm.textContent = `${(t.genre || '').toUpperCase()} · ${t.bpm} BPM · ${t.year}`;
  const cover = $('#cinemaCover');
  if (cover) cover.src = t.cover;
  const bg = $('#cinemaBg');
  if (bg) bg.style.backgroundImage = `radial-gradient(circle at center, rgba(244,185,66,0.18) 0%, rgba(17,19,15,0.95) 75%), url("${t.cover}")`;
  const disc = $('#cinemaDisc');
  if (disc) {
    disc.classList.toggle('paused', active.paused);
    disc.classList.toggle('spinning', !active.paused);
  }
  const playBtn = $('#cinemaPlayBtn');
  if (playBtn) playBtn.textContent = active.paused ? '▶' : 'Ⅱ';
}

$('#topCinemaBtn')?.addEventListener('click', openCinemaMode);
$('#cinemaCloseBtn')?.addEventListener('click', closeCinemaMode);
$('#cinemaPlayBtn')?.addEventListener('click', () => $('#playBtn')?.click());
$('#cinemaPrevBtn')?.addEventListener('click', () => $('#prevBtn')?.click());
$('#cinemaNextBtn')?.addEventListener('click', () => $('#nextBtn')?.click());

// Feature 34: Turntable Platter Scratch & Jogwheel
function initTurntableScratch() {
  const disc = $('#heroArtDisc');
  if (!disc) return;

  let dragMoved = false;
  let startX = 0, startY = 0;
  let wasPlayingBeforeScratch = false;

  disc.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    const rect = disc.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    lastScratchAngle = Math.atan2(e.clientY - cy, e.clientX - cx);
    lastScratchTime = performance.now();
    startX = e.clientX;
    startY = e.clientY;
    dragMoved = false;
    isScratching = false;
    wasPlayingBeforeScratch = !active.paused;

    try { disc.setPointerCapture(e.pointerId); } catch {}
  });

  disc.addEventListener('pointermove', e => {
    if (!disc.hasPointerCapture(e.pointerId)) return;
    const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
    if (dist > 8 && !isScratching) {
      dragMoved = true;
      isScratching = true;
      if (wasPlayingBeforeScratch) {
        active.pause();
      }
    }
    if (!isScratching) return;

    e.preventDefault();
    const rect = disc.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const currentAngle = Math.atan2(e.clientY - cy, e.clientX - cx);
    let dAngle = currentAngle - lastScratchAngle;
    if (dAngle > Math.PI) dAngle -= 2 * Math.PI;
    if (dAngle < -Math.PI) dAngle += 2 * Math.PI;

    scratchCurrentAngle += dAngle * (180 / Math.PI);
    disc.style.transform = `rotate(${scratchCurrentAngle}deg)`;

    const scrubSeconds = (dAngle / (2 * Math.PI)) * 1.5;
    if (Number.isFinite(active.duration) && active.duration > 0) {
      active.currentTime = Math.max(0, Math.min(active.duration, active.currentTime + scrubSeconds));
      drawWaveform();
      $('#elapsed').textContent = fmt(active.currentTime);
    }

    lastScratchAngle = currentAngle;
    lastScratchTime = performance.now();
  });

  const onPointerUp = e => {
    if (!disc.hasPointerCapture(e.pointerId)) return;
    try { disc.releasePointerCapture(e.pointerId); } catch {}
    if (isScratching) {
      disc.style.transform = '';
      applyPitch();
      if (wasPlayingBeforeScratch) {
        active.play().catch(() => {});
        updatePlayer();
      }
      setTimeout(() => { isScratching = false; }, 50);
    }
  };

  disc.addEventListener('pointerup', onPointerUp);
  disc.addEventListener('pointercancel', onPointerUp);
}

// Feature 31: Spotlight Command Palette
const COMMAND_ACTIONS = [
  { id: 'play_pause', title: 'Play / Pause Current Cut', shortcut: 'Space', tags: 'playback audio resume stop', run: () => $('#playBtn')?.click() },
  { id: 'next', title: 'Next Cut in Running Order', shortcut: '→', tags: 'skip forward', run: () => next() },
  { id: 'prev', title: 'Previous Cut', shortcut: '←', tags: 'back restart', run: () => previous() },
  { id: 'cinema', title: 'Cinema / Immersive Listening Room Mode', shortcut: 'Cinema', tags: 'fullscreen visualizer room view', run: () => openCinemaMode() },
  { id: 'vault', title: 'Offline Audio Vault & Cache Manager', shortcut: 'Vault', tags: 'cache download offline storage pwa', run: () => openCacheVault() },
  { id: 'contrast', title: 'Toggle WCAG AAA High-Contrast Mode', shortcut: 'AAA', tags: 'accessibility contrast visual', run: () => $('#topContrastBtn')?.click() },
  { id: 'sound', title: 'Acoustic Lab & 3-Band Parametric EQ', shortcut: 'E', tags: 'equalizer bass treble pitch tube', run: () => openSoundDialog() },
  { id: 'ab', title: 'Instant A/B Cut Reference Player', shortcut: 'A/B', tags: 'compare audio mastering dynamic', run: () => openAbCompare() },
  { id: 'smartset', title: 'Harmonic Smart Set Curator', shortcut: 'Magic', tags: 'generate playlist tempo arc focus', run: () => $('#smartSetBtn')?.click() },
  { id: 'sleep', title: 'Sleep Timer & Auto-Off', shortcut: 'Timer', tags: 'sleep bed auto stop power down', run: () => $('#sleepTimerBtn')?.click() },
  { id: 'shuffle', title: 'Shuffle Running Order', shortcut: 'S', tags: 'random surprise reorder', run: () => $('#shuffleBtn')?.click() },
  { id: 'repeat', title: 'Cycle Repeat Mode (Off / All / One)', shortcut: 'R', tags: 'loop repeat one', run: () => $('#repeatBtn')?.click() },
  { id: 'mute', title: 'Mute / Unmute Player Volume', shortcut: 'M', tags: 'volume sound silence quiet', run: () => $('#muteBtn')?.click() },
  { id: 'export_backup', title: 'Export Full Collection Backup (JSON)', shortcut: 'Backup', tags: 'save file download playlists', run: () => $('#exportCollection')?.click() },
  { id: 'export_diag', title: 'Export Audiophile Session Diagnostics Log', shortcut: 'Telemetry', tags: 'diagnostics stats audio report log', run: () => exportListeningSession() },
  { id: 'nav_home', title: 'Navigate: Listen (The Room / Featured)', shortcut: '#home', tags: 'goto home player', run: () => { location.hash = 'home'; } },
  { id: 'nav_search', title: 'Navigate: Find a Sound (Index & Syntax)', shortcut: '#search', tags: 'goto search query browse', run: () => { location.hash = 'search'; } },
  { id: 'nav_library', title: 'Navigate: Your Collection & Playlists', shortcut: '#library', tags: 'goto sets liked history', run: () => { location.hash = 'library'; } },
  { id: 'nav_queue', title: 'Navigate: Up Next / Running Order', shortcut: '#queue', tags: 'goto queue tracks next', run: () => { location.hash = 'queue'; } },
  { id: 'nav_artists', title: 'Navigate: 100 Artist Directory & Profiles', shortcut: '#artists', tags: 'goto artists roster singers bands', run: () => { location.hash = 'artists'; } },
  { id: 'nav_charts', title: 'Navigate: AU Top 50 (ARIA chart, official videos)', shortcut: '#charts', tags: 'goto charts top 50 australia aria music videos', run: () => { location.hash = 'charts'; } },
  { id: 'nav_about', title: 'Navigate: About & 499 Crown St Lounge', shortcut: '#about', tags: 'goto contact surry hills address info', run: () => { location.hash = 'about'; } }
];

let activeCommandList = [];

function openCommandPalette() {
  const dialog = $('#commandDialog');
  if (!dialog) return;
  commandSelectedIndex = 0;
  const input = $('#commandInput');
  if (input) input.value = '';
  renderCommandResults('');
  dialog.showModal();
  setTimeout(() => input?.focus(), 50);
}

function renderCommandResults(query) {
  const q = (query || '').trim().toLowerCase();
  const resultsEl = $('#commandResults');
  if (!resultsEl) return;

  const matchedActions = COMMAND_ACTIONS.filter(a => !q || a.title.toLowerCase().includes(q) || a.tags.toLowerCase().includes(q)).slice(0, 8);
  const matchedTracks = tracks.filter(t => !q || `${t.title} ${t.artist} ${t.album} ${t.genre}`.toLowerCase().includes(q)).slice(0, 6);

  activeCommandList = [
    ...matchedActions.map(a => ({ type: 'action', title: a.title, sub: a.shortcut, action: a.run })),
    ...matchedTracks.map(t => ({ type: 'track', title: `${t.title} — ${t.artist}`, sub: `${t.genre} · ${t.bpm} BPM`, cover: t.cover, action: () => playTrack(t.id) }))
  ];

  if (commandSelectedIndex >= activeCommandList.length) commandSelectedIndex = 0;

  if (!activeCommandList.length) {
    resultsEl.innerHTML = '<div class="command-empty">No matching commands or cuts found.</div>';
    return;
  }

  resultsEl.innerHTML = activeCommandList.map((item, idx) => `
    <div class="command-item ${idx === commandSelectedIndex ? 'selected' : ''}" data-cmd-index="${idx}" role="option" aria-selected="${idx === commandSelectedIndex}">
      ${item.cover ? `<img src="${item.cover}" alt="" class="cmd-thumb">` : `<span class="cmd-icon">${item.type === 'action' ? '⚡' : '♪'}</span>`}
      <div class="cmd-info">
        <strong>${esc(item.title)}</strong>
        <small>${esc(item.sub)}</small>
      </div>
      <kbd>${item.type === 'action' ? 'ACTION' : 'PLAY'}</kbd>
    </div>
  `).join('');

  const selectedEl = resultsEl.querySelector('.command-item.selected');
  if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
}

function executeSelectedCommand() {
  const item = activeCommandList[commandSelectedIndex];
  if (item && typeof item.action === 'function') {
    $('#commandDialog')?.close();
    item.action();
  }
}

$('#commandInput')?.addEventListener('input', e => {
  commandSelectedIndex = 0;
  renderCommandResults(e.target.value);
});

$('#commandInput')?.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (activeCommandList.length > 0) {
      commandSelectedIndex = (commandSelectedIndex + 1) % activeCommandList.length;
      renderCommandResults(e.target.value);
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (activeCommandList.length > 0) {
      commandSelectedIndex = (commandSelectedIndex - 1 + activeCommandList.length) % activeCommandList.length;
      renderCommandResults(e.target.value);
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    executeSelectedCommand();
  }
});

$('#commandResults')?.addEventListener('click', e => {
  const itemEl = e.target.closest('.command-item');
  if (itemEl) {
    const idx = Number(itemEl.dataset.cmdIndex);
    if (!isNaN(idx)) {
      commandSelectedIndex = idx;
      executeSelectedCommand();
    }
  }
});

$('#topSpotlightBtn')?.addEventListener('click', openCommandPalette);

// Feature 36: Offline Audio Vault & Cache Manager
const VAULT_CACHE_NAME = 'fuse-vault-v1';

async function updateVaultStats() {
  const cutsNum = $('#vaultCachedCuts');
  const sizeMb = $('#vaultStorageMb');
  const statusTxt = $('#vaultStatusText');
  if (statusTxt) statusTxt.textContent = navigator.onLine ? 'ONLINE' : 'OFFLINE';

  if (!('caches' in window)) {
    if (cutsNum) cutsNum.textContent = '0';
    if (sizeMb) sizeMb.textContent = 'N/A';
    return;
  }

  try {
    const cache = await caches.open(VAULT_CACHE_NAME);
    const keys = await cache.keys();
    const count = keys.length;
    if (cutsNum) cutsNum.textContent = String(count);
    if (sizeMb) sizeMb.textContent = `${(count * 2.3).toFixed(1)} MB`;
  } catch {
    if (cutsNum) cutsNum.textContent = '0';
  }
}

function openCacheVault() {
  updateVaultStats();
  $('#cacheVaultDialog')?.showModal();
}

async function preCacheAllTracks() {
  if (!('caches' in window)) {
    announce('Cache Storage API not supported in this browser.');
    return;
  }

  const progressBar = $('#vaultProgressFill');
  const msgEl = $('#vaultStatusMessage');
  const preCacheBtn = $('#preCacheAllBtn');
  if (preCacheBtn) preCacheBtn.disabled = true;

  try {
    const cache = await caches.open(VAULT_CACHE_NAME);
    let successCount = 0;

    for (let i = 0; i < tracks.length; i++) {
      const t = tracks[i];
      if (msgEl) msgEl.textContent = `Caching cut ${i + 1} of ${tracks.length}: ${t.title}...`;
      if (progressBar) progressBar.style.width = `${Math.round(((i + 1) / tracks.length) * 100)}%`;

      try {
        const response = await fetch(t.src, { mode: 'cors' });
        if (response.ok) {
          await cache.put(t.src, response);
          successCount++;
        }
      } catch {}
      await updateVaultStats();
    }

    if (msgEl) msgEl.textContent = `Vault synchronization complete! ${successCount} of ${tracks.length} cuts ready offline.`;
    announce(`Offline Vault: ${successCount} cuts cached!`);
  } catch (err) {
    if (msgEl) msgEl.textContent = 'Vault caching interrupted or failed.';
  } finally {
    if (preCacheBtn) preCacheBtn.disabled = false;
  }
}

async function purgeCacheVault() {
  if (!('caches' in window)) return;
  if (!confirm('Purge all offline cached audio cuts from the browser?')) return;
  try {
    await caches.delete(VAULT_CACHE_NAME);
    const progressBar = $('#vaultProgressFill');
    if (progressBar) progressBar.style.width = '0%';
    const msgEl = $('#vaultStatusMessage');
    if (msgEl) msgEl.textContent = 'Vault cache purged. Local cache space reclaimed.';
    await updateVaultStats();
    announce('Offline Vault cache purged.');
  } catch {}
}

$('#topVaultBtn')?.addEventListener('click', openCacheVault);
$('#preCacheAllBtn')?.addEventListener('click', preCacheAllTracks);
$('#purgeCacheBtn')?.addEventListener('click', purgeCacheVault);

// Feature 39: Alphabetical Fast Scrub Rail
function initAlphaRail() {
  const rail = $('#searchAlphaRail');
  if (!rail) return;
  rail.addEventListener('click', e => {
    const btn = e.target.closest('.alpha-btn');
    if (!btn) return;
    currentAlphaLetter = btn.dataset.letter || 'ALL';
    $$('#searchAlphaRail .alpha-btn').forEach(b => {
      const isActive = b === btn;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });
    render();
    announce(currentAlphaLetter === 'ALL' ? 'Showing all catalogue cuts' : `Catalogue filtered by letter: ${currentAlphaLetter}`);
  });
}

// Feature 40: Audiophile Engine Diagnostics & Session Export
function updateAudioDiagnostics() {
  const card = $('#audioDiagCard');
  if (!card) return;
  const srEl = $('#diagSampleRate');
  if (srEl) srEl.textContent = audioCtx ? `${audioCtx.sampleRate.toLocaleString()} Hz` : '48,000 Hz';

  const latEl = $('#diagLatency');
  if (latEl) {
    const lat = audioCtx && Number.isFinite(audioCtx.baseLatency) ? (audioCtx.baseLatency * 1000).toFixed(1) : '5.1';
    latEl.textContent = `~${lat} ms`;
  }

  const stEl = $('#diagState');
  if (stEl) stEl.textContent = audioCtx ? audioCtx.state.toUpperCase() : 'STANDBY';

  const ndEl = $('#diagNodes');
  if (ndEl) {
    let count = sourceNodeA ? 8 : 0;
    if (state.crackle?.enabled) count += 2;
    if (state.soundbed?.drone432) count += 2;
    if (state.soundbed?.binaural) count += 4;
    if (state.soundbed?.rainBed) count += 3;
    ndEl.textContent = `${count} CONNECTED`;
  }
}

function exportListeningSession() {
  const payload = {
    format: 'fuse-audiophile-session-telemetry',
    version: 1,
    exportedAt: new Date().toISOString(),
    sessionSeconds: state.stats?.totalSeconds || 0,
    cutsExploredCount: state.stats?.heardTracks?.length || 0,
    cutsExplored: (state.stats?.heardTracks || []).map(id => {
      const t = byId(id);
      return t ? { id: t.id, title: t.title, artist: t.artist, bpm: t.bpm, genre: t.genre } : { id };
    }),
    audioEngine: {
      sampleRate: audioCtx ? audioCtx.sampleRate : 48000,
      baseLatency: audioCtx && Number.isFinite(audioCtx.baseLatency) ? audioCtx.baseLatency : null,
      contextState: audioCtx ? audioCtx.state : 'uninitialized',
      equalizer: state.eq,
      crossfadeSeconds: state.crossfade,
      crossfadeCurve: state.crossfadeCurve,
      visualizerMode: state.vizMode,
      pitchBendPercent: state.pitch,
      pitchLock: state.pitchLock,
      vinylCrackle: state.crackle,
      soundbed: state.soundbed
    }
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `fuse-session-telemetry-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  announce('Audiophile session telemetry exported.');
}

$('#exportSessionBtn')?.addEventListener('click', exportListeningSession);

const sleepBtnEl = $('#sleepTimerBtn');
if (sleepBtnEl) {
  sleepBtnEl.onclick = () => {
    updateSleepTimerUI();
    $('#sleepTimerDialog').showModal();
  };
}

$('#searchInput').oninput = e => {
  searchText = e.target.value;
  render();
  if (location.hash !== '#search') location.hash = 'search';
};

$('#newPlaylist').onclick = () => {
  const name = $('#playlistName').value.trim();
  if (!name) {
    $('#playlistName').focus();
    return;
  }
  if (state.playlists[name]) {
    announce('A set with that name already exists.');
    return;
  }
  state.playlists[name] = [];
  $('#playlistName').value = '';
  render();
  $('#playlistSelect').value = name;
  save();
};
$('#addToPlaylist').onclick = () => {
  const name = $('#playlistSelect').value;
  if (!name) {
    $('#playlistName').focus();
    announce('Create a set first.');
    return;
  }
  const id = $('#playlistTrack').value;
  if (!state.playlists[name].includes(id)) {
    state.playlists[name].push(id);
    announce(`Added to ${name}.`);
  } else {
    announce('That track is already in this set.');
  }
  render();
  save();
};
$('#confirmAddToSet').onclick = e => {
  e.preventDefault();
  const name = $('#dialogPlaylistSelect').value;
  if (name && pendingSetTrack && !state.playlists[name].includes(pendingSetTrack)) {
    state.playlists[name].push(pendingSetTrack);
    save();
    render();
    announce(`Added to ${name}.`);
  }
  $('#addToSetDialog').close();
  pendingSetTrack = '';
};

$('#shortcutHelp').onclick = () => $('#shortcuts').showModal();

$('#playLiked').onclick = () => {
  const ids = state.liked.filter(byId);
  if (!ids.length) {
    announce('Save a track first.');
    return;
  }
  state.queue = [...ids];
  state.current = 0;
  loadTrack(true);
};
$('#shuffleLiked').onclick = () => {
  const ids = state.liked.filter(byId).sort(() => Math.random() - 0.5);
  if (!ids.length) {
    announce('Save a track first.');
    return;
  }
  state.queue = ids;
  state.current = 0;
  loadTrack(true);
};

const replayHistBtn = $('#replayHistory');
if (replayHistBtn) {
  replayHistBtn.onclick = () => {
    const ids = (state.history || []).map(h => h.id).filter(byId);
    if (!ids.length) {
      announce('No listening history yet.');
      return;
    }
    state.queue = [...ids];
    state.current = 0;
    loadTrack(true);
    announce(`Playing ${ids.length} recently played cuts.`);
  };
}
const clearHistBtn = $('#clearHistory');
if (clearHistBtn) {
  clearHistBtn.onclick = () => {
    if (confirm('Clear your local listening history?')) {
      state.history = [];
      save();
      render();
      announce('Listening history cleared.');
    }
  };
}

$('#copyPromptBtn').onclick = () => {
  const text = $('#infoPrompt').textContent;
  if (navigator.clipboard && text) {
    navigator.clipboard.writeText(text).then(() => {
      announce('Suno.ai style prompt copied to clipboard! 📋');
      $('#copyPromptBtn').textContent = 'COPIED! ✓';
      setTimeout(() => { $('#copyPromptBtn').textContent = 'COPY PROMPT 📋'; }, 2000);
    }).catch(() => {
      prompt('Suno.ai style prompt:', text);
    });
  } else {
    prompt('Suno.ai style prompt:', text);
  }
};

$('#exportCollection').onclick = () => {
  const community = localStorage.getItem('fuse-community-preview-v1');
  const payload = {
    format: 'fuse-music-backup',
    version: 1,
    exportedAt: new Date().toISOString(),
    music: state,
    community: community ? JSON.parse(community) : null
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }),
    url = URL.createObjectURL(blob),
    a = document.createElement('a');
  a.href = url;
  a.download = `fuse-music-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
};

$('#importCollection').onchange = async e => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    if (payload.format !== 'fuse-music-backup' || payload.version !== 1 || !payload.music || typeof payload.music !== 'object') {
      throw Error();
    }
    if (!confirm('Replace the local Fuse Music collection and community preview with this backup?')) return;
    localStorage.setItem(storeKey, JSON.stringify(payload.music));
    if (payload.community) localStorage.setItem('fuse-community-preview-v1', JSON.stringify(payload.community));
    location.reload();
  } catch {
    announce('That file is not a valid Fuse Music backup.');
  } finally {
    e.target.value = '';
  }
};

for (const el of [audioA, audioB]) {
  el.addEventListener('timeupdate', () => {
    if (el !== active) return;
    const nowSec = Math.floor(Date.now() / 1000);
    if (!el.paused && nowSec !== lastStatsSecond) {
      lastStatsSecond = nowSec;
      state.stats.totalSeconds = (state.stats.totalSeconds || 0) + 1;
    }
    $('#elapsed').textContent = fmt(el.currentTime);
    if (Number.isFinite(el.duration)) {
      $('#seek').value = Math.floor((el.currentTime / el.duration) * 1000);
      updateSeekA11y();
      drawWaveform();
      const fadeTrigger = state.crossfade ? Math.max(0.5, state.crossfade) : 0.52;
      if (state.repeat === 'one' && el.duration - el.currentTime < 0.12) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else if (el.duration - el.currentTime < fadeTrigger) {
        transition();
      }
    }
  });
  el.addEventListener('loadedmetadata', () => {
    if (el === active) {
      $('#duration').textContent = fmt(el.duration);
      updateSeekA11y();
      drawWaveform();
    }
  });
  el.addEventListener('play', () => {
    if (el === active) updatePlayer();
  });
  el.addEventListener('pause', () => {
    if (el === active) updatePlayer();
  });
  el.addEventListener('ended', () => {
    if (el === active && !fading) {
      if (sleepMode === 'track') {
        active.pause();
        setSleepMode('off');
        announce('End of cut reached. Room powered down.');
        return;
      }
      next(true);
    }
  });
}

document.addEventListener('pointerdown', () => {
  ensureAudioContext();
  if (standbyPrimed || !standby.src) return;
  standbyPrimed = true;
  standby.muted = true;
  standby.play().then(() => {
    standby.pause();
    standby.currentTime = 0;
    standby.muted = false;
  }).catch(() => {
    crossfadeAllowed = false;
    standby.muted = false;
  });
}, { once: true });

if ('mediaSession' in navigator) {
  const handlers = {
    play: () => active.play(),
    pause: () => active.pause(),
    previoustrack: previous,
    nexttrack: () => next(),
    seekto: d => {
      if (Number.isFinite(d.seekTime)) {
        active.currentTime = Math.min(active.duration || d.seekTime, Math.max(0, d.seekTime));
      }
    },
    seekbackward: d => {
      active.currentTime = Math.max(0, active.currentTime - (d.seekOffset || 10));
    },
    seekforward: d => {
      active.currentTime = Math.min(active.duration || Infinity, active.currentTime + (d.seekOffset || 10));
    }
  };
  for (const [action, handler] of Object.entries(handlers)) {
    try { navigator.mediaSession.setActionHandler(action, handler); } catch {}
  }
}

window.addEventListener('hashchange', route);
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openCommandPalette();
    return;
  }

  if (e.altKey || e.ctrlKey || e.metaKey) return;
  const tag = document.activeElement ? document.activeElement.tagName : '';
  const isEditing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(tag);
  const isAbOpen = Boolean($('#abCompareDialog')?.open);

  if (isAbOpen && (e.code === 'Space' || e.key === ' ') && tag !== 'BUTTON' && tag !== 'SELECT') {
    e.preventDefault();
    toggleAbCut();
    return;
  }

  const isAnyDialogOpen = Boolean(
    $('#shortcuts')?.open ||
    $('#trackInfoDialog')?.open ||
    $('#addToSetDialog')?.open ||
    $('#soundDialog')?.open ||
    $('#sleepTimerDialog')?.open ||
    $('#smartSetDialog')?.open ||
    $('#linerNotesDialog')?.open ||
    $('#commandDialog')?.open ||
    $('#cacheVaultDialog')?.open ||
    $('#cueCardDialog')?.open ||
    isAbOpen
  );

  // If inside input or modal dialog, let native actions (like Esc closing dialog) happen
  if (isEditing || isAnyDialogOpen) return;

  // If cinema mode is active and no modal dialog is open, Escape exits Cinema mode
  if (isCinemaActive && e.key === 'Escape') {
    e.preventDefault();
    closeCinemaMode();
    return;
  }

  const key = e.key.toLowerCase();
  if (e.code === 'Space') {
    if (tag !== 'BUTTON' && tag !== 'A') {
      e.preventDefault();
      $('#playBtn').click();
    }
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    next();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    previous();
  } else if (key === 'j') {
    e.preventDefault();
    skipAudio(-10);
  } else if (key === 'k') {
    e.preventDefault();
    skipAudio(10);
  } else if (key === 'm') {
    e.preventDefault();
    $('#muteBtn').click();
  } else if (key === 'l') {
    e.preventDefault();
    toggleLike(current().id);
  } else if (key === 'i') {
    e.preventDefault();
    openTrackInfo(current().id);
  } else if (key === 'e') {
    e.preventDefault();
    $('#soundShapingBtn')?.click();
  } else if (key === '[') {
    e.preventDefault();
    setPlaybackSpeed(0.8);
  } else if (key === ']') {
    e.preventDefault();
    setPlaybackSpeed(1.25);
  } else if (key === 's') {
    $('#shuffleBtn').click();
  } else if (key === 'r') {
    $('#repeatBtn').click();
  } else if (key === '/') {
    e.preventDefault();
    location.hash = 'search';
    setTimeout(() => $('#searchInput')?.focus(), 50);
  } else if (key === '?') {
    $('#shortcuts').showModal();
  }
});

// Enable keyboard activation on turntable disc
const discEl = document.getElementById('heroArtDisc');
if (discEl) {
  discEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      discEl.click();
    }
  });
}

// Click handlers for filter pills and turntable
document.addEventListener('click', e => {
  const pill = e.target.closest('.shelf-filters .filter-pill');
  if (pill) {
    currentGenre = pill.dataset.genre;
    $$('.shelf-filters .filter-pill').forEach(p => p.classList.toggle('active', p === pill));
    render();
    return;
  }

  const tempoPill = e.target.closest('#tempoFilters .filter-pill');
  if (tempoPill) {
    currentTempo = tempoPill.dataset.tempo;
    $$('#tempoFilters .filter-pill').forEach(p => p.classList.toggle('active', p === tempoPill));
    render();
    return;
  }

  const moodPill = e.target.closest('#moodFilters .filter-pill');
  if (moodPill) {
    currentMood = moodPill.dataset.mood;
    $$('#moodFilters .filter-pill').forEach(p => p.classList.toggle('active', p === moodPill));
    render();
    return;
  }

  const disc = e.target.closest('#heroArtDisc');
  if (disc) {
    if (isScratching) return;
    if (active.paused) {
      active.play().then(() => ensureAudioContext()).catch(() => {});
    } else {
      active.pause();
    }
    updatePlayer();
  }
});

// Public helpers
window.fusePlayTrack = playTrack;
window.fuseAddQueue = addQueue;
window.fusePlayNext = playNext;
window.fuseOpenTrackInfo = openTrackInfo;

fetch('artists.json').then(r => r.ok ? r.json() : []).then(list => {
  artistDirectory = Array.isArray(list) ? list : [];
  render();
}).catch(() => {});

theme(state.theme === 'light' ? 'light' : 'dark');
applyContrast();
$('#volume').value = state.volume;
active.src = current().src;
active.volume = state.volume;
applyPitch();
render();
prepareStandby();
route();
initVisualizer();
initTouchGestures();
initAtlas();
initAlphaRail();
initTurntableScratch();
drawWaveform();
updateAmbientAtmosphere(current());
updateCrossfadeUI();
updateAudioDiagnostics();
updateVaultStats();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
