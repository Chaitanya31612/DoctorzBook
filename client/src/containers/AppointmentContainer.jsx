import React from "react";
import { connect } from "react-redux";
import DoctorAppointments from "../components/Dashboard/DoctorAppointments";
import DoctorDashboard from "../components/Dashboard/DoctorDashboard";
import PatientAppointments from "../components/Dashboard/PatientAppointments";
import PatientDashboard from "../components/Dashboard/PatientDashboard";
import MetaComponent from "../components/Meta/MetaComponent";
import metaData from "../seeds/metaData";

const AppointmentContainer = ({ user }) => {
  return (
    <>
      <MetaComponent
        title={metaData.home.title}
        description={metaData.home.description}
        keywords={metaData.home.keywords}
      />
      <div className="container container--bg">
        {user && user.userType === "doctor" ? (
          <DoctorAppointments />
        ) : (
          <PatientAppointments />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user || null,
});

export default connect(mapStateToProps, {})(AppointmentContainer);
