import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Brand from "./components/brand/Brand";
import Header from "./containers/header/Header";
import Blogs from "./containers/blogs/Blog";
import Brand from "./components/brand/Brand";
import CTA from "./components/cta/CTA";
import Features from "./containers/features/Features";
import Login from "../src/pages/login/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      
        <Route
          path="/"
          element={
            <div className="App">
              <div className="gradient__bg">
                <Navbar />
                <Header />
              </div>
              <Brand />
              <Blogs />
              <Features />
              {/* <Brand /> */}
              <CTA />
              <Blogs />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
