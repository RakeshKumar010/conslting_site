import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Career from "../pages/Career";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
