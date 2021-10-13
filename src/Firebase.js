import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQxQmuUhk1TxH1N3yUGCJuy5aiET5fHlc",
  authDomain: "tinder-clone-3dd8a.firebaseapp.com",
  projectId: "tinder-clone-3dd8a",
  storageBucket: "tinder-clone-3dd8a.appspot.com",
  messagingSenderId: "332962937374",
  appId: "1:332962937374:web:eb9a81d40513321f0c0c0f",
  measurementId: "G-2MPS498R3F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
