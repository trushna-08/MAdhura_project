import React from "react";
import Navbar from "../components/Navbar";
import DashboardContent from "./DashboardContent";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Navbar />
      <DashboardContent />
      <Footer />
    </div>
  );
};

export default Dashboard;
