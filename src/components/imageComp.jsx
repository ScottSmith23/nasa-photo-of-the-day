import React from "react";
import styled from "styled-components";

const SpaceDiv = styled.div`
  margin-bottom:20px;
  margin-top:20px;
  display:flex;
  justify-content:center;
`;

const SpaceImg = styled.img`
object-fit: scale;
  flex-shrink: 2;
  border-radius:20px;
  width: 100%;
  height: 100%;
`

const ImageComp = props => {
  return (
    <SpaceDiv className="imgDIV">
      <SpaceImg className="space-image" alt="random space" src={props.imgUrl} />
    </SpaceDiv>
  );
};

export default ImageComp;
