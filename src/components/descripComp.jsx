import React from "react";

const DescripComp = props => {
  return (
    <div className="DescDiv">
    <h3 className="image-title">{props.titleC}</h3>
    <h4 className="image-date">Date: {props.dateC}</h4>
  <p class="explanation">{props.descripC}</p> 
    </div>
  );
};

export default DescripComp;
