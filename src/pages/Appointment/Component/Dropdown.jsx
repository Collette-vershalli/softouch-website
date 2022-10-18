import { useState } from "react";
import "./Dropdown.css";
const Dropdown = ({ service, setService }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Men's Beard Trim",
    "Men's Classic Haircut",
    "Womens' Classic Haircut",
    "locks installation",
    "locks Renewall and Styling",
    "locks on permed hair",
    "locks extension with natural dread",
    "locks extension with artificial dread"
  ];
  return (
    <div>
      <p>Select a service</p>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {service} <span className=""> <img src="./images/arrow 1.png" alt="" /></span>{" "}
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setService(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
