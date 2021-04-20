import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Jumbotron,
  Button,
  Form,
  Alert,
  Breadcrumb,
  Card,
  Image,
  Avatar,
} from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/* banner */}
      <Container>
        <Navbar bg="light" variant="light" fixed="top" expand="lg">
          <Container>
            <Navbar.Brand className="text-primary" href="#home">
              Design
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav inline className="ml-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row className="justify-content-md-center my-5 pt-5">
          <Col xs={12} lg={6} className="my-auto">
            <Jumbotron fluid className="mb-3 pb-2 bg-light">
              <h1 className="grad">
                Digital Marketing & Web Design Agency
                <br />
              </h1>
              <p>
                We design attention-grabbing, user-friendly websites and launch
                innovative, results-driven marketing campaigns that maximize
                business growth.
              </p>
              <Form className="ml-1">
                <Form.Row>
                  <Col xs={10}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        className="bg-light shadow-none rounded-0 border-top-0 border-left-0 border-right-0"
                        type="email"
                        size="lg"
                        placeholder="Enter your email address"
                        style={{
                          paddingTop: "1.8rem",
                          paddingBottom: "1.8rem",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Button
                    variant="primary"
                    size="lg"
                    className="ml-1 px-4 py-2"
                  >
                    Get Started
                  </Button>
                </Form.Row>
              </Form>
            </Jumbotron>
          </Col>
          <Col xs={12} lg={6} className="mt-4">
            <Image src="Images/banner-img.png" fluid />
          </Col>
        </Row>
        <Row className="d-flex flex-wrap pt-5">
          <Col className="d-flex">
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="Images/plug.svg" />
            </div>
            <div className="txt-box pl-3">
              <h5 className="mb-1">Connect</h5>
              <p>
                All the content that makes your company amazing - all in one
                place
              </p>
            </div>
          </Col>
          <Col className="d-flex">
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="Images/chart.svg" />
            </div>
            <div className="txt-box pl-3">
              <h5 className="mb-1">Connect</h5>
              <p>
                All the content that makes your company amazing - all in one
                place
              </p>
            </div>
          </Col>{" "}
          <Col className="d-flex">
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="Images/standings.svg" />
            </div>
            <div className="txt-box pl-3">
              <h5 className="mb-1">Connect</h5>
              <p>
                All the content that makes your company amazing - all in one
                place
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* img left */}
      <Container>
        <Row className="justify-content-md-center my-5 pt-5">
          <Col>
            <img className="w-100" src="Images/img-1.png" />
          </Col>
          <Col>
            <h1>Everyone engaged and sharing</h1>
            <p>
              Our social media campaign manager lets you stage content on behalf
              of your whole team. Employees can approve calendar items - or put
              it on autopilot and go hands free.
            </p>
            <ul className="pl-0 pr-5 my-4">
              <li className="d-flex pr-3">
                <FaCheckCircle size={22} className="text-primary mt-2" />
                <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                  The drag-and-drop calendar is easy to understand - and is even
                  easier to use.
                </p>
              </li>
              <li className="d-flex pr-3">
                <FaCheckCircle size={22} className="text-primary mt-2" />
                <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                  The drag-and-drop calendar is easy to understand - and is even
                  easier to use.
                </p>
              </li>
              <li className="d-flex pr-3">
                <FaCheckCircle size={22} className="text-primary mt-2" />
                <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                  The drag-and-drop calendar is easy to understand - and is even
                  easier to use.
                </p>
              </li>
            </ul>
            <hr />
            <p>
              “We used to send emails to our staff with shareable content. You'd
              have no clue if the email got opened or if the content got
              shared.”
            </p>
          </Col>
        </Row>
      </Container>
      {/* purple box */}
      <Container
        fluid
        className="bg-primary band"
        style={{ boxShadow: "inset 0px 0px 5px black" }}
      >
        <Container>
          <Row className="text-light justify-content-md-center">
            <Col className="text-center p-5 border">
              <h4>
                Having evaluated and tested alternatives, SHP was the clear
                winner. The client success team was hands down the best support
                team I have worked with in my career.
              </h4>
              <p className="text-light">some random text goes Here</p>
            </Col>
            <Col className="border dots">
              {/* <img src="Images/dots.svg" /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      {/* client cards */}
      <Container className="py-4">
        <Row className="my-5">
          <Col className="text-center">
            <h1>What Our Clients Think</h1>
            <p>
              There’s a reason why our customers stick around. Best-in-class
              support,
              <br /> 100% adoption rates, and a product that actually delivers
              ROI.
            </p>
          </Col>
        </Row>
        <Row className="mt-3 d-flex justify-content-center">
          <Col lg={4} md={6} sm={12} className="mb-3 px-2">
            <Card className="card-border" style={{ height: "400px" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Img
                  style={{
                    height: "50px",
                    width: "auto",
                    marginBottom: "30px",
                  }}
                  className="mx-auto"
                  src="Images/company-3.png"
                />
                <Card.Text className="mb-auto">
                  “SHP has revolutionized social media advocacy at
                  AustralianSuper. Our mission is to be our members' trustworthy
                  guide and SHP allows us to demonstrate our capability through
                  the sharing of valuable content. ”
                </Card.Text>
                <div className="d-flex pb-2">
                  <img className="client-img mr-3" src="Images/test-1.png" />
                  <div style={{ width: "fit-content", paddingTop: "7px" }}>
                    <h5 className="m-0" style={{ fontSize: "16px" }}>
                      Aidan Cunningham
                    </h5>
                    <p className="m-0" style={{ fontSize: "12px" }}>
                      Social Media Stragety, Sequoia
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3 px-2">
            <Card className="card-border" style={{ height: "400px" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Img
                  style={{
                    height: "50px",
                    width: "auto",
                    marginBottom: "30px",
                  }}
                  className="mx-auto"
                  src="Images/company-3.png"
                />
                <Card.Text className="mb-auto">
                  “SHP has revolutionized social media advocacy at
                  AustralianSuper. Our mission is to be our members' trustworthy
                  guide and SHP allows us to demonstrate our capability through
                  the sharing of valuable content. ”
                </Card.Text>
                <div className="d-flex pb-2">
                  <img className="client-img mr-3" src="Images/test-1.png" />
                  <div style={{ width: "fit-content", paddingTop: "7px" }}>
                    <h5 className="m-0" style={{ fontSize: "16px" }}>
                      Aidan Cunningham
                    </h5>
                    <p className="m-0" style={{ fontSize: "12px" }}>
                      Social Media Stragety, Sequoia
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3 px-2">
            <Card className="card-border" style={{ height: "400px" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Img
                  style={{
                    height: "50px",
                    width: "auto",
                    marginBottom: "30px",
                  }}
                  className="mx-auto"
                  src="Images/company-3.png"
                />
                <Card.Text className="mb-auto">
                  “SHP has revolutionized social media advocacy at
                  AustralianSuper. Our mission is to be our members' trustworthy
                  guide and SHP allows us to demonstrate our capability through
                  the sharing of valuable content. ”
                </Card.Text>
                <div className="d-flex pb-2">
                  <img className="client-img mr-3" src="Images/test-1.png" />
                  <div style={{ width: "fit-content", paddingTop: "7px" }}>
                    <h5 className="m-0" style={{ fontSize: "16px" }}>
                      Aidan Cunningham
                    </h5>
                    <p className="m-0" style={{ fontSize: "12px" }}>
                      Social Media Stragety, Sequoia
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
