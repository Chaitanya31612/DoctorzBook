import React, { useState } from "react";
import { connect } from "react-redux";
import { getBooking, bookSlot } from "../../redux/actions/booking";

const BookingForm = ({
  doctor,
  bookingTimes,
  bookingsbyId,
  current,
  getBooking,
  bookSlot,
}) => {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const time = now.getHours();

  const [availableId, setAvailableId] = useState();

  let available = [...bookingTimes];

  for (let i = 0; i < available.length; i++) {
    let find = bookingsbyId.find((booking) => {
      if (
        booking.bookingDate === current.dateformat &&
        booking.start == available[i][0] &&
        booking.end == available[i][1]
      ) {
        return true;
      }
    });
    if (find) {
      available[i][2] = false;
    }
  }

  console.log(available);

  const onChange = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const id = e.target.options[selectedIndex].getAttribute("data-key");
    setAvailableId(id);
    console.log(e.target.options[selectedIndex].getAttribute("data-key"));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    bookSlot(
      doctor._id,
      current.dateformat,
      available[availableId][0],
      available[availableId][1]
    );
    getBooking(doctor._id);
  };

  return (
    <div className="booking__form">
      <h3 className="booking__form--heading">Make a Booking</h3>
      <div className="booking__form--group">
        <form onSubmit={(e) => onSubmit(e)}>
          <label className="booking__form--label">{"Start time"}</label>
          <select
            name="startTime"
            className="booking__form__input booking__form__input--select"
            onChange={(e) => onChange(e)}
          >
            <option>* Select Slot</option>
            {available.map((slot, index) => (
              <option
                key={index}
                data-key={index}
                value={`${slot[0]}:00 - ${slot[1]}:00`}
                disabled={
                  !slot[2] ||
                  (slot.start <= time && date === current.date) ||
                  date > current.date ||
                  month > current.month ||
                  year > current.year
                }
              >
                {slot[0]}:00 - {slot[1]}:00
              </option>
            ))}
          </select>
          <button type="submit" className="dashboard__card--bookbtn">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  doctor: state.doctors.doctorSelected,
  current: state.current,
  bookingsbyId: state.bookings.bookingsbyId,
});

export default connect(mapStateToProps, { getBooking, bookSlot })(BookingForm);
