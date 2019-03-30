/*jshint esversion: 6 */

importScripts("https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.2/firebase-messaging.js");

if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/Countdown-timer/service-worker.js')
          .then(function(registration) {
               console.log('Registration successful, scope is:', registration.scope);
          }).catch(function(err) {
               console.log('Service worker registration failed, error:', err);
          });
}

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

messaging.setBackgroundMessageHandler(function(payload) {
     const title = "Hello World";
     const options = {
          body: payload.data.status
     };
     return self.registration.showNotification(title, options);
});
