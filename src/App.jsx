import React from "react";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/landingPage/LandingPage";
import About from "./components/about/About";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<LandingPage />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
