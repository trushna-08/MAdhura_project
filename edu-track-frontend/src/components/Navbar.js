import React from "react";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#1D4ED8",
      color: "white",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>EduTrack</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
