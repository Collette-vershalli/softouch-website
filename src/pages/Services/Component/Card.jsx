import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div data-aos="fade-down" className="card col-sm-12 container-fluid">
      <div className="card__body">
        <img src={props.img} className="card__image" alt="" style={{width:"100%", height:""}} />
        <h2 className="card-title"> {props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <Link className="card-btn" to ="./Appointment">
          <button className="card_button">{props.button}</button>
        </Link> 
    </div>
  );
};

export default Card;
