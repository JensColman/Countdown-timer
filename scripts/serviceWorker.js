// Cache version
var cacheName = "v1";
// Aanduiden welke files er gecached moeten worden.
var cacheFiles = [
	"../scripts/",
	"../scripts/index.js",
	"../scripts/timer.js",
	"../styles/index.scss",
	"../index.html",
	"../challenges.html",
	"../extraIdeas.html",
	"../usePoints.html",
	"../videoResources.html",
	"https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,700"
];


// Installeren van serviceworker.
self.addEventListener("install", function(e) {
	console.log("[serviceWorker] installed");
	// De installatie zal moeten wachten tot dit is uitgevoerd.
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log("[serviceWorker] caching cacheFiles");
			return cache.addAll(cacheFiles);
		})
	);
});

// Activeren van serviceworker.
self.addEventListener("activate", function(e) {
	console.log("[serviceWorker] activated");
});

// Fetching van serviceworker.
self.addEventListener("fetch", function(e) {
	console.log("[serviceWorker] fetching ", e.request.url);
});
