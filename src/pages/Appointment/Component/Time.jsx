import { useState } from "react";
import "./Time.css";

 

const Time = ({ time, setTime }) => { 
    const [isActive, setIsActive] = useState(false);
    const options = [
        "9am", "10am" ,"10:30am", "11:30am", "12pm","1:30pm","2:30pm", 
        "3:40pm"
      ];
    return ( 
        <div>
        <p>Select time</p>
        <div className="timer">
          <div className="time-btn" onClick={(e) => setIsActive(!isActive)}>
            {time} <span className=""> <img src="./images/arrow 1.png" alt="" /></span>
          </div>
          {isActive && (
            <div className="timer-content">
              {options.map((option,index) => (
                <div  key={index}
                  onClick={(e) => {
                    setTime(option);
                    setIsActive(false);
                  }}
                  className="timer-item"
                >
                  {option}
                </div>
              ))}
  
             
            </div>
          )}
        </div>
      </div>
          
           
        
     );
}
 
export default Time;