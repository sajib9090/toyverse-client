import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-332px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
