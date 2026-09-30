// ========================================
// KEYRADDIIN EDUCATION APP
// SERVICE WORKER
// ========================================

const CACHE_NAME = "keyraddiin-education-v2";


// ========================================
// APP FILES
// ========================================

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./assets/logo.png"
];


// ========================================
// INSTALL
// ========================================

self.addEventListener("install", function (event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(function (cache) {

                return cache.addAll(APP_FILES);

            })

    );

    // Activate the new version immediately
    self.skipWaiting();

});


// ========================================
// ACTIVATE
// ========================================

self.addEventListener("activate", function (event) {

    event.waitUntil(

        caches.keys()
            .then(function (cacheNames) {

                return Promise.all(

                    cacheNames.map(function (cacheName) {

                        if (cacheName !== CACHE_NAME) {

                            return caches.delete(cacheName);

                        }

                        return null;

                    })

                );

            })
            .then(function () {

                // Take control of the app immediately
                return self.clients.claim();

            })

    );

});


// ========================================
// FETCH
// ========================================

self.addEventListener("fetch", function (event) {

    event.respondWith(

        caches.match(event.request)
            .then(function (cachedResponse) {

                // Use cached file if available
                if (cachedResponse) {

                    return cachedResponse;

                }


                // Otherwise get the latest file
                return fetch(event.request)
                    .then(function (networkResponse) {

                        return networkResponse;

                    });

            })

            .catch(function () {

                // If offline and no cache exists
                return caches.match("./index.html");

            })

    );

});