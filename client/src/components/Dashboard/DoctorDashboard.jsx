import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDoctorByUserid } from "../../redux/actions/doctor";
import Preloader from "../Preloader/Preloader";
import Hospital from "../../assets/svgs/dashboard-hospital.svg";
import DashboardNavbar from "./DashboardNavbar";

const DoctorDashboard = ({
  doctors: { loading, doctorSelected: doctor },
  getDoctorByUserid,
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    window.location.href = "";
    setChecked(!checked);
  };

  useEffect(() => {
    getDoctorByUserid();
  }, [getDoctorByUserid]);

  console.log(doctor);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div class="dashboard">
            <div className="dashboard__navbar">
              <DashboardNavbar
                links={[
                  ["Dashboard", "/dashboard"],
                  ["Appointments", "/appointments"],
                ]}
              />
            </div>
          </div>
          <div className="appointments--header" style={{ marginTop: "5rem" }}>
            Dashboard
          </div>
          <div
            className="dashboard__sort"
            style={{
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            <input
              type="button"
              value="View Profile"
              onClick={handleChange}
              className="dashboard__card--bookbtn"
              style={{ marginRight: 0 }}
            />
          </div>
          {doctor ? (
            <div className="dashboard__cards">
              <div className="dashboard__card dashboard__card--profile">
                <img className="round-img" src={Hospital} alt="" />
                <div className="dashboard__card--contents">
                  <h1 className="dashboard__card--title">
                    <span className="dashboard__card--label">
                      Hospital Name -{"  "}
                    </span>
                    {doctor.hospitalName}
                  </h1>
                  <h2 className="dashboard__card--item">
                    <span className="dashboard__card--label">
                      Doctor Name -{"  "}
                    </span>
                    {doctor.doctorName}
                  </h2>
                  <div className="dashboard__card--item">
                    <span className="dashboard__card--label">
                      Specialization -{"  "}
                    </span>
                    {doctor.specialization}
                  </div>
                  <div className="dashboard__card--item">
                    <div className="dashboard__card--address-item">
                      <span className="dashboard__card--label">
                        Hospital Address -{"  "}
                      </span>
                      {doctor.hospitalAddress}
                    </div>
                    <div className="dashboard__card--item">
                      <span className="dashboard__card--label">
                        City -{"  "}
                      </span>
                      {doctor.city}
                    </div>
                    <div className="dashboard__card--item">
                      <span className="dashboard__card--label">
                        State -{"  "}
                      </span>
                      {doctor.state}
                    </div>
                    <div className="dashboard__card--item">
                      <span className="dashboard__card--label">
                        Country -{"  "}
                      </span>
                      {doctor.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps, { getDoctorByUserid })(DoctorDashboard);
