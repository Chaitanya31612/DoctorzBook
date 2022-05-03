import React, { useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { getBookings, cancelBooking } from "../../redux/actions/booking";
import { connect } from "react-redux";
import { getTime } from "../../utils/utility";
import swal from "sweetalert";

const PatientAppointments = ({ appointments, getBookings, cancelBooking }) => {
  const getStatus = (date, start, end) => {
    let today = new Date();
    let time = today.getHours();
    let todaydate = today.getDate();
    // console.log(time, date, todaydate, start, end, date === todaydate);

    if (date < todaydate || (date === todaydate && time >= end)) {
      return { status: "Attended", clr: "green" };
    } else if (date === todaydate && time >= start && time < end) {
      return { status: "In Progress", clr: "blue" };
    } else {
      return { status: "Upcoming", clr: "orange" };
    }
  };

  // console.log(appointments);

  const buttonClick = (appointment) => {
    swal({
      title: "Are you sure?",
      text: "This will delete your appointment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        cancelBooking(
          appointment.bookingDate,
          appointment.start,
          appointment.end
        );
      }
    });
  };

  return (
    <div className="appointments">
      <div class="dashboard">
        <div className="dashboard__navbar">
          <DashboardNavbar
            links={[
              ["Doctors", "/dashboard"],
              ["Appointments", "/appointments"],
            ]}
          />
        </div>
      </div>
      <div className="appointments--header">Your Appointments</div>
      <table className="appointments__table appointments__table--w9">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Hospital Name</th>
            <th>Doctor Name</th>
            <th>Hospital Address</th>
            <th>City</th>
            <th>Date(MM/DD/YY)</th>
            <th>Timings</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{appointment.hospitalName}</td>
                <td>{appointment.doctorName}</td>
                <td>{appointment.hospitalAddress}</td>
                <td>{appointment.city}</td>
                <td>{appointment.bookingDate}</td>
                <td>{getTime(appointment.start, appointment.end)}</td>
                <Status
                  data={getStatus(
                    parseInt(appointment.bookingDate.substring(3, 5)),
                    appointment.start,
                    appointment.end
                  )}
                />
                <td>
                  <button
                    onClick={() => buttonClick(appointment)}
                    className="appointments__table--btn"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const Status = ({ data }) => {
  console.log(data);

  return <td style={{ color: data.clr }}>{data.status}</td>;
};

const mapStateToProps = (state) => ({
  appointments: state.bookings.appointments,
});

export default connect(mapStateToProps, { getBookings, cancelBooking })(
  PatientAppointments
);
