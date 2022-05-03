import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDoctorByUserid } from "../../redux/actions/doctor";
import Preloader from "../Preloader/Preloader";
import Hospital from "../../assets/svgs/dashboard-hospital.svg";

const DoctorDashboard = ({ loading, doctor, getDoctorByUserid }) => {
  useEffect(() => {
    getDoctorByUserid();
  }, [getDoctorByUserid]);

  console.log(doctor);

  return (
    <>
      {loading || doctor == null ? (
        <Preloader />
      ) : (
        <>
          <div className="appointments--header" style={{ marginTop: "5rem" }}>
            Dashboard
          </div>
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
                    <span className="dashboard__card--label">City -{"  "}</span>
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
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  doctor: state.doctors.doctorSelected,
});

export default connect(mapStateToProps, { getDoctorByUserid })(DoctorDashboard);
