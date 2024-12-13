import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Container } from "react-bootstrap";
import "./Css/Navbarlg.css";

function Navbarlg() {
  return (
    <Navbar bg="dark" variant="dark" className="px-3 Navbar">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <i className="bi bi-apple fs-3"></i>
        </Navbar.Brand>

        <div className="d-flex align-items-center">
          <Button variant="link" className="text-light p-1 me-2">
            <i className="bi bi-skip-backward-fill"></i>
          </Button>
          <Button variant="link" className="text-light p-1 me-2">
            <i className="bi bi-play-fill"></i>
          </Button>
          <Button variant="link" className="text-light p-1 me-2">
            <i className="bi bi-skip-forward-fill"></i>
          </Button>
          <div className="progress w-50" style={{ height: "4px" }}>
            <div className="progress-bar bg-light" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        {/* Pulsante Accedi */}
        <Button variant="danger" className="px-3">
          Accedi
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navbarlg;
