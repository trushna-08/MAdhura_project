import React from "react";
import Batches from "../components/Batches";
import Students from "../components/Students";

const DashboardContent = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Dashboard Title */}
      <h1 style={{
        textAlign: "center",
        color: "#1976d2",
        marginBottom: "20px",
        fontSize: "32px"
      }}>EduTrack Dashboard</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}>
        {/* Batches Card */}
        <div style={{
          flex: "1 1 400px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          transition: "transform 0.3s, box-shadow 0.3s",
          cursor: "pointer"
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; }}
        >
          <Batches />
        </div>

        {/* Students Card */}
        <div style={{
          flex: "1 1 400px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "20px", paddingBottom: "20px", minHeight: "80vh",
          transition: "transform 0.3s, box-shadow 0.3s",
          cursor: "pointer"
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; }}
        >
          <Students />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
