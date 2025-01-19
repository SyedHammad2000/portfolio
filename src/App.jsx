import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import MyServices from "./pages/services/MyServices";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
