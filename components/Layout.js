// import CategoryButtons from "./CategoryButtons"
import { Card, Col, Container, Row } from "react-bootstrap"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, categories }) => {
  return (
    <Container fluid>
      <Row>
        <Navbar />

        {/* <CategoryButtons categories={categories} /> */}
        <Col>{children}</Col>

        <Footer />
      </Row>
    </Container>
  )
}

export default Layout

// className="flex justify-center bg-gray-200"
// className="max-w-screen-lg flex flex-col min-h-screen w-full"
//  className="flex-grow"
