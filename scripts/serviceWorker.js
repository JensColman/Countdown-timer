// // Cache version
// var cacheName = "v1";
// // Aanduiden welke files er gecached moeten worden.
// var cacheFiles = [
//      "../scripts/",
//      "../scripts/index.js",
//      "../scripts/timer.js",
//      "../styles/index.scss",
//      "../index.html",
//      "../challenges.html",
//      "../extraIdeas.html",
//      "../usePoints.html",
//      "../videoResources.html",
//      "https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,700"
// ];

// Installeren van serviceworker.
self.addEventListener("install", function(e) {
     console.log("[serviceWorker] installed");
     // De installatie zal moeten wachten tot dit is uitgevoerd.
     // e.waitUntil(
     //      caches.open(cacheName).then(function(cache) {
     //           console.log("[serviceWorker] caching cacheFiles");
     //           return cache.addAll(cacheFiles);
     //      })
     // );
});

// Activeren van serviceworker.
self.addEventListener("activate", function(e) {
     console.log("[serviceWorker] activated");
});

// Fetching van serviceworker.
self.addEventListener("fetch", function(e) {
     console.log("[serviceWorker] fetching ", e.request.url);
});






//// Use a namespace to prevent pollution of the global namespace.
//var rli = rli || {};
//// Define application root object.
//rli.app = (function() {
//	"use strict";
//	var self = {};
//	self.makeXmlHttpRequest = function() {
//		// When "var" is removed from this line, an error is thrown:
//		// Uncaught ReferenceError: request is not defined.
//		var request = new XMLHttpRequest();
//		request.open("GET", "https://codepen.codes", true);
//		request.onload = function() {
//			if (this.status >= 200 && this.status < 400) {
//				// Success!
//				var data = JSON.parse(this.response);
//				console.log(data);
//			} else {
//				// We reached our target server, but it returned an error.
//				console.log("Error status not between 200 and 400.");
//			}
//		};
//
//		request.onerror = function(e) {
//			// There was a connection error of some sort.
//			console.log(e);
//		};
//		request.send();
//	};
//
//	self.onload = function() {
//		self.makeXmlHttpRequest();
//	};
//
//	self.start = function() {
//		// Define global exception handler.
//		window.onerror = function(message, file, line, col, error) {
//			console.log(message, "from", error.stack);
//		};
//	};
//
//	return self;
//})();
//
//// Start the application.
//rli.app.start();

// Zorgt ervoor dat ik AJAX request kan maken op een ander domain.
//var http_request;
//http_request = new XMLHttpRequest();
//http_request.onreadystatechange = function () { /* .. */ };
//http_request.open("POST", "https://codepen.codes");
//http_request.withCredentials = true;
//http_request.setRequestHeader("Content-Type", "application/json");
//http_request.send({ 'request': "authentication token" });
