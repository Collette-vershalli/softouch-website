import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Appointment from "./pages/Appointment/Appointment";
import "./App.css";
import Form from "./pages/Appointment/Component/Form";
import Approve from "./pages/Appointment/Component/Approve"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar
          className="one sticky-top container-fluid   text-center col-sm-12  top-0 start-0"
          expand="lg"
          
        >
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"purple"}} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="slap" >
                <img
                  className="image-fluid rounded-circle"
                  src="./images/1.png"
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                />
                <Nav.Link
                  style={{ color: "purple" }}
                  as={Link}
                  to="/home"
                  className="three"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  style={{ color: "purple" }}
                  as={Link}
                  to="/about"
                  className="three"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  style={{ color: "purple" }}
                  as={Link}
                  to="/services"
                  className="three"
                >
                  Services
                </Nav.Link>

                <Nav.Link
                  style={{ color: "purple" }}
                  as={Link}
                  to="/gallery"
                  className="three"
                >
                  Gallery
                </Nav.Link>

                <Nav.Link
                  style={{ color: "purple" }}
                  as={Link}
                  to="/contacts"
                  className="three"
                >
                  Contacts
                </Nav.Link>
                <Nav.Link
                  style={{ color: "purple" }}
                  as={Link}
                  to="/appointment"
                  className="three"
                >
                  Appointment
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route element={<Navigate to="/home" />} path="*" />
          <Route element={<Home />} path="/home" />
          <Route element={<About />} path="/about" />
          <Route element={<Services />} path="/services" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<Appointment />} path="/appointment" />
          <Route element={<Form />} path="/form" />
          <Route element={<Approve />} path ="/approve" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
