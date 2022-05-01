import { combineReducers } from "redux";
import authReducer from "../reducers/auth";
import doctorReducer from "../reducers/doctor";

export default combineReducers({
  auth: authReducer,
  doctors: doctorReducer,
});
