import React, { useState } from "react";
import Datetime from "react-datetime";
import { connect } from "react-redux";
import { setCurrent } from "../../redux/actions/current";
import "react-datetime/css/react-datetime.css";

const Calendar = ({ setCurrent }) => {
  const [formData, setFormData] = useState({
    date: Date.now,
  });

  const { date } = formData;

  const onChange = (date) => {
    setFormData({ date });
    setCurrent(
      date._d,
      date._d.getDate(),
      date._d.getMonth() + 1,
      date._d.getFullYear()
    );
    // console.log(
    //   date,
    //   date._d,
    //   date._d.getDate(),
    //   date._d.getMonth() + 1,
    //   date._d.getFullYear()
    // );
  };
  return (
    <div className="booking__calender">
      <Datetime
        dateFormat="YYYY-MM-DD"
        timeFormat={false}
        // value={new Date()}
        open={true}
        onChange={(date) => onChange(date)}
      />
    </div>
  );
};

export default connect(null, { setCurrent })(Calendar);
