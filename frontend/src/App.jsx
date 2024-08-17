import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import WhatGPT3 from "./containers/skillRevive/WhatGPT3";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blogs from "./containers/blogs/Blog";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup/Signup";
import TogglePage from "./pages/toggle/TogglePage";
import Login from "./pages/login/LoginPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/toggle" element={<TogglePage />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <div className="App">
              <div className="gradient__bg">
                <Navbar />
                <Header />
              </div>
              {/* <Brand /> */}
              <WhatGPT3 />
              <Features />
              <Possibility />
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
