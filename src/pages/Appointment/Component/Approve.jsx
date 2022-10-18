import { Link } from "react-router-dom";

const Approve = () => {
  return (
    <div>
      <div
        style={{ alignContent: "center", marginLeft: "40%", paddingTop: "1%" }}
      >
        <img
          className="img-fluid text-center rounded-circle"
          src="./images/tik.png"
          alt=""
        />
      </div>
      <p style={{ fontWeight: "bolder", textAlign: "center" }}>Thank You!</p>
      <p style={{ textAlign: "center" }}>
        Your booking request has been succesfully <br /> sent. We will get back
        to  you shortly to <br /> confirm your booking
      </p>
<br />
 <div className="text-center p-0">
 <Link to ="/home">
  <button >Back home</button>
</Link>
 </div>

    </div>
  );
};

export default Approve;
