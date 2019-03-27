// Applicatienaam, moet consistent blijven.
var APP_PREFIX = "CountdownTimer_";
// Cache version.
var VERSION = "Version_01";
// Cache naam + versie.
var cacheName = APP_PREFIX + VERSION;
// Aanduiden welke files er gecached moeten worden.
// Soms krijg ik een error in de console (Uncaught (in promise) TypeError: Request failed). Om dat op te lossen kan je de cacheFiles eens commenteren => opslaan => laden in het browser => commentatiëring wegdoen => opslaan => browser refreshen.
var cacheFiles = [
     "/Countdown-timer/",
     "/Countdown-timer/index.html",
	"/Countdown-timer/challenges.html",
	"/Countdown-timer/extraIdeas.html",
	"/Countdown-timer/usePoints.html",
	"/Countdown-timer/videoResources.html",
	"/Countdown-timer/scripts/index.js",
	"/Countdown-timer/scripts/timer.js",
	"/Countdown-timer/styles/index.css",
	"https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,700"
];

// Installeren van serviceworker.
// self.addEventListener("install", function(e) {
// 	console.log("[serviceWorker] Installed");
// 	// De installatie zal moeten wachten tot dit is uitgevoerd.
// 	e.waitUntil(
// 		caches.open(cacheName).then(function(cache) {
// 			console.log("[serviceWorker] Caching cacheFiles " + cacheName);
//                // Hier wordt alle files die opgegeven zijn in cacheFiles opgeslagen in de cache.
// 			return cache.addAll(cacheFiles);
// 		})
// 	);
// });

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil Delays the event until the Promise is resolved
    e.waitUntil(

    	// Open the cache
	    caches.open(cacheName).then(function(cache) {

	    	// Add all the default files to the cache
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
	    })
	); // end e.waitUntil
});

// Activeren van serviceworker.
// self.addEventListener("activate", function(e) {
// 	console.log("[serviceWorker] Activated");
//
//      // Dit zorgt ervoor dat files van oude caches niet bewaard blijven.
//      e.waitUntil(
//           // Hier worden alle keys en cache overlopen.
//           caches.keys().then(function(cacheNames) {
//                // Hier wordt er gelooped door de cacheNames om te zien of er geen verouderde bestanden bijzitten.
//                return Promise.all(cacheNames.map(function(thisCacheName) {
//                     // Hier wordt nagekeken of er versies zijn die verschillen van de huidige cacheName.
//                     if (thisCacheName !== cacheName) {
//                          console.log("[serviceWorker] Removing cached files from ", thisCacheName);
//                          // Hier worden de caches verwijderd die niet overeenkomen met de huidige cacheName.
//                          return caches.delete(thisCacheName);
//                     }
//                }));
//           })
//      );
// });

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(

    	// Get all the cache keys (cacheName)
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {

				// If a cached item is saved under a previous cacheName
				if (thisCacheName !== cacheName) {

					// Delete that cached file
					console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	); // end e.waitUntil

});

// Fetching van serviceworker.
// self.addEventListener("fetch", function(e) {
// 	console.log("[serviceWorker] Fetching ", e.request.url);
//      // e.respondWidth Responds to the fetch event.
//      e.respondWith(
//           // Check in cache for the request being made.
//           caches.match(e.request).then(function(response) {
//                // If the request is in the cache.
//                if (response) {
//                     console.log("[serviceWorker] Found in cache ", e.request.url);
//                     // Return the cached version.
//                     return response;
//                }
//                // If the request is NOT in the cache, fetch and cache.
//                var requestClone = e.request.clone();
//                fetch(requestClone).then(function(response) {
//                     if (!response) {
//                          console.log("[serviceWorker] No response from fetch");
//                          // Return the response.
//                          return response;
//                     }
//
//                     var responseClone = response.clone();
//                     //  Open the cache.
//                     caches.open(cacheName).then(function(cache) {
//                          cache.put(e.request, responseClone);
//                          return response;
//                     });
//                }).catch(function(err) {
//                     console.log("[serviceWorker] Error fetching & caching new data", err);
//                });
//           })
//      );
// });



self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] Fetch', e.request.url);

	// e.respondWidth Responds to the fetch event
	e.respondWith(

		// Check in cache for the request being made
		caches.match(e.request)


			.then(function(response) {

				// If the request is in the cache
				if ( response ) {
					console.log("[ServiceWorker] Found in Cache", e.request.url, response);
					// Return the cached version
					return response;
				}

				// If the request is NOT in the cache, fetch and cache

				var requestClone = e.request.clone();
				return fetch(requestClone)
					.then(function(response) {

						if ( !response ) {
							console.log("[ServiceWorker] No response from fetch ");
							return response;
						}

						var responseClone = response.clone();

						//  Open the cache
						caches.open(cacheName).then(function(cache) {

							// Put the fetched response in the cache
							cache.put(e.request, responseClone);
							console.log('[ServiceWorker] New Data Cached', e.request.url);

							// Return the response
							return response;

				        }); // end caches.open

					})
					.catch(function(err) {
						console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
					});


			}) // end caches.match(e.request)
	); // end e.respondWith
});
