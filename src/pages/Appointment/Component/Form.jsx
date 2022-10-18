import React from "react";
import axios from "axios";
import "./Form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
const Form = () => {
  const [softouchList, setSoftouchList] = useState([]);

  const [phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const baseURL = "http://localhost:4000";

  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeMail = (event) => {
    setEmail(event.target.value);
  };

  const changeMessage = (event) => {
    setMessage(event.target.value);
  };

  const submit = () => {
    const softouch = axios.post(`http://localhost:4000/add-softouchs`, {
      Name,
      phone,
      email,
      message,
    });
    setSoftouchList(softouch.data, ...softouchList);
  };

  return (
    <div>
      <p style={{ marginTop: "1%", marginLeft: "10%", fontWeight: "bolder " }}>
        Please Fill this form to confirm your booking request.
      </p>
      <div
        className=" col-sm-12  p-3 d-flex  "
        style={{ marginLeft: "10%", marginRight: "1%" }}
      >
        <form className="form-container shadow" style={{ borderRadius: "5px" }}>
          <label htmlFor=""> Name</label>
          <br />
          <input onChange={changeName} type="text" placeholder="Full name" />
          <br />

          <label htmlFor="">Email</label>
          <br />
          <input onChange={changeMail} type="text" placeholder="E-mail" />
          <br />
          <label htmlFor="">Phone</label>
          <br />
          <input onChange={changePhone} type="text" placeholder="Phone" />
          <br />
          <label htmlFor=""> Message</label>
          <br />
          <textarea
            style={{ height: "20%" }}
            onChange={changeMessage}
            name=""
            id=""
            cols="22"
          ></textarea>
        </form>
      </div>
      <br />
      <div>
        <Link to="/approve">
          <button
            style={{ width: "15%", marginLeft: "15%", marginRight: "1%" }}
            onClick={submit}
          >
            Book
          </button>
        </Link>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Form;
