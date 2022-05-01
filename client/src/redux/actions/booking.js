import axios from "axios";

import { CLEAR_PROFILE, GET_BOOKING } from "../ActionConstants";

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

// book slots
export const bookSlot =
  (doctor_id, bookingDate, start, end) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/bookSlot`,
        {
          doctor_id,
          bookingDate,
          start,
          end,
        },
        config
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
