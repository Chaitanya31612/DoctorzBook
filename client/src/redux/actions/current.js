import { SET_CURRENT } from "../ActionConstants";

// Set current state
export const setCurrent = (dateformat, date, month, year) => (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENT,
      payload: { dateformat, date, month, year },
    });
  } catch (err) {
    console.log(err);
  }
};
