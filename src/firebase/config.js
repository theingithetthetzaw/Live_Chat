// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCZBGI3bMH6uvlZRBdMeWzyBMG7zavPhL4",
  authDomain: "myproject-36cf5.firebaseapp.com",
  projectId: "myproject-36cf5",
  storageBucket: "myproject-36cf5.appspot.com",
  messagingSenderId: "546417778364",
  appId: "1:546417778364:web:8abcab79351fc0cdc3bab9"
};

  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let auth = firebase.auth();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,auth, timestamp}


 