// import Aos from "aos";
// import { useEffect } from "react";
import "./home.css";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
const Home = () => {
  // useEffect(() => {
  //   Aos.init = { duration: 2000 };
  // }, []);
  return (
    <div className="container-fluid p-0 ">
      <div className=" four  ">
        <div data-aos="fade-up">
          <img
            className="seven image-fluid "
            src="./images/21.png"
            alt=""
            style={{height: "400px",width:"100%" }}
          />
          <div className="five">
            {/* <div className="six">
              <p> WELCOME TO </p>
            </div> */}
          </div>
        </div>
        <h2 className="up ">
          <a href="./Appointment">
            <button>Book Now</button>
          </a>
        </h2>
      </div>
      {/* adding of small 3 pictures */}
      <div className="row  d-flex jutify-content-between align-items-center 
      d-sm-block  d-md-flex pt-3 text-center  w-100 px-0  w-100 m-0" style={{backgroundColor:"black"}}>
        <div className="col-sm-12 col-md-4 nine shadow ">
          <img src="./images/4.jpg" alt="" style={{ width: "60%" }} />
        </div>
        <div className="col-sm-12 col-md-4 nine shadow">
          <img src="./images/3.jpg" alt="" style={{ width: "60%" }} />
        </div>
        <div className="col-sm-12 col-md-4 nine shadow">
          <img src="./images/5.jpg" alt="" style={{ width: "60%" }} />
        </div>
      </div>
      {/* barbar chair with little info about the shop */}
      <div className="last p-0  row d-flex jutify-content-between align-items-center 
      d-sm-block d-md-flex  pt-3 text_center m-0" >
        {/* <div></div> */}
        <div data-aos="fade-up" className="col-sm-12 col-md-3 text-white">
          <h3>
            WE RESPECT THE <br />
            HERITAGE OF CLASSIC <br /> GROOMING <br />
          </h3>
          <hr style={{ width: "20%", fontWeight: "bolder", color: "white" }} />
        </div>
        <div data-aos="fade-up" className="col-sm-12 col-md-4">
          <img
            className=" shadow"
            src="./images/7.png"
            alt=""
            style={{ width: "70%" }}
          />
        </div>
        <div data-aos="fade-up" className="col-sm-12 col-md-5 wild text-white">
          <h4> Haircuts and Dreadlocks at SofTouch</h4>
          <p>
            SofTouch hair clinic has provided the most talked <br /> about
            services when it comes to hair cuts, dread locks <br />{" "}
            installation, retouching and styling as of 2019 .We take <br />{" "}
            tremendous pride in creating amazing works of arts <br /> withouth
            any eraser when it comes to barbing and same <br />
            pride applies to our dread locks journey with both ladies <br /> and
            gentlemen Our strenght and differention is manifest <br /> in the
            details:how intensly we listen to what you want, how <br /> well the
            hair is tampered with, how straight the neckline is. <br /> You
            can't find a finer grooming saloon for both genders. <br /> Make a
            date with us and watch the opportunity you give <br /> us being
            valued
          </p>
        </div>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
