import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
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
              </div>
              
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
