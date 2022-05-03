export const hash = (date, start, end) => {
  console.log(date + start + end);
  return date + start + end;
};

export const getTime = (start, end) => {
  let timestr = "";
  if (start > 12) {
    timestr += start - 12 + ":00 PM";
  } else {
    timestr += start + ":00 AM";
  }
  if (end > 12) {
    timestr += " - " + (end - 12) + ":00 PM";
  } else {
    timestr += " - " + end + ":00 AM";
  }
  return timestr;
};
