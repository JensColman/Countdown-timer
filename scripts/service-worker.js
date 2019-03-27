// Applicatienaam, moet consistent blijven.
var APP_PREFIX = "CountdownTimer_";
// Cache version.
var VERSION = "Version_01";
// Cache naam + versie.
var cacheName = APP_PREFIX + VERSION;
// Aanduiden welke files er gecached moeten worden.
var cacheFiles = [
     "/Countdown-timer/",
     "/Countdown-timer/index.html",
	"/Countdown-timer/challenges.html",
	"/Countdown-timer/extraIdeas.html",
	"/Countdown-timer/usePoints.html",
	"/Countdown-timer/videoResources.html",
	"/Countdown-timer/scripts/",
	"/Countdown-timer/scripts/index.js",
	"/Countdown-timer/scripts/timer.js",
     "/Countdown-timer/styles/",
	"/Countdown-timer/styles/index.scss",
	"https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,700"
];


// Installeren van serviceworker.
self.addEventListener("install", function(e) {
	console.log("[serviceWorker] Installed");
	// De installatie zal moeten wachten tot dit is uitgevoerd.
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log("[serviceWorker] Caching cacheFiles " + cacheName);
               // Hier wordt alle files die opgegeven zijn in cacheFiles opgeslagen in de cache.
			return cache.addAll(cacheFiles);
		})
	);
});

// Activeren van serviceworker.
self.addEventListener("activate", function(e) {
	console.log("[serviceWorker] Activated");

     // Dit zorgt ervoor dat files van oude caches niet bewaard blijven.
     // e.waitUntil(
     //      // Hier worden alle keys en cache overlopen.
     //      caches.keys().then(function(cacheNames) {
     //           // Hier wordt er gelooped door de cacheNames om te zien of er geen verouderde bestanden bijzitten.
     //           return Promise.all(cacheNames.map(function(thisCacheName) {
     //                // Hier wordt nagekeken of er versies zijn die verschillen van de huidige cacheName.
     //                if (thisCacheName !== cacheName) {
     //                     console.log("[serviceWorker] Removing cached files from " + thisCacheName);
     //                     // Hier worden de caches verwijderd die niet overeenkomen met de huidige cacheName.
     //                     return caches.delete(thisCacheName);
     //                }
     //           }));
     //      })
     // );
});

// Fetching van serviceworker.
self.addEventListener("fetch", function(e) {
	console.log("[serviceWorker] Fetching ", e.request.url);
});
