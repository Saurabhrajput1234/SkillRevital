import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Brand from "./components/brand/Brand";
import Header from "./containers/header/Header";
import Blogs from "./containers/blogs/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      
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
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
