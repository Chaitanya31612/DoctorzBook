import { combineReducers } from "redux";
import authReducer from "../reducers/auth";
import doctorReducer from "../reducers/doctor";
import currentReducer from "../reducers/current";
import bookingReducer from "../reducers/booking";

export default combineReducers({
  auth: authReducer,
  doctors: doctorReducer,
  current: currentReducer,
  bookings: bookingReducer,
});
