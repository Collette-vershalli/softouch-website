import Footer from "../Footer/Footer";
import Card from "./Component/Card";
import "./Services.css";
const Services = () => {
  return (
    <div className="p-0 w-100">
      <div className=" text-center fist m-0 p-0 w-100">
        <div
          data-aos="fade-down"
          className=" text-center size "
        >
          <img
            src="./images/6.jpg"
            alt=""
            style={{ height: "350px" }}
            className="img-fluid w-100"
          />
        </div>
        <div data-aos="fade-right" className="name text-white">
          <p>SERVICES</p>
        </div>
      </div>{" "}
      <br />
      <div className="wrapper  text-black col-sm-12 text-capitalized">
        <Card
          img="./images/hairoil.png"
          title="Hair Oil"
          description="Apply on head scar for any itches bring forth perfect relaxation"
          button="purchase now"
        />
        <Card
          img="./images/sham.png"
          title="Hair Conditioner"
          description="Hair detangler.Apply gently and keep for five to ten minuites beforee washing."
          button="purchase now"
        />
        <Card
          img="./images/conditioner.png"
          style={{ width: "15%" }}
          title="Hair Shampo"
          description=" For your perfect hair wash.Apply gently on hair during washing"
          button="purchase now"
        />
       
        
        <Card
          img="./images/njoku.png"
          style={{ width: "20%" }}
          title="Men's classic Low cut"
          description=" Take your boring haircut up a notch"
          button="Book Now"
        />
        <Card
          img="./images/lowfade.png"
          style={{ width: "20%" }}
          title="Men's classic Low cut"
          description=" Take your boring haircut up a notch"
          button="Book Now"
        />
        <Card
          img="./images/lowline.png"
          style={{ width: "20%" }}
          title="Men's classic Low cut"
          description=" Take your boring haircut up a notch"
          button="Book Now"
        />
         <Card
          img="./images/start.png"
          style={{ width: "20%" }}
          title="Locks Installation"
          description=" Take your boring haircut up a notch"
          button="Book Now"
        />
        <Card
          img="./images/renew.png"
          style={{ width: "20%" }}
          title="Locks Rewall and Styling"
          description=""
          button="Book Now"
        />
        <Card
          img="./images/sala.png"
          style={{ width: "20%" }}
          title="Locks Extension with dread mesh"
          description=""
          button="Book Now"
        />
      </div>
      <div className="bottom" style={{width:"101%"}}>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
