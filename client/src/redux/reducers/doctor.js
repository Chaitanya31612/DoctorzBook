import { GET_DOCTOR, GET_DOCTORS, CLEAR_PROFILE } from "../ActionConstants";

const initialState = {
  doctorSelected: null,
  doctorsList: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctorsList: payload,
        loading: false,
      };
    case GET_DOCTOR:
      return {
        ...state,
        doctorSelected: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        doctorSelected: null,
        loading: false,
      };
    default:
      return state;
  }
}
