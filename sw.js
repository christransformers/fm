// Fuse Music Service Worker — Offline Resilience & App Shell Caching
const CACHE_NAME = 'fuse-music-v4';
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './community.css',
  './app.js',
  './community.js',
  './artists.json',
  './site.webmanifest',
  './assets/brand/favicon.svg',
  './assets/brand/fuse-logo.svg',
  './assets/brand/turntable-slipmat.jpg',
  './assets/brand/listening-room-1.jpg',
  './assets/brand/listening-room-2.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Catalogue audio is served from this origin (assets/audio), so it is covered
  // by the same-origin cache-first handler below.
  // App shell and local static assets: Cache first, fall back to network, update cache in background
  if (event.request.method === 'GET' && url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => cached);

        if (cached) {
          event.waitUntil(fetchPromise);
          return cached;
        }
        return fetchPromise;
      })
    );
    return;
  }

  // Default network fetch
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
