import Head from "next/head"
import Link from "next/link"
import { Col, Container, Row, Button } from "react-bootstrap"

export default function Dashboard() {
  return (
    <Container style={{ minHeight: "90vh" }}>
      <Head>
        <title>Kappa Books | Dashboard</title>
      </Head>

      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>

      <Row>
        <Col
          style={{ height: "50vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Link href="/books" passHref>
            <Button variant="primary">+ Select your first book</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
