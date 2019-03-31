/*jshint esversion: 6 */

importScripts("https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.2/firebase-messaging.js");

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

// messaging.setBackgroundMessageHandler(function(payload) {
//      const title = "Hello World";
//      const options = {
//           body: payload.data.status
//      };
//      return self.registration.showNotification(title, options);
// });




// Fix de firebase door de route te wijzigen naar de root???
// Use the useServiceworker(<service worker registration>) method to pass in a custom service worker. This will still require you to have a valid service worker URL.
// Voor meer info, zie https://stackoverflow.com/questions/40673265/firebase-service-worker-not-found-while-using-gwt-404-error.
// https://stackoverflow.com/questions/41659970/firebase-change-the-location-of-the-service-worker
