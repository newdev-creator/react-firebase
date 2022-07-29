import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzJS6I3jWYKW2t0m44Y-cega102Xdcn4A",
  authDomain: "react-redux-1896c.firebaseapp.com",
  projectId: "react-redux-1896c",
  storageBucket: "react-redux-1896c.appspot.com",
  messagingSenderId: "454861889751",
  appId: "1:454861889751:web:fdb6cfbbea2633b81f9092"
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;