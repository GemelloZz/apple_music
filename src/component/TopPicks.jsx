import { Container, Col, Row } from "react-bootstrap";
import img_1 from "../assets/images/1a.png";
import img_2 from "../assets/images/1b.png";
import img_3 from "../assets/images/2a.png";
import img_4 from "../assets/images/2b.png";
import img_5 from "../assets/images/2c.png";
import "../component/Css/TopPicks.css";
const TopPicks = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="mt-4">Novità</h1>
          <p>NUOVA STAZIONE RADIO</p>
          <Col xs={12} md={6} lg={6}>
            <h4>Ci pensiamo noi.Ascolta apple music chill</h4>
            <img src={img_1} alt="first_img" className="rounded-3 resize" />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <h4>Ecco la nuova casa per ascoltare musica latina</h4>
            <img src={img_2} alt="first_img" className="rounded-3 resize" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <p className="mt-3">
            Nuovi episodi radio <i class="bi bi-arrow-right ms-1"></i>
          </p>
          <Col xs={4}>
            <img src={img_3} alt="" style={{ width: "100px" }} className="rounded-3" />
            <p>Prologo con abuelo</p>
          </Col>
          <Col xs={4}>
            <img src={img_4} alt="" style={{ width: "100px" }} className="rounded-3" />
            <p>Thee wanderer</p>
          </Col>
          <Col xs={4}>
            <img src={img_5} alt="" style={{ width: "100px" }} className="rounded-3" />
            <p>Micheal bublè & Carly Pearce</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopPicks;
