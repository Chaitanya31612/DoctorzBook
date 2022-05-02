import React from "react";
import { connect } from "react-redux";
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
      <div className="container container--bg">
        {user && user.userType === "doctor" ? (
          <DoctorDashboard />
        ) : (
          <PatientDashboard />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user || null,
});

export default connect(mapStateToProps, {})(DashboardContainer);
