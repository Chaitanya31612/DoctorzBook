import { GET_BOOKING, GET_BOOKINGS, CLEAR_PROFILE } from "../ActionConstants";

const initialState = {
  bookings: [],
  bookingsbyId: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKING:
      return {
        ...state,
        bookingsbyId: payload,
        loading: false,
      };
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: payload,
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
