import React,{useState,useEffect} from "react";
import axios from "axios";
import ImageComp from "./imageComp";
import DescripComp from "./descripComp";
export default function MainComp() {
    const [title,setTitle] = useState();
    const [date,setDate] = useState();
    const [description,setDescription] = useState('placeDesc');
    const [imgUrl,setImgUrl] = useState();
    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(response => {
            console.log(response.data)
            setTitle(response.data.title)
            setDescription(response.data.explanation)
            setDate(response.data.date)
            setImgUrl(response.data.url)
          })
          .catch(error => [console.log(`nope`, error)]);
      }, []);
      return (
        <div className="container">
        <ImageComp imgUrl={imgUrl} />
        <DescripComp titleC={title} descripC={description} dateC={date} />
        </div>
      );

}