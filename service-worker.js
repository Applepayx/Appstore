const CACHE_NAME = 'apple-store-pwa-cache-v1';
const urlsToCache = [
    './', // Cache the root
    './index.html', // Cache the main HTML file
    './css/styles.css', // Cache the CSS
    './js/main.js', // Cache the main JS file
    './images/icons/icon-512x512.png', // Cache the app icon
    './images/loading-image.png', // Cache the loading image
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch resources
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached file or fetch it from the network
                return response || fetch(event.request);
            })
    );
});

// Activate Service Worker and clean old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
        
