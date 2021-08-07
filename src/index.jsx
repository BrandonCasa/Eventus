import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from "@react-firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyCRYFrKMQ8RDMZF51yrS2rfJAuxdwjJ3A4",
  authDomain: "eventus-2a71a.firebaseapp.com",
  projectId: "eventus-2a71a",
  storageBucket: "eventus-2a71a.appspot.com",
  messagingSenderId: "1028110222972",
  appId: "1:1028110222972:web:6477be3830e5751755ebf9",
  measurementId: "G-GXJ3RD62BY",
};

ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    <App />
  </FirebaseAuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
