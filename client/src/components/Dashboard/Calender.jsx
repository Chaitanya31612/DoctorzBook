import React, { useState } from "react";
import Datetime from "react-datetime";
import { connect } from "react-redux";
import { setCurrent } from "../../redux/actions/current";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

const Calendar = ({ setCurrent }) => {
  // const [formData, setFormData] = useState({
  //   date: Date.now,
  // });

  // const { date } = formData;

  const onChange = (date) => {
    // setFormData({ date });
    // console.log(
    //   "datee",
    //   date,
    //   date._d,
    //   moment.utc(date._d).format("MM/DD/YY"),
    //   moment(date._d).format("MM/DD/YY")
    // );

    // todo Date selected
    setCurrent(
      moment(date._d).format("MM/DD/YY"),
      date._d.getDate(),
      date._d.getMonth() + 1,
      date._d.getFullYear(),
      true
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
