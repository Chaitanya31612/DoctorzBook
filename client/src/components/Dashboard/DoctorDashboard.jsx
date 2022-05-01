import React from "react";
import DashboardNavbar from "./DashboardNavbar";

const DoctorDashboard = () => {
  return (
    <div class="dashboard">
      <div className="dashboard__navbar">
        <DashboardNavbar links={["Appointments", "/appointments"]} />
      </div>
    </div>
  );
};

export default DoctorDashboard;
