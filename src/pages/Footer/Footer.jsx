import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_container ">
      <div className=" justify-content-between align-items-center text-center  d-sm-block d-md-flex  p-3 m-3">
        <div className="col-sm-12 col-md-4 ">
          <h6>SOFTOUCH</h6>
          <p>
            Your dream hair clinic. <br />
            Come and feel the taste <br /> of classic grooming. Your <br />{" "}
            satisfaction our priority
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h6>ADDRESS</h6> <img src="./images/location.png" alt="" />{" "}
          <span>
            Mbende juncrion Limbe <br />
            Mile 3 Nkwen Bamenda
          </span>{" "}
          <br />
          <img src="./images/phone 1.png" alt="" style={{ width: "20px" }} />
          <span> (+237) 653-49-30-03 </span>
          <br />
          <img src="./images/Group.png" alt="" style={{ width: "25px" }} />
          <span>
            <a
              className="text-decoration-none"
              href="https://softouchhairclinic@gmail.com"
            >
              softouchhairclinic@gmail.com
            </a>
          </span>
        </div>
        <br /> <br />
        <div className="col-sm-12 col-md-4">
          <h6>HOURS</h6>
          <p>
            Mon-Thurs 10AM-9PM <br />
            Fri 10AM-7PM <br />
            Sat 8AM-6PM <br />
            Sun 9AM-5PM
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center col-md-2 text-center media-container col-sm-6  ">
          <a href="https://m.facebook.com/SofTouch-Hair-Clinic-100158075444197/">
            <img
              className=""
              src="./images/facebook 1.png"
              alt=""
              style={{ width: "50%" }}
            />
          </a>
          <a href="https://instagram.com/softouchhairclinic?igshid=YmMyMTA2M2Y=">
            <img
              src="./images/instagram 1.png"
              alt=""
              style={{ width: "70%" }}
            />
          </a>
          <a href="https://vm.tiktok.com/ZMFJ6tK3c">
            <img src="./images/tiktok 1.png" alt="" style={{ width: "70%" }} />
          </a>
        </div>
        <p className="text-center ml-5">copyrighgt@softouchhairclinic.com</p>
   
    
    </div>
  );
};

export default Footer;
