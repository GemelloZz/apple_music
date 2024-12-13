import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./component/MyNavbar";
import NewExit from "./component/RecentlyPlayed";
import TopPicks from "./component/TopPicks";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <TopPicks />
        <Container>
          <Row>
            <h1>Nuove uscite</h1>
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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
