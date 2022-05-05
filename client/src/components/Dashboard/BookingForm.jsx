import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { getBooking, bookSlot } from "../../redux/actions/booking";
import { getTime, hash } from "../../utils/utility";

const BookingForm = ({
  doctor,
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

  const bookingTimes = [
    [10, 11, true],
    [11, 12, true],
    [12, 13, true],
    [14, 15, true],
    [15, 16, true],
    [16, 17, true],
    [17, 18, true],
  ];

  const [available, setAvailable] = useState(bookingTimes);
  // console.log(available);

  // console.log("bookingsbyId", bookingsbyId);

  const [bookingLoading, setBookingLoading] = useState(true);

  useEffect(() => {
    for (let i = 0; i < available.length; i++) {
      if (
        bookingsbyId &&
        bookingsbyId.includes(
          hash(current.dateformat, available[i][0], available[i][1])
        )
      ) {
        available[i][2] = false;
      } else {
        available[i][2] = true;
      }
    }
    // console.log("heree change", available);
    const newAvailable = [...available];
    setAvailable(newAvailable);
    setBookingLoading(false);
    // console.log("after", available, bookingTimes);
  }, [bookingsbyId, bookSlot, current, bookingLoading]);

  const onChange = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const id = e.target.options[selectedIndex].getAttribute("data-key");
    setAvailableId(id);
    // console.log(e.target.options[selectedIndex].getAttribute("data-key"));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (!current.dateSelected) {
      swal({
        title: "Please select a date",
        icon: "warning",
      });
      return;
    }
    bookSlot(
      doctor._id,
      doctor.user_id,
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
            {!bookingLoading &&
              bookingsbyId &&
              available.map((slot, index) => (
                <option
                  key={index}
                  data-key={index}
                  value={`${slot[0]}:00 - ${slot[1]}:00`}
                  disabled={
                    !slot[2] ||
                    (slot[0] <= time && date === current.date) ||
                    date > current.date ||
                    month > current.month ||
                    year > current.year
                  }
                >
                  {getTime(slot[0], slot[1])}
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
