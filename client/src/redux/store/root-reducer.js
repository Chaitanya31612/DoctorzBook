import { combineReducers } from "redux";
import authReducer from "../reducers/auth";

export default combineReducers({
  auth: authReducer,
});
