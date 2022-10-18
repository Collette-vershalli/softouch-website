
import Card from "../../Services/Component/Card";
import "./Workers.css";

const Workers = () => {
  return (
    <div className="work text-white container-fluid">
      <h1 className="text-center">MEET OUR WORKERS</h1>
      <div className="  d-md-flex d-sm-block jutify-content-between  align-items-center  text-start" >
        <div  >
         
          <img
            className="image-fluid  col-sm-12  col-md-4 shadow"
            src="./images/Alex.png"
            style={{ width: "60%" }}
            alt=""
          />
          <p>
            ALEX <br /> // MASTER BARBER <br /> AND DREAD STYLIST <br /> Alex
            who happens to be the CEO of  Softouch <br /> hails  from the
            Northwest Region. Started cutting <br /> hair since about 2017. He
            honed his craft after <br /> high school where he kept an
            ever-increasing <br /> number of people looking sharp. His signature <br />
            cut is a classic combover with detailed scissor <br />
            work. He also has a good mastery of dreadlocks <br /> installation,
            renewall and styling. Spends free  <br />  time  with family and on the net
          
          </p> 
          <div>
          <img src="./images/collette.jpg" alt=""  style={{ width: "60%" }} />
          <p>
            Doris
            <br />// DREAD STYLIST <br /> Doris — came to Tweed Barbers from <br /> limbe,
            where She cut hair for almost 15 <br /> years. A gentle soul who carefully
            crafts <br /> his haircuts to match the face shape of his <br /> clients. When
            he’s not working, you’ll find <br /> him spending time with his wife and
            baby <br /> daughter or watching soccer on television.
          </p>
          </div>
         
        </div>
        <div data-aos="fade-up"  >
          <img
            className=" image-fluid col-sm-12  col-md-4  shadow"
            src="./images/worker.jpg"
            style={{ width: "60%" }}
            alt=""
          />

          <p>
            DANTE <br />
            // MASTER BARBER <br /> Dante hails from the Northwest Region and <br />
            has had a passion for cutting hair since 2019.<br /> Very laid
            personality school where he kept an <br /> ever-increasing
            number of classmates looking <br /> sharp. His signature cut is a
            classic combover <br /> with detailed scissor work. Spends free <br /> time
            with  family  and on the golf course.
          </p>
          <img src="./images/collette.jpg" alt=""  style={{ width: "60%" }} />
          <p>
            VERSHALLI
            <br />// DREAD STYLIST <br /> Vershalli  hails from the Northwest Region and <br />
            has had a passion for dreadlocks  since 2019.<br /> Very laid
            personality school where she kept an <br /> ever-increasing
            number of classmates looking <br /> stunning . Her styling is a
            a call for concern <br /> with detailed crochet work. Spends free time 
            in  <br /> in the studio as a model.
          </p>
        </div>
        <div  >
          <img
            className="image-fluid  col-sm-12  col-md-4 shadow"
            src="./images/worker.jpg"
            style={{ width: "60%" }}
            alt=""
          />

          <p>
            OMAH
            <br />// MASTER BARBER <br /> Omah — came to Tweed Barbers from <br /> Limbe,
            where he cut hair for almost 15 <br /> years. A gentle soul who carefully
            crafts <br /> his haircuts to match the face shape of his <br /> clients. When
            he’s not working, you’ll find <br /> him spending time with his wife and
            baby <br /> daughter or watching soccer on television.
          </p>
          <img src="./images/collette.jpg" alt=""  style={{ width: "60%" }} />
          <p>
            OMAH
            <br />// MASTER BARBER <br /> Omah — came to Tweed Barbers from <br /> Paris,
            where he cut hair for almost 15 <br /> years. A gentle soul who carefully
            crafts <br /> his haircuts to match the face shape of his <br /> clients. When
            he’s not working, you’ll find <br /> him spending time with his wife and
            baby <br /> daughter or watching soccer on television.
          </p>
        </div>
      </div>
    
       
      
    </div>
  );
};

export default Workers;
