import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const NewDate = props => {

  return (
    <form className="date-form" >
      {/* <input
      name="comment"
        type="text"
        value= {props.comment}
        placeholder="YYYY-MM-DD"
        onChange={(e)=>{props.getDate(e.target.value)}}
        onSubmit={props.submitDate}
      /> */}
      <DatePicker
        onSelect={(e)=>{props.changeDate(e)}}
/>
    </form>
    
  );
};

export default NewDate;
