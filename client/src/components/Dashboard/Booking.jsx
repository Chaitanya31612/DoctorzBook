import React, { useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { getDoctor } from "../../redux/actions/doctor";
import { connect } from "react-redux";
import Preloader from "../Preloader/Preloader";
import Calender from "./Calender";
import BookingForm from "./BookingForm";
import { getBooking } from "../../redux/actions/booking";

const Booking = ({
  match,
  doctors: { doctorSelected, loading },
  getDoctor,
  getBooking,
}) => {
  useEffect(() => {
    getDoctor(match.params.id);
    getBooking(match.params.id);
  }, [getDoctor, getBooking]);

  const bookingTimes = [
    [10, 11, true],
    [11, 12, true],
    [12, 13, true],
    [14, 15, true],
    [15, 16, true],
    [16, 17, true],
    [17, 18, true],
  ];

  return (
    <div class="dashboard booking">
      <div className="dashboard__navbar">
        <DashboardNavbar
          links={[
            ["Doctors", "/dashboard"],
            ["Appointments", "/appointments"],
          ]}
        />
      </div>

      {loading || doctorSelected == null ? (
        <Preloader />
      ) : (
        <div className="booking__container center-content">
          <h1 className="booking__heading">{doctorSelected.hospitalName}</h1>
          <h2 className="booking__heading--2">{doctorSelected.doctorName}</h2>
          <div className="booking__specialization">
            {doctorSelected.specialization}
          </div>

          <div className="booking__content">
            {/* Calender */}
            <Calender />
            {/* Booking form */}
            {!loading && (
              <BookingForm
                doctorSelected={doctorSelected}
                bookingTimes={bookingTimes}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps, { getDoctor, getBooking })(Booking);
