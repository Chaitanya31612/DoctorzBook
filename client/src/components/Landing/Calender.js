import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";

function Calender() {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])

  return (
    <DatePicker 
      multiple
      value={values} 
      onChange={setValues}
    />
  )
}
export default Calender