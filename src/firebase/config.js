import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFUsxFK94UAWpnA-N41bNt_L4gKjr-ZO8",
    authDomain: "vue-blod-system.firebaseapp.com",
    projectId: "vue-blod-system",
    storageBucket: "vue-blod-system.appspot.com",
    messagingSenderId: "846977650902",
    appId: "1:846977650902:web:b9acdfde4255d2036e7977"
  };

  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let auth = firebase.auth();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,auth, timestamp}