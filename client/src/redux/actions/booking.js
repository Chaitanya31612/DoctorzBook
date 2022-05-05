import axios from "axios";
import moment from "moment";
import swal from "sweetalert";

import {
  CLEAR_PROFILE,
  GET_APPOINTMENTS,
  GET_BOOKING,
} from "../ActionConstants";

// get booking for a doctor
export const getBooking = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getBooking/${id}`
    );

    dispatch({
      type: GET_BOOKING,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};

// getBookings for appointments
export const getBookings = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getBookings`
    );

    console.log(res);

    dispatch({
      type: GET_APPOINTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};

// book slots
export const bookSlot =
  (doctor_id, doctor_user_id, bookingDate, start, end) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const now = new Date();
      const time = now.getHours();
      if (moment(now).format("MM/DD/YY") == bookingDate && time >= start) {
        swal("Oops!", "You can't book an appointment in the past!", "error");
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/bookSlot`,
          {
            doctor_id,
            doctor_user_id,
            bookingDate,
            start,
            end,
          },
          config
        );
        // console.log(res);

        swal({
          title: "Booking Successful!",
          text: "Have a great day ahead.",
          icon: "success",
          button: "OK",
        }).then((clicked) => {
          window.location = "/appointments";
        });
        dispatch({
          type: GET_BOOKING,
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: CLEAR_PROFILE });
      swal({
        title: "Slot Already Booked",
        text: "Please find another suitable slot as this was booked while use were booking appointment.",
        icon: "warning",
      }).then((clicked) => {
        window.location = "";
      });
    }
  };

// cancel for appointments
export const cancelBooking = (bookingDate, start, end) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/cancelBooking`,
      { bookingDate, start, end },
      config
    );

    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getBookings`
    );

    console.log(res);

    swal(
      `Your appointment on ${bookingDate} at ${start}:00 - ${end}:00 has been deleted.`,
      {
        icon: "success",
      }
    );

    dispatch({
      type: GET_APPOINTMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};
