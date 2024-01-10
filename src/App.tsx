import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { useFetchSchedules } from "./hooks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { schedules, loading } = useFetchSchedules();

  return (
    <>
      <Router>
        <Routes>
          <Navbar />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
