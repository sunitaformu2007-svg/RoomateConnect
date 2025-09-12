import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* ✅ Full width Navbar */}
      <Navbar />

      {/* ✅ Main content centered */}
      <main className="max-w-7xl mx-auto min-h-[calc(100vh-350px)] px-4">
        <Outlet />
      </main>

      {/* ✅ Full width Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
