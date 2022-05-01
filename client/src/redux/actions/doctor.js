import axios from "axios";

import { GET_DOCTOR, GET_DOCTORS, CLEAR_PROFILE } from "../ActionConstants";

// Get all doctors
export const getDoctors = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getDoctors`
    );

    dispatch({
      type: GET_DOCTORS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};

// Get a doctor selected
export const getDoctor = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/getDoctor/${id}`
    );

    dispatch({
      type: GET_DOCTOR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_PROFILE });
  }
};
