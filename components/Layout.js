import { Fragment } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

{/* <Container fluid>
      <Row>
        <Navbar />

        <Col>{children}</Col>

        <Footer />
      </Row>
    </Container> */}

export default Layout;
