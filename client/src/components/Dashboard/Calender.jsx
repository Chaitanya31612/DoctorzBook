import React, { useState } from "react";
import Datetime from "react-datetime";
import { connect } from "react-redux";
import { setCurrent } from "../../redux/actions/current";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

const Calendar = ({ setCurrent }) => {
  const onChange = (date) => {
    setCurrent(
      moment(date._d).format("MM/DD/YY"),
      date._d.getDate(),
      date._d.getMonth() + 1,
      date._d.getFullYear(),
      true
    );
  };

  const yesterday = moment().subtract(1, "day");
  const disablePastDate = (current) => {
    return current.isAfter(yesterday);
  };

  return (
    <div className="booking__calender">
      <Datetime
        dateFormat="YYYY-MM-DD"
        timeFormat={false}
        // value={new Date()}
        open={true}
        isValidDate={disablePastDate}
        onChange={(date) => onChange(date)}
      />
    </div>
  );
};

export default connect(null, { setCurrent })(Calendar);
