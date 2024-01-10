import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { useFetchSchedules } from "./hooks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import { MainHomePage } from "./Pages/MainHomePage/MainHomeStyles";

function App() {
  const { schedules, loading } = useFetchSchedules();
  if (false) {
    return <h1>Protected routes</h1>;
  } else {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/" element={<Navbar />} /> */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/main-home-page" element={<MainHomePage />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
