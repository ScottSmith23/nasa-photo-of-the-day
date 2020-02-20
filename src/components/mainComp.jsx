import React,{useState,useEffect} from "react";
import axios from "axios";
import ImageComp from "./imageComp";
import DescripComp from "./descripComp";
import NewDate from "./NewDate";
export default function MainComp() {
    const [title,setTitle] = useState();
    const [date,setDate] = useState();
    const [description,setDescription] = useState('placeDesc');
    const [imgUrl,setImgUrl] = useState();
    const [newDate,setNewDate] = useState(`2020-02-16`);
    const [getnewDate,setgetnewDate] = useState();
    function changeDate(e){
        setgetnewDate(e);
    }

    function submitDate(event){

        setNewDate(getnewDate);
        event.preventDefault();
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
        <div className="container">
        <NewDate changeDate={changeDate} submitDate={submitDate}/>
        <ImageComp imgUrl={imgUrl} />
        <DescripComp titleC={title} descripC={description} dateC={date} />
        
        </div>
      );

}