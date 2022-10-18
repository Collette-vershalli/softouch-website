import { useState, useEffect } from "react";
import "./Appointment.css";
import Date from "./Component/Date";
import Dropdown from "./Component/Dropdown";
import Form from "./Component/Form";
import Location from "./Component/Location";
import Time from "./Component/Time";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from "axios"

const Appointment = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [formData, setFormData] = useState(undefined);
const [date,setDate]=useState()
const [service,setService]=useState("enter service ")
const [time,setTime]=useState("select time")
const [choose,setChoosen]=useState("choose location")

  const[softouchList, setSoftouchList] =useState([])
  const baseURL ="http://localhost:4000"

  const submit = ()=>{
   
    console.log(date,time,choose,service)
	  const softouch= axios.post(`http://localhost:4000/add-softouch`,{
      date, 
      time, 
      location:choose, 
      service,
    })
	  setSoftouchList(softouch.data, ...softouchList)
  }
  useEffect(() => {
    if (formData) {
      setIsBtnClicked(false);
    }
  }, [formData]);
  useEffect(()=>{
console.log("value change",service)
  },[service])
  return (
    <div>
      <div className=" row d-sm-flex d-md-flex justify-content-between align-items-center stack-top container-fluid">
        <div className="stack-top col-sm-6 col-md-6   ">
          <Dropdown service={service} setService={setService} />
        </div>
        <div className="
          col-sm-6 col-md-6">
          <Date date={date} setDate={setDate} />
        </div>
        <div className=" col-sm-6  col-md-6 "  >
          <Location choose={choose} setChoosen={setChoosen}  />
        </div>
        <div className=" stack-top  col-sm-6 col-md-6 " > 
          <Time time={time} setTime={setTime}  />
        </div>
      </div>
      <div >
        {isBtnClicked ? 
          <Form setFormData={setFormData} />
         : ( <div className="text-center pt-5">
            <h6>click to continue</h6>
         <Link to ="/form">
          <button onClick={submit}>Click here</button>
         </Link>
          </div>
        )}
       
      </div>
      <div className="col-sm-12  col-md-12 bg-black" style={{marginTop:"30p%"}}>
      <Footer />
      </div>
     
    </div>
  );
}
         
export default Appointment;