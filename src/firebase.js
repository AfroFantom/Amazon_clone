import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu3DVi0YPSdLZ7w9DXe-v8IkvWw9T11MY",
  authDomain: "clone-e7e2c.firebaseapp.com",
  projectId: "clone-e7e2c",
  storageBucket: "clone-e7e2c.appspot.com",
  messagingSenderId: "311060238628",
  appId: "1:311060238628:web:48701ef65e41f266e723b1",
  measurementId: "G-25DMZMKWY1"
};

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };