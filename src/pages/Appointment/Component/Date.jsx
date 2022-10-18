import "./Date.css";
import "react-datepicker/dist/react-datepicker.css";
const Date = ({date,setDate}) => {
  return (
    <div className="text-center date-contaner">
      <p>Date</p> 
      <input type="date" name="date" id="date" onChange={(e)=>setDate(e.target.value)} />
    </div>
  );
};

export default Date;
