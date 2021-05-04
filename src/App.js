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
import { RiPencilRuler2Fill } from "react-icons/ri";
import { BiRightArrow } from "react-icons/bi";
import { ImArrowRight } from "react-icons/im";
import {
  HiOutlineSpeakerphone,
  HiOutlinePresentationChartLine,
  HiPhone,
  HiMail,
} from "react-icons/hi";
import {
  FaCheckCircle,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function App() {
  return (
    <div className="App">
      {/* banner */}
      <Container className="pb-2">
        <Navbar
          //style={{ background: "#e7eff6" }}
          bg="primary"
          variant="dark"
          fixed="top"
          expand="lg"
        >
          <Container>
            <Navbar.Brand className="text-light" href="#home">
              Definitive Design
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
              <h1 className="grad text-dark">
                Give Your Business the{" "}
                <span className="text-primary">Edge</span> It Needs!
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
                        className="bg-light shadow-none rounded-0 border-top-0 border-left-0 border-right-0 form-border"
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
                    className="mt-2 px-4 py-2"
                  >
                    Get Started
                  </Button>
                </Form.Row>
              </Form>
            </Jumbotron>
          </Col>

          <Col xs={12} lg={6} className="mt-4 d-flex justify-content-center">
            <Image src="Images/img-2.png" fluid />
          </Col>
        </Row>

        {/* <Row className="d-flex flex-wrap pt-5">
          <Col md={12} lg={4} className="d-flex pb-3">
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="Images/chart.svg" />
            </div>
            <div className="txt-box pl-3">
              <p className="mb-1 tile-p">Grow Your Profits</p>
              <p>
                We measure the success of your marketing by its impact on your
                bottom line.
              </p>
            </div>
          </Col>{" "}
          <Col md={12} lg={4} className="d-flex pb-3">
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="Images/standings.svg" />
            </div>
            <div className="txt-box pl-3">
              <p className="mb-1 tile-p">Work Your Data</p>
              <p>
                We leverage expert insights and proprietary tech solutions to
                find out what data matters
              </p>
            </div>
          </Col>
          <Col md={12} lg={4} className="d-flex pb-3">
            <div className="icon-box d-flex align-items-center justify-content-center">
              <img src="Images/plug.svg" />
            </div>
            <div className="txt-box pl-3">
              <p className="mb-1 tile-p">Work Your Mindset</p>
              <p>
                We’re not just fast, we’re deliberate. We’re not just
                innovative, we’re smart.
              </p>
            </div>
          </Col>
        </Row> */}
      </Container>

      {/* img left */}
      <Container className="pt-3">
        <Row className="pt-5">
          <p
            className="text-center w-100 text-dark"
            style={{ fontWeight: "700", fontSize: "50px" }}
          >
            Meet Your New Digital Marketing Agency
          </p>
        </Row>

        <Row className="justify-content-md-center mb-0 pt-4">
          <Col md={12} lg={6} className="pb-5 pt-2">
            <img className="w-100" src="Images/img-8.png" />
          </Col>

          <Col>
            <p>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "22px",
                  lineHeight: "24px",
                }}
                className="text-primary"
              >
                We are DEFINITIVE DESIGN.
              </span>{" "}
              Here to help you Think Like A Challenger: innovating,
              experimenting, and delivering results. With a long history of
              building cutting-edge, professional websites, Chicago Digital
              delivers solutions that reflect your brand and support your
              business goals.
            </p>
            <ul className="pl-0 pr-5 my-4">
              <li className="d-flex pr-3">
                <FaCheckCircle size={22} className="text-primary mt-2" />
                <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>
                    Local Business
                  </span>
                  <br /> We can relate to many of the challenges small
                  businesses face. Thankfully, we have the tools and experiences
                  to meet those challenges head on… and help you overcome them.
                </p>
              </li>
              <li className="d-flex pr-3">
                <FaCheckCircle size={22} className="text-primary mt-2" />
                <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>
                    National Business
                  </span>
                  <br /> With hundreds of website projects completed, Chicago
                  Digital has the experience and expertise you can trust. We
                  have delivered projects and services for Fortune 500
                  companies.
                </p>
              </li>{" "}
              <li className="d-flex pr-3">
                <FaCheckCircle size={22} className="text-primary mt-2" />
                <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>
                    Web Agency
                  </span>
                  <br /> We empower marketing and web agencies to deliver
                  incredible solutions to their customers, often behind the
                  scenes, by delivering design, development, consulting, and
                  training services.
                </p>
              </li>
            </ul>
            {/* <hr />
            <p>
              “We used to send emails to our staff with shareable content. You'd
              have no clue if the email got opened or if the content got
              shared.”
            </p> */}
          </Col>
        </Row>
      </Container>

      {/* Our Capabilites */}
      <Container className="pb-5 mb-3 mt-0 pt-3">
        <Row className="mt-3 d-flex justify-content-center">
          <Col lg={3} sm={6} xs={12} className="mb-4 px-2 text-center">
            <CgWebsite className="text-dark" size={120} />
            <Card className="text-left mt-3" style={{ minHeight: "340px" }}>
              <Card.Body className="d-flex flex-column border-bottom">
                <Card.Title
                  className="headline"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >{`Web Design & Development`}</Card.Title>
                <Card.Text className="font-14 pt-2">
                  If you want a <strong>high-performing website</strong>, you
                  don't have to choose between "looks good" and "easy to
                  maintain." Chicago Digital can deliver the full package — with
                  customer service that will surprise you.
                </Card.Text>
              </Card.Body>
              <div className="d-flex justify-content-center py-3">
                <Card.Link className="font-14">
                  WEB DESIGN SERVICES
                  <BiRightArrow size={20} className="mb-1 ml-1" />
                </Card.Link>
              </div>
            </Card>
          </Col>

          <Col lg={3} sm={6} xs={12} className="mb-4 px-2 text-center">
            <HiOutlinePresentationChartLine className="text-dark" size={120} />
            <Card className="text-left mt-3" style={{ minHeight: "340px" }}>
              <Card.Body className="d-flex flex-column border-bottom">
                <Card.Title
                  className="headline"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >{`Online Marketing Services`}</Card.Title>
                <Card.Text className="font-14 pt-2">
                  To help you succeed — and thrive — Chicago Digital develops
                  <strong>
                    custom-designed internet marketing strategies
                  </strong>{" "}
                  to help you find and keep more of the best customers. Grow
                  your business with online marketing.
                </Card.Text>
              </Card.Body>
              <div className="d-flex justify-content-center py-3">
                <Card.Link className="font-14">
                  MARKETING SERVICES
                  <BiRightArrow size={20} className="mb-1 ml-1" />
                </Card.Link>
              </div>
            </Card>
          </Col>

          <Col lg={3} sm={6} xs={12} className="mb-4 px-2 text-center">
            <RiPencilRuler2Fill className="text-dark" size={120} />
            <Card className="text-left mt-3" style={{ minHeight: "340px" }}>
              <Card.Body className="d-flex flex-column border-bottom">
                <Card.Title
                  className="headline"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >{`Branding & Identity Services`}</Card.Title>
                <Card.Text className="font-14 pt-2">
                  The foundation of every business is a strong brand, yet
                  getting that brand right is one of the toughest challenges
                  you'll face. Chicago Digital makes it easy to build not just a
                  brand, but <strong>your brand.</strong>
                </Card.Text>
              </Card.Body>
              <div className="d-flex justify-content-center py-3">
                <Card.Link className="font-14">
                  BRANDING SERVICES
                  <BiRightArrow size={20} className="mb-1 ml-1" />
                </Card.Link>
              </div>
            </Card>
          </Col>

          <Col lg={3} sm={6} xs={12} className="mb-4 px-2 text-center">
            <HiOutlineSpeakerphone className="text-dark" size={120} />
            <Card className="text-left mt-3" style={{ minHeight: "340px" }}>
              <Card.Body className="d-flex flex-column border-bottom">
                <Card.Title
                  className="headline"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >{`Integrated Public Relations & Marketing`}</Card.Title>
                <Card.Text className="font-14 pt-2">
                  We know how to translate data and analysis into{" "}
                  <strong>effective messages</strong> and{" "}
                  <strong>actionable insights.</strong>
                </Card.Text>
              </Card.Body>
              <div className="d-flex justify-content-center py-3">
                <Card.Link className="font-14">
                  PR SERVICES
                  <BiRightArrow size={20} className="mb-1 ml-1" />
                </Card.Link>
              </div>
            </Card>
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
            <Col className="py-5">
              <p className="mx-auto result">
                We help businesses and eCommerce stores to:
              </p>
              <ul className="pl-5 mt-4 mb-0">
                <li className="d-flex pr-3">
                  <ImArrowRight className="mt-1" size={22} />
                  <p
                    className="pl-3 text-light"
                    style={{ maxWidth: "calc(100% - 22px)", fontSize: "18px" }}
                  >
                    Increase targeted traffic
                  </p>
                </li>
                <li className="d-flex pr-3">
                  <ImArrowRight className="mt-1" size={22} />
                  <p
                    className="pl-3 text-light"
                    style={{ maxWidth: "calc(100% - 22px)", fontSize: "18px" }}
                  >
                    Generate qualified sales leads
                  </p>
                </li>
                <li className="d-flex pr-3">
                  <ImArrowRight className="mt-1" size={22} />
                  <p
                    className="pl-3 text-light"
                    style={{ maxWidth: "calc(100% - 22px)", fontSize: "18px" }}
                  >
                    Improve brand visibility
                  </p>
                </li>
              </ul>
            </Col>

            <Col xs={12} md={6} className="dots px-4 py-5 text-center">
              <Row>
                <Col>
                  <p className="result mb-2">
                    Average results generated for our clients
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="px-0">
                  <p className="result-title mb-0">2.5x</p>
                  <p className="upper">INCREASE IN SEO TRAFFIC</p>
                </Col>
                <Col md={6} className="px-0">
                  <p className="result-title mb-0">70%</p>
                  <p className="upper">SALES QUALIFIED LEADS INCREASE</p>
                </Col>
                <Col md={6} className="px-0">
                  <p className="result-title mb-0">120%</p>
                  <p className="upper">INCREASE IN PPC REVENUE</p>
                </Col>
                <Col md={6} className="px-0">
                  <p className="result-title mb-0">35%</p>
                  <p className="upper">CONVERSION RATE INCREASE</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* about */}
      <Container>
        <Row className="pt-5"></Row>

        <Row className="justify-content-md-center">
          <Col xs={12} md={6} lg={6} className="pt-5">
            <p
              className="text-dark"
              style={{ fontWeight: "700", fontSize: "50px" }}
            >
              More Than a Vendor
            </p>
            <p style={{ fontSize: "18px" }}>
              The real power of <strong>Definitive Design</strong> is our
              passion for and expertise in growing companies from nearly every
              sector. As a full-service agency, we leverage every tool at our
              disposal to engage <strong>your ideal prospects</strong> and
              generate more qualified leads. All of this, in turn, leads to
              tangible growth in your sales and revenue. The Definitive Design
              team is committed to serving our customers, our industry and
              community. By building mutually beneficial relationships, we
              develop personal connections that deliver success.{" "}
              <strong>Plain and simple.</strong>
            </p>
            <p style={{ fontSize: "18px" }}>
              Our Vision at <strong>Definitive Design</strong>, we desire to
              become a frontrunner in advancing businesses through digital
              demands.{" "}
              <strong>
                Creative design, customer satisfaction, innovation, and teamwork
              </strong>
              , are the fundamental principles behind our company, and persist
              to reflect on who we are, how we work, and what we endeavor for.
            </p>
          </Col>
          <Col xs={12} md={6} className="pt-5">
            <img className="w-100" src="Images/img-3.png" />
          </Col>
        </Row>
      </Container>

      {/* client cards */}
      <Container className="pt-4 pb-5 mb-5">
        <Row className="mt-5 mb-4">
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
          <Col lg={4} md={6} sm={12} className="mb-3 px-2 pt-4">
            <Card className="card-border" style={{ minHeight: "450px" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Img
                  style={{
                    height: "60px",
                    width: "auto",
                    marginBottom: "30px",
                  }}
                  className="mx-auto"
                  src="Images/company-1.png"
                />
                <Card.Text className="mb-auto">
                  “Web Designer Express did a great job of not only creating our
                  website how we wanted it to be, but also gave us great insight
                  on what they believed will help boost sales.{" "}
                  <strong>Their proven experience and excellence</strong> is the
                  reason why our company would recommend Web Designer Express to
                  anyone who is looking to create a customized website. ”
                </Card.Text>
                <div className="d-flex pb-2">
                  <img className="client-img mr-3" src="Images/test-1.png" />
                  <div style={{ width: "fit-content", paddingTop: "7px" }}>
                    <h5 className="m-0" style={{ fontSize: "16px" }}>
                      Jared Morris
                    </h5>
                    <p className="m-0" style={{ fontSize: "12px" }}>
                      Social Media Manager, Beacon Capital
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} className="mb-3 px-2 pt-4">
            <Card className="card-border" style={{ minHeight: "450px" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Img
                  style={{
                    height: "60px",
                    width: "auto",
                    marginBottom: "30px",
                  }}
                  className="mx-auto"
                  src="Images/company-2.png"
                />
                <Card.Text className="mb-auto">
                  “The web designers team at webdesignerexpress.com is the best!{" "}
                  <strong>Couldn't be more happy with the quality</strong>{" "}
                  website they developed for me. First thing my customers say is
                  wow you have a really nice website! I was kind off stressing
                  out about getting my new site done and they truly did an
                  amazing job in making it a great experience.”
                </Card.Text>
                <div className="d-flex pb-2">
                  <img className="client-img mr-3" src="Images/test-2.png" />
                  <div style={{ width: "fit-content", paddingTop: "7px" }}>
                    <h5 className="m-0" style={{ fontSize: "16px" }}>
                      Maria Keller
                    </h5>
                    <p className="m-0" style={{ fontSize: "12px" }}>
                      Marketing Coordinator, HNRY
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} className="mb-3 px-2 pt-4">
            <Card className="card-border" style={{ minHeight: "450px" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Img
                  style={{
                    height: "60px",
                    width: "auto",
                    marginBottom: "30px",
                  }}
                  className="mx-auto"
                  src="Images/company-3.png"
                />

                <Card.Text className="mb-auto">
                  “The designers and developers are true professionals. They
                  understand your vision and make it a reality. The layouts and
                  designs are fantastic. The best I have seen.{" "}
                  <strong>
                    I have nothing but praise and the highest recommendation
                  </strong>{" "}
                  for them. The turn around time and communication is great.”
                </Card.Text>
                <div className="d-flex pb-2">
                  <img className="client-img mr-3" src="Images/test-3.png" />
                  <div style={{ width: "fit-content", paddingTop: "7px" }}>
                    <h5 className="m-0" style={{ fontSize: "16px" }}>
                      Wallace Simpson
                    </h5>
                    <p className="m-0" style={{ fontSize: "12px" }}>
                      Account Executive, Sequoia
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* forum */}
      <Container fluid style={{ background: "#e7eff6" }} className="py-4">
        <Container>
          <Row className="py-5 justify-content-md-center">
            <Col xs={12} md={6} lg={5}>
              <p>AVERAGE CLIENTS SEE A 4.5X ROI</p>
              <h1>Request a Quote</h1>
              <ul className="pl-0 pr-5 mt-4 mb-0">
                <li className="d-flex pr-3">
                  <FaCheckCircle size={22} className="text-primary" />
                  <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                    Dramatically improve ROI
                  </p>
                </li>
                <li className="d-flex pr-3">
                  <FaCheckCircle size={22} className="text-primary" />
                  <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                    Outperform the competition
                  </p>
                </li>
                <li className="d-flex pr-3">
                  <FaCheckCircle size={22} className="text-primary" />
                  <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                    Improve conversions
                  </p>
                </li>
                <li className="d-flex pr-3">
                  <FaCheckCircle size={22} className="text-primary" />
                  <p className="pl-3" style={{ maxWidth: "calc(100% - 22px)" }}>
                    Reduce cost per acquisition
                  </p>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={5}>
              <Form>
                <Form.Group>
                  <Form.Control
                    type="name"
                    placeholder="Name"
                    className="bg-light form-border shadow-none rounded-0 border-top-0 border-left-0 border-right-0"
                    style={{ maxWidth: "400px", fontSize: "12px !important" }}
                  />
                </Form.Group>
                <Form.Group className="pt-1">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="bg-light form-border shadow-none rounded-0 border-top-0 border-left-0 border-right-0"
                    style={{ maxWidth: "400px" }}
                  />
                </Form.Group>
                <Form.Group className="pt-1">
                  <Form.Control
                    type="phone"
                    placeholder="Phone"
                    className="bg-light form-border shadow-none rounded-0 border-top-0 border-left-0 border-right-0"
                    style={{ maxWidth: "400px" }}
                  />
                </Form.Group>
                <Form.Group className="pt-1">
                  <Form.Control
                    as="select"
                    defaultValue="What can we help you with?"
                    className="bg-light form-border shadow-none rounded-0 border-top-0 border-left-0 border-right-0"
                    style={{ maxWidth: "400px" }}
                  >
                    <option disabled>What can we help you with?</option>
                    <option>Need more visitors, leads or sales</option>
                    <option>Need to redesign current website</option>
                    <option>Need to design and build a new website/app</option>
                    <option>Need to creat branding</option>
                    <option>Seeking Partnership or Employment</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
                <Button className="mt-2" variant="primary" type="submit">
                  Submit Your Request
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* footer */}
      <Container fluid className="bg-dark">
        <Container>
          <Row className="pt-3">
            <Col xs={12} md={4} className="my-5">
              <h1 className="text-left h1 text-light">Definitive Design</h1>
              <p className="text-info">
                Definitive Design is an established, full service web design and
                digital marketing agency in Chicago, Miami and Los Angeles with
                the mission to achieve big returns for our clients.
              </p>
              <p className="text-light text-right">
                <FaFacebookSquare size={32} />
                <FaTwitterSquare size={32} />
                <FaInstagramSquare size={32} />
                <FaLinkedin size={32} />
              </p>
              <p className="text-left text-light">Get In Touch</p>
              <p
                className="mt-2 text-left text-info mt-3"
                style={{ fontWeight: "600", fontSize: "0.8rem" }}
              >
                <HiPhone size={20} />: 613-555-4713
              </p>
              <p
                className="text-left text-info"
                style={{ fontWeight: "600", fontSize: "0.8rem" }}
              >
                <HiMail size={20} />: hello@definitivedesign.com
              </p>
            </Col>
            <Col xs={12} md={8} className="my-5 pl-5">
              <Row>
                <Col xs={8} md={4}>
                  <h4 className="text-left text-light">Quick Links</h4>
                  <p className="text-left text-info mt-3">Home</p>
                  <p className="text-left text-info">About Us</p>
                  <p className="text-left text-info">Services</p>
                  <p className="text-left text-info">Blog</p>
                  <p className="text-left text-info">Portfolio</p>
                  <p className="text-left text-info">Testimonials</p>
                  <p className="text-left text-info">Work With Us</p>
                  <p className="text-left text-info">Site Map</p>
                </Col>
                <Col xs={8} md={4}>
                  <h4 className="text-left text-light">Services</h4>
                  <p className="text-left text-info mt-3">
                    Landing Page Design
                  </p>
                  <p className="text-left text-info">UI/UX Design</p>
                  <p className="text-left text-info">Website Design</p>
                  <p className="text-left text-info">Identity and Branding</p>
                  <p className="text-left text-info">Wordpress Development</p>
                  <p className="text-left text-info">Mobile App Development</p>
                </Col>
                <Col xs={8} md={4}>
                  <h4 className="text-left text-light">Company</h4>
                  <p className="text-left text-info mt-3">Benefits</p>
                  <p className="text-left text-info">Services</p>
                  <p className="text-left text-info">Portfolio</p>
                  <p className="text-left text-info">Contact Us</p>
                  <p className="text-left text-info">Privacy Policy</p>
                  <p className="text-left text-info">Terms & Conditions</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                className="text-left text-light mt-5"
                style={{ fontWeight: "600" }}
              >
                Copyright © 2021 DefinitiveDesign. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
