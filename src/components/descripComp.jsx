import React,{useState} from "react";
import styled from "styled-components";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const DescripDiv = styled.div`

margin-bottom:100px;
color:gainsboro;
`
const DescripTitle = styled.h3`
font-family: 'Anton', sans-serif;

`
const DescripComp = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
  <DescripDiv className="DescDiv">
    <DescripTitle className="image-title">{props.titleC}</DescripTitle>
     <h4 className="image-date">Date: {props.dateC}</h4>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem',marginTop:"1rem" }}>More Info</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody style={{backgroundColor: '#1c2640'}} >
          {props.descripC}
          </CardBody>
        </Card>
      </Collapse>
    </DescripDiv>
  );
};

export default DescripComp;
