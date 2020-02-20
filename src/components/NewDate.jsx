import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const NewDate = props => {

  return (
    <form className="date-form" onSubmit={props.submitDate}>
      <input
      name="comment"
        type="text"
        value= {props.comment}
        placeholder="YYYY-MM-DD"
        onChange={(e)=>{props.changeDate(e.target.value)}}
        
      />
      <DatePicker
        onSelect={(e)=>{props.changeDate(e)}}
/>
    </form>
    
  );
};

export default NewDate;
