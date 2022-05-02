import React from "react";
import DashboardNavbar from "./DashboardNavbar";

const PatientAppointments = () => {
  return (
    <div class="dashboard">
      <div className="dashboard__navbar">
        <DashboardNavbar
          links={[
            ["Doctors", "/dashboard"],
            ["Appointments", "/appointments"],
          ]}
        />
      </div>

      <div className="appointments">
        <div className="appointments--header">Your Appointments</div>
        <div className="appointments__table">table</div>
      </div>
    </div>
  );
};

export default PatientAppointments;
