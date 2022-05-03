import React, { useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { getBookings } from "../../redux/actions/booking";
import { connect } from "react-redux";
import { getTime } from "../../utils/utility";

const DoctorAppointments = ({ appointments, getBookings }) => {
  // console.log(appointments);
  return (
    <div className="appointments">
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
      <div className="appointments--header">Your Appointments</div>
      <table className="appointments__table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Slot Date(MM/DD/YY)</th>
            <th>Timings</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.bookingDate}</td>
                <td>{getTime(appointment.start, appointment.end)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appointments: state.bookings.appointments,
});

export default connect(mapStateToProps, { getBookings })(DoctorAppointments);
