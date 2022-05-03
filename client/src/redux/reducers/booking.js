import {
  GET_BOOKING,
  GET_BOOKINGS,
  CLEAR_PROFILE,
  GET_APPOINTMENTS,
} from "../ActionConstants";

const initialState = {
  bookings: [],
  bookingsbyId: [],
  appointments: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKING:
      return {
        ...state,
        bookingsbyId: [...state.bookingsbyId, ...payload],
        loading: false,
      };
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: payload,
        loading: false,
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        bookings: null,
        bookingsbyId: null,
        loading: false,
      };
    default:
      return state;
  }
}
