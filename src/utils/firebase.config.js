import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-redux-1896c.firebaseapp.com",
  projectId: "react-redux-1896c",
  storageBucket: "react-redux-1896c.appspot.com",
  messagingSenderId: "454861889751",
  appId: "1:454861889751:web:fdb6cfbbea2633b81f9092"
});

export const auth = app.auth();
export default app;