import React,{useState,useEffect} from "react";
import axios from "axios";
import ImageComp from "./imageComp";
import DescripComp from "./descripComp";
import NewDate from "./NewDate";
import * as moment from 'moment';
import styled from "styled-components";
const BackDiv = styled.div`



`
const DescDiv = styled.div`

border-radius:20px;
padding-top:30px;
`
export default function MainComp() {
    const [title,setTitle] = useState();
    const [date,setDate] = useState();
    const [description,setDescription] = useState('placeDesc');
    const [imgUrl,setImgUrl] = useState();
    const [newDate,setNewDate] = useState(moment().format("YYYY-MM-DD"));
    const [getnewDate,setgetnewDate] = useState();
    function changeDate(e){
        var str = `${e}`;
        var res = str.slice(4, 15);
    var newFormat = moment(res,"MMM DD YYYY").format("YYYY-MM-DD");
        console.log(res);
        console.log(newFormat);
        setNewDate(newFormat);
    }
    function getDatetyped(e){
      setNewDate(e);
    }
    function submitDate(e){
        console.log("getnewDate");
    }
    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${newDate}`)
          .then(response => {
            console.log(response.data)
            setTitle(response.data.title)
            setDescription(response.data.explanation)
            setDate(response.data.date)
            setImgUrl(response.data.url)
          })
          .catch(error => [console.log(`nope`, error)]);
      }, [newDate]);
      return (
        <BackDiv className="container">
        <NewDate getDate={getDatetyped} changeDate={changeDate} submitDate={submitDate}/>
    
        <ImageComp imgUrl={imgUrl} />
        <DescDiv>
        <DescripComp titleC={title} descripC={description} dateC={date} />
        </DescDiv>
        </BackDiv>
      );

}