import { useState } from "react";
import "./Location.css";
const Location = ({choose, setChoosen}) => {
    const [isActive, setIsActive] = useState(false);
    const options = [
      "Bamenda", "Limbe"
    ];
    return (
        <div>
      <p>Select Location</p>
      <div className="location">
        <div className="location-btn" onClick={(e) => setIsActive(!isActive)}>
          {choose} <span className=""> <img src="./images/arrow 1.png" alt="" /></span>
        </div>
        {isActive && (
          <div className="location-content">
            {options.map((option,index) => (
              <div key={index}
                onClick={(e) => {
                  setChoosen(option);
                  setIsActive(false);
                  // console.log(o);
                }}
                className="location-item"
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
 
export default Location;