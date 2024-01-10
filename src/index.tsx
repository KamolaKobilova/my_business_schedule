import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebaseConfig } from "./firebaseConfig";
import "./index.css";
// import firebase from 'firebase/app';
// import 'firebase/auth';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
