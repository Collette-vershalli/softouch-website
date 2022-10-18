import Footer from "../../Footer/Footer";
import "./Component2.css";

const Component2 = () => {
  return (
    <div className="tired">
      <div
        className=" justify-content-between align-items-center d-sm-block d-md-flex 
       text-white bg-black location-container"
        style={{ width: "102.3%" }}
      >
        <div className="col-sm-12 col-md-7">
          <iframe
            width="90%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            border-radius="2px"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mile3%20bamenda%20softouch+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/sport-gps/">bike gps</a>
          </iframe>
        </div>

        <div className="see col-sm-12 col-md-5 ">
          <h2>
            <a href="./Appointment">
              <button>Book Appointment</button>
            </a>
          </h2>
          <hr style={{ width: "70%" }} />
          <h3>CONTACT SOFTOUCH</h3>
          <img src="./images/location.png" alt="" style={{ width: "30px" }} />
          <span>
            Mbende junction Limde <br /> Mile 3 Nkwen Bamenda{" "}
          </span>
          <p>
            <ul className="list-group  pt-3  inside">
              <li
                className="list-group-item text-white"
                style={{ backgroundColor: "purple" }}
              >
                <i>
                  <img
                    src="./images/phone 1.png"
                    alt=""
                    style={{ width: "25px" }}
                  />
                </i>
                <span>(+237)-653-493-006</span> <br />
                <i>
                  <img
                    src="./images/Group.png"
                    alt=""
                    style={{ width: "30px" }}
                  />
                </i>
                <span>
                  <a
                    className="text-decoration-none  peace"
                    href="https://softouchhairclinic@gmail.com"
                    // target="_blank"
                  >
                    softouchhairclinic@gmail.com
                  </a>
                </span>
                <p>OPEN 7 DAYS A WEEK</p>
                <p>MON-SAT 8AM-10PM</p>
                <p>SUNDAY 12PM-6PM</p>
              </li>
            </ul>
          </p>
          <div>
            <img
              className="rounded-circle"
              src="./images/1.png"
              alt=""
              style={{ width: "100px", height: "60px" }}
            />
          </div>
        </div>
      </div>
      <div className="bottom p-0 m-0 " >
        <Footer />
      </div>
    </div>
  );
};

export default Component2;
