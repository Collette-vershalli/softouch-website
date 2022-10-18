
import "./Contacts.css";
import "aos/dist/aos.css";
import Component2 from "./Component/Component2";
const Contacts = () => {

  return (
    <div className="container-fluid entire p-0">
      <div className="row d-sm-block d-md-flex both image-fluid ">
        <div data-aos="fade-down">
          <img
            src="./images/3.jpg"
            alt=""
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div data-aos="flip-left" className="call">
          <p>CONTACTS</p>
        </div>
      </div>
      <div className="">
        <Component2 />
      </div>
    </div>
  );
};

export default Contacts;
