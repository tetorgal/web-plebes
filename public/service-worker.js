const CACHE_NAME = 'offline-cache-v1';
const ASSETS_TO_CACHE = [
  '/',             // Main page
  '/logo.png',     // Logo image
  '/bg-photo.png', // Background photo image
  '/favicon.ico', // favicon for the tab icon
  "/service-1.jpg",
  "/service-2.jpg",
  "/service-3.jpg"
];

// Install event - caching specified assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).then(response => {
        // Cache JavaScript files dynamically
        if (event.request.url.includes('/_next/static/')) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return response;
      });
    })
  );
});
