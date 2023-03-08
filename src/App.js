import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

// CSS
import "./App.css";

// components
import MobileNavbar from "./components/MobileNavbar";

// pages
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <MobileNavbar />

        <Routes>
          <Route path="/projects/weatherapp/contact-us" element={<Contact />} />
          <Route path="/projects/weatherapp/search" element={<Search />} />
          <Route path="/projects/weatherapp" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
