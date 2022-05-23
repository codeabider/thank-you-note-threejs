import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app"; // rollup bundle issue with ESM import

const firebaseConfig = {
  apiKey: "AIzaSyCu7B2oP1LBL_v1P4xrmqwHw3hdKIEHccc",
  authDomain: "blogs-1b95d.firebaseapp.com",
  databaseURL: "https://blogs-1b95d.firebaseio.com",
  projectId: "blogs-1b95d",
  storageBucket: "blogs-1b95d.appspot.com",
  messagingSenderId: "950805106509",
  appId: "1:950805106509:web:8463030183ceef419bb104",
  measurementId: "G-RK1VCX1L7Q",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export { auth, db, provider };
