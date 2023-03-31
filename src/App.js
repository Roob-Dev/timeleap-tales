import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
import YearEventsPage from "./YearEventsPage";
import Doodles from "./Doodles";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-content">
          <Doodles />
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/year-events" element={<YearEventsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
