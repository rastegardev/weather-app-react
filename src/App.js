import React, { Component } from "react";
import { Navigate } from "react-router-dom";

// react router loading
import { Routes, Route, topbar } from "react-router-loading";

// CSS
import "./App.css";

// components
import MobileNavbar from "./components/MobileNavbar";

// pages
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

topbar.config({
  barColors: {
    0: "#008ae640",
    0.3: "#008ae681",
    1.0: "#008AE6",
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <MobileNavbar />

        <magicMouse />

        <Routes maxLoadingTime={100}>
          <Route
            path="/*"
            element={<Navigate to="/projects/weatherapp/404" />}
            loading
          />
          <Route path="/projects/weatherapp/404" element={<NotFound />} />
          <Route
            path="/projects/weatherapp/contact-us"
            element={<Contact />}
            loading
          />
          <Route
            path="/projects/weatherapp/search"
            element={<Search />}
            loading
          />
          <Route path="/projects/weatherapp" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
