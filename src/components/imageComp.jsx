import React from "react";

const ImageComp = props => {
  return (
    <div className="imgDIV">
      <img className="space-image" alt="random space" src={props.imgUrl} />
    </div>
  );
};

export default ImageComp;
