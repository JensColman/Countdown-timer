/*jshint esversion: 6 */

// ---------------------- Serviceworker ---------------------- \\

// Hiermee kan de timer verder lopen als je geen internet meer hebt.
// Zie https://github.com/ireade/boilerplate-service-worker voor meer info.
if ("serviceWorker" in navigator) {
     // Gebruik een absolute path als je gebruik maakt van Github, anders werkt het niet! Zie https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e voor meer info.
     navigator.serviceWorker
          .register("/Countdown-timer/service-worker.js", {
               scope: "/Countdown-timer/"
          })
          .then(function(registration) {
               console.log("[serviceWorker] Registered. ");
               firebase.messaging().useServiceWorker(registration);
          })
          .catch(function(err) {
               console.log("[serviceWorker] Failed to register. ", err);
          });
}

// ---------------------- Firebase server ---------------------- \\

// Niet vergeten om de beveiliging van de database terug aan te zetten: https://firebase.google.com/docs/web/setup.

// Initialize Firebase.
var config = {
     apiKey: "AIzaSyDpyti5var4iXdnKG_EIpAZgTKQRnjFLps",
     authDomain: "countdown-timer-9db4d.firebaseapp.com",
     databaseURL: "https://countdown-timer-9db4d.firebaseio.com",
     projectId: "countdown-timer-9db4d",
     storageBucket: "countdown-timer-9db4d.appspot.com",
     messagingSenderId: "70274656018"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();


messaging.requestPermission().then(function() {
     console.log("[Firebase] Permission granted.");
     return messaging.getToken();
}).then(function(token) {
     console.log(token);
}).catch(function(err) {
     console.log(err);
});

messaging.onMessage(function(payload) {
     console.log("onMessage: ", payload);
});

// ---------------------- HTTP request ---------------------- \\

// Function to perform HTTP request
var get = function(url) {
     return new Promise(function(resolve, reject) {

          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
               if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                         var result = xhr.responseText;
                         result = JSON.parse(result);
                         resolve(result);
                    } else {
                         reject(xhr);
                    }
               }
          };

          xhr.open("GET", url, true);
          xhr.send();

     });
};

// // Hier kan je de externe link opvragen.
// get('https://api.nasa.gov/planetary/earth/imagery?api_key=fWfSMcDzyHfMuH3BW6jiIUBYaj3hKRyKBRTBqgEQ')
//   .then(function(response) {
//     // There is an issue with the image being pulled from the API, so using a different one instead.
//     document.getElementsByClassName('targetImage')[0].src = "https://api.nasa.gov/images/earth.png";
//
//   })
//   .catch(function(err) {
//     console.log("Error", err);
// });
