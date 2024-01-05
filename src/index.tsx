import React from "react";
import ReactDOM from "react-dom";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
} from "react-router-dom";

import App from "./App";
import { MainHomePage } from "./Pages/MainHomePage/MainHomeStyles";
import SignIn from "./Pages/SignIn";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/main-home-page" element={<MainHomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
