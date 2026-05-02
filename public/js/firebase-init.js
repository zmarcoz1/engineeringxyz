// firebase-init.js
// Initializes Firebase for use in the lead form. Replace the configuration
// values below with your Firebase project's settings from the Firebase
// console. See README_SETUP.md for detailed setup instructions.

// TODO: Replace these placeholder values with your actual Firebase config.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase only once
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Expose the Firestore database instance for use in other scripts
const db = firebase.firestore();