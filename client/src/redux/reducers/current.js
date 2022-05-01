import { SET_CURRENT } from "../ActionConstants";

const now = new Date();
const date = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

const initialState = {
  dateformat: now,
  date,
  month,
  year,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT:
      return {
        ...state,
        dateformat: payload.dateformat,
        date: payload.date,
        month: payload.month,
        year: payload.year,
      };
    default:
      return state;
  }
}
