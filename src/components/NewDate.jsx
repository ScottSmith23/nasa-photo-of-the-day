// You do not need to do anything in this file
import React from 'react';

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
    </form>
  );
};

export default NewDate;
