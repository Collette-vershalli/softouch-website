import Footer from "../Footer/Footer";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className=" entire p-0">
      <div className="row d-sm-block d-md-flex both image-fluid ">
        <div data-aos="fade-down">
          <img
            src="./images/10.jpg"
            alt=""
            style={{ width: "100%", height: "300px" }}
          />
        </div>
        <div data-aos="flip-left" className="call">
          <p>GALLERY</p>
        </div>
      </div>

      <div className="d-md-flex, d-sm-block   align-items-center justify-content-between  img-fluid image-container">
        <img
          data-aos="fade-down"
          src="./images/kim.jpg"
          alt=""
          className="mirrow shadow col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="flip-left"
          src="./images/a.jpg"
          alt=""
          className="mirrow shadow col-sm-12 col-md-4 p-3"
        />
        <img
          src="./images/d.jpg"
          alt=""
          className="mirrow shadow col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="flip-right"
          src="./images/b.jpg"
          alt=""
          className="mirrow shadow col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="fade-down"
          src="./images/e.jpg"
          alt=""
          className="mirrow shadow col-sm-12 col-md-4 p-3"
        />
        <img
          src="./images/f.jpg"
          alt=""
          className="mirrow shadow col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="flip-left"
          src="./images/nice.jpg"
          alt=""
          className="mirrow shadow col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="fade-up"
          src="./images/h.jpg"
          alt=""
          className="mirrow shadow  col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="flip-right"
          src="./images/g.jpg"
          alt=""
          className="mirrow shadow  col-sm-12 col-md-4 p-3"
        />
        <img
          src="./images/l.jpg"
          alt=""
          className="mirrow shadow  col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="fade-down"
          src="./images/i.jpg"
          alt=""
          className="mirrow shadow  col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="fade-down"
          src="./images/k.jpg"
          alt=""
          className="mirrow shadow  col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="fade-up"
          src="./images/c.png"
          alt=""
          className="mirrow shadow  col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="fade-down"
          src="./images/z.jpg"
          alt=""
          className="mirrow shadow  col-sm-12 col-md-4 p-3"
        />
        <img
          data-aos="fade-up"
          src="./images/n.jpg"
          alt=""
          className="mirrow shadow  col-sm-12 col-md-4 p-3"
        />
      </div>

      
      <div className="bottom d-sm-12">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
