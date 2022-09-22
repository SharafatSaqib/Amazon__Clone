import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8vAWZ3eZyOgTJ35lBbMJo_5OY03UZK38",
  authDomain: "clone-3e339.firebaseapp.com",
  projectId: "clone-3e339",
  storageBucket: "clone-3e339.appspot.com",
  messagingSenderId: "171215769128",
  appId: "1:171215769128:web:ecc18f11656ce30ee2af1d",
  measurementId: "G-0NJCFH6PQS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
