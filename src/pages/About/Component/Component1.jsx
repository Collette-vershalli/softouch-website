// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import "./Component1.css";
import Workers from "./Workers";
const Component1 = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <div className="row d-sm-block d-md-flex w-100   p-0 m-0 " style={{backgroundColor:"#000"}}>
      <div data-aos="flip-left" className="col-sm-12 col-md-6 pt-3 mango text-white m-0 p-0">
        <h2>
          At Softouch hair clinic, we <br /> believe that at it's best <br /> a
          hair clinic is a <br /> dependable trusted <br /> neighboorhood <br />{" "}
          institution
        </h2>
        <hr style={{ width: "20%", fontWeight: "bolder", color: "white" }} />
        <div data-aos="fade-up">
          <p>
            OUR PRIMARY GOAL IS TO BUILD STRONG, LONG- <br /> TERM RELATIONSHIPS
            WITH EACH OF OUR CLIENTS.
          </p>
          <p>
            Softouch hair clinic is proud to be an independent, Cameroon- <br /> bred
            and operated store focused solely on serving the Cameroon <br /> market.
            Our unparalleled  team of expert workers has personal pride <br /> riding on
            each haircut and hair do. Most of our workers are being  <br /> by
            us. We’ve seen it all and can do it all. We are about substance <br /> and
            skill,  not gimmicks. We like to have fun, but we take our work <br />
            seriously. Scantily-clad female stylists who press their cleavage in <br />
            your face at the shampoo bowl? Sorry pal, you won¹t find that here.
          </p>
        </div>
      </div>
      <div data-aos="flip-right" className="col-sm-12 col-md-6 pt-3 ">
        <img
          className="shadow"
          src="./images/shop.png"
          alt=""
          style={{ width: "80%" }}
        />
        
      </div>
      <Workers />
      <Footer />
    </div>
  );
};

export default Component1;
