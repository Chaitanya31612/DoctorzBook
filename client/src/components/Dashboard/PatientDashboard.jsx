import React, { useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { getDoctors } from "../../redux/actions/doctor";
import { connect } from "react-redux";
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";

const PatientDashboard = ({
  doctors: { loading, doctorsList },
  getDoctors,
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    getDoctors();
  }, [getDoctors]);

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

      <div className="dashboard__container">
        <h1 className="dashboard__heading">Dashboard</h1>
        {/* sort section */}
        <div className="dashboard__sort">
          <div>List of doctors</div>
          <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Sort by distance
          </label>
        </div>

        {/* cards */}
        {loading ? (
          <Preloader />
        ) : (
          <div className="dashboard__cards">
            {doctorsList.length > 0 ? (
              doctorsList.map((doctor) => (
                <div className="dashboard__card">
                  <div className="dashboard__card--contents">
                    <h1 className="dashboard__card--title">
                      {doctor.hospitalName}
                    </h1>
                    <h2 className="dashboard__card--title">
                      {doctor.doctorName}
                    </h2>
                    <div className="dashboard__card--specialization">
                      {doctor.specialization}
                    </div>
                    <div className="dashboard__card--address">
                      <div className="dashboard__card--address-item">
                        {doctor.hospitalAddress}
                      </div>
                      <div className="dashboard__card--address-item">
                        {doctor.city}
                      </div>
                      <div className="dashboard__card--address-item">
                        {doctor.state}
                      </div>
                      <div className="dashboard__card--address-item">
                        {doctor.country}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/doctor/${doctor._id}`}
                    className="dashboard__card--bookbtn"
                  >
                    Book Appointment
                  </Link>
                </div>
              ))
            ) : (
              <h4>No Doctors Available</h4>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps, { getDoctors })(PatientDashboard);
