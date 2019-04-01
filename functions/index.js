/*jshint esversion: 6 */

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

exports.sendPostNotification = functions.database.ref('/posts/{postID}').onWrite(event => {
     // react to changes
});

const postID = event.params.postID;
const postTitle = event.data.val();

if (!postTitle) {
     return console.log(`Post ${postID} deleted.`);
}

const getDeviceTokensPromise = admin.database()
     .ref('device_ids')
     .once('value')
     .then(snapshots => {

          if (!snapshots) return console.log('No devices to send to.');

          // work with snapshots
     });


const payload = {
     notification: {
          title: `New Article: ${postTitle}`,
          body: 'Click to read article.',
          icon: 'https://mydomain.com/push-icon.png'
     }
};

snapshots.forEach(childSnapshot => {
     const token = childSnapshot.val();

     admin.messaging().sendToDevice(token, payload).then(response => {
          // handle response
     });
});

response.results.forEach(result => {
     const error = result.error;

     if (error) {
          console.error('Failed delivery to', token, error);

          if (error.code === 'messaging/invalid-registration-token' ||
               error.code === 'messaging/registration-token-not-registered') {

               childSnapshot.ref.remove();
               console.info('Was removed:', token);

          } else {
               console.info('Notification sent to', token);
          }

     }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
