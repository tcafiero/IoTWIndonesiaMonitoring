// This is the "Offline page" service worker

const CACHE = "pwabuilder-page";
// CODELAB: Add list of files to cache here.

const FILES_TO_CACHE = [
'/index.html',
'/global.css',
'/assets/css/style.css',
'/assets/css/ionicons.min.css',
'/assets/fonts/ionicons.eot',
'/assets/fonts/ionicons.svg',
'/assets/fonts/ionicons.ttf',
'/assets/fonts/ionicons.woff',
'/assets/fonts/ionicons.woff2',
'/assets/img/apple-touch-icon.png',
'/assets/img/favicon.png',
'/assets/img/logo.png',
'/assets/img/download.png',
'/assets/js/lib/base.js',
'/assets/js/lib/puck.js',
'/assets/js/lib/luxon-1.11.4.js',
'/assets/js/lib/bootstrap.min.js',
'/assets/js/lib/jquery-3.4.1.min.js',
'/assets/js/lib/popper.min.js',
'/assets/js/plugins/owl-carousel/owl.carousel.min.js',
'/build/bundle.css',
'/build/bundle.js'
];



// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
//const offlineFallbackPage = "offline.html";

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// If any fetch fails, it will show the offline page.

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
evt.respondWith(
    caches.open(CACHE).then((cache) => {
      return cache.match(evt.request)
          .then((response) => {
            return response || fetch(evt.request);
          });
    })
);
});

/*
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).catch(function (error) {
      // The following validates that the request was for a navigation to a new document
      if (
        event.request.destination !== "document" ||
        event.request.mode !== "navigate"
      ) {
        return;
      }
      console.error("[PWA Builder] Network request Failed. Serving offline page " + error);
      return caches.open(CACHE).then(function (cache) {
        return cache.match(offlineFallbackPage);
      });
    })
  );
});

*/

/*
// This is an event that can be fired from your page to tell the SW to update the offline page
self.addEventListener("refreshOffline", function () {
  const offlinePageRequest = new Request(offlineFallbackPage);

  return fetch(offlineFallbackPage).then(function (response) {
    return caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Offline page updated from refreshOffline event: " + response.url);
      return cache.put(offlinePageRequest, response);
    });
  });
});
*/
