import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Component1 from "./Component/Component1";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="p-0 m-0" style={{backgroundColor:"black"}}>
      <div className="position-relative">
        <div  
           data-aos="fade-down"
          className=" text-center  d-sm-block  " 
          style={{height:"300px"}}
        >
          <img   className="h-100 w-100" src="./images/4.jpg" alt=""   />
        </div>
        <div data-aos="flip-left" className="talk">
          <p>ABOUT</p>
        </div>
       
      </div>
      <Component1 /> 
    </div>
  );
};

export default About;
