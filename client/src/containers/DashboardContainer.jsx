import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import DoctorDashboard from "../components/Dashboard/DoctorDashboard";
import PatientDashboard from "../components/Dashboard/PatientDashboard";
import MetaComponent from "../components/Meta/MetaComponent";
import metaData from "../seeds/metaData";

const DashboardContainer = ({ user }) => {
  return (
    <>
      <MetaComponent
        title={metaData.home.title}
        description={metaData.home.description}
        keywords={metaData.home.keywords}
      />

      {user && user.userType === "doctor" ? (
        <DoctorDashboard />
      ) : (
        <PatientDashboard />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user || null,
});

export default connect(mapStateToProps, {})(DashboardContainer);
