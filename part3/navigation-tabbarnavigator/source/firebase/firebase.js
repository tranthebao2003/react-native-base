import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
//ref = reference to a 'collection'
import {
  get,
  getDatabase,
  ref as firebaseDatabaseRef,
  set as firebaseSet,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB5jHdJUeqHTQS8ZLb_d3Gl4YI7BYF1Wn8",
  authDomain: "app-chat-618c7.firebaseapp.com",
  databaseURL: "https://app-chat-618c7-default-rtdb.firebaseio.com",
  projectId: "app-chat-618c7",
  storageBucket: "app-chat-618c7.appspot.com",
  messagingSenderId: "229511759823",
  appId: "1:229511759823:web:f4979b50af76e5483ab4ba",
  measurementId: "G-1RXHTHWK2F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();

export {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  firebaseSet,
  firebaseDatabaseRef
};
