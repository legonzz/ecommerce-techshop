import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQhVA9-ksAF7YDpCHZ9cQZ6rlifEZPTa8",
  authDomain: "codigo-gonzalo-linares.firebaseapp.com",
  databaseURL: "https://codigo-gonzalo-linares.firebaseio.com",
  projectId: "codigo-gonzalo-linares",
  storageBucket: "codigo-gonzalo-linares.appspot.com",
  messagingSenderId: "891799307669",
  appId: "1:891799307669:web:c1f2c54b100c214f9ca29c",
  measurementId: "G-4YR1VPX50P",
});

const auth = firebase.auth();

export { auth };
