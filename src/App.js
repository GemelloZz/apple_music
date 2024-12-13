import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./component/MyNavbar";
import NewExit from "./component/RecentlyPlayed";
import TopPicks from "./component/TopPicks";
import AnotherToListen from "./component/AnotherToListen";
import MyFooter from "./component/MyFooter";
import Sidebar from "./component/MySidebar";
import Navbarlg from "./component/Navbarlg";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main className="main-layout">
        <Sidebar />
        <Navbarlg />

        <TopPicks />
        <Container>
          <Row>
            <div className="d-flex flex-row align-items-center">
              <h1 className="me-2">Nuove uscite</h1>
              <i class="bi bi-arrow-right"></i>
            </div>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="queen" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="Greenday" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="Squallor" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="Noyz narcos" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="acdc" />
            </Col>
            <Col xs={4} md={2} lg={2}>
              <NewExit artist="muse" />
            </Col>
          </Row>
        </Container>
        <Container>
          <h3>Altro da esplorare</h3>
          <Row>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Esplora per genere" />
            </Col>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Decenni" />
            </Col>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Attività e stati d'animo" />
            </Col>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Worldwide" />
            </Col>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Classifiche" />
            </Col>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Audio spaziale" />
            </Col>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Video musicali" />
            </Col>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Nuovi artisti" />
            </Col>
            <Col xs={12} lg={4}>
              <AnotherToListen Value="Hit del passato" />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
