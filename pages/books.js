import Head from "next/head"
import { Card, Col, Container, Row, Button } from "react-bootstrap"

const allBooks = [
  {
    name: "Book 1",
    description: "A book description",
    cover: "https://picsum.photos/seed/book1/286/180",
    genre: ["History", "Science"],
    numOfPages: 20,
    numOfPoints: 200,
  },
  {
    name: "Book 2",
    description: "A book description",
    cover: "https://picsum.photos/seed/book2/286/180",
    genre: ["Sci-Fi"],
    numOfPages: 10,
    numOfPoints: 100,
  },
  {
    name: "Book 3",
    description: "A book description",
    cover: "https://picsum.photos/seed/book3/286/180",
    genre: ["History", "Science"],
    numOfPages: 20,
    numOfPoints: 200,
  },
  {
    name: "Book 4",
    description: "A book description",
    cover: "https://picsum.photos/seed/book4/286/180",
    genre: ["Adventure"],
    numOfPages: 10,
    numOfPoints: 100,
  },
  {
    name: "Book 5",
    description: "A book description",
    cover: "https://picsum.photos/seed/book5/286/180",
    genre: ["History", "Comic"],
    numOfPages: 40,
    numOfPoints: 400,
  },
  {
    name: "Book 6",
    description: "A book description",
    cover: "https://picsum.photos/seed/book6/286/180",
    genre: ["Comic"],
    numOfPages: 5,
    numOfPoints: 50,
  },
  {
    name: "Book 7",
    description: "A book description",
    cover: "https://picsum.photos/seed/book7/286/180",
    genre: ["Science"],
    numOfPages: 20,
    numOfPoints: 200,
  },
  {
    name: "Book 8",
    description: "A book description",
    cover: "https://picsum.photos/seed/book8/286/180",
    genre: ["Adventure"],
    numOfPages: 10,
    numOfPoints: 100,
  },
]

const BooksPage = ({ products }) => {
  return (
    <Container>
      <Head>
        <title>Kappa Books</title>
      </Head>

      <Row
        style={{ marginBottom: "2em" }}
        className="d-flex align-items-center"
      >
        <Col md={{ span: 7, offset: -10 }}>
          <h1 style={{ fontSize: "2rem" }}>Choose A Book</h1>
        </Col>

        <Col
          md={{ span: 7, offset: 10 }}
          className="d-flex justify-content-end align-items-center"
        >
          <p style={{ margin: 0 }}>Filters: Points | Genre | Difficulty</p>
        </Col>
      </Row>

      {/* <hr style={{ marginTop: '0.5em', marginBottom: '1.5em' }} /> */}

      <Row
        md={2}
        lg={4}
        style={{ margin: "0 auto" }}
        className="d-flex align-items-center justify-content-center"
      >
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        {allBooks.map((book) => (
          <Col key={book.name}>
            <Card style={{ marginBottom: "2.5em", width: "100%" }}>
              <Card.Img
                variant="top"
                src={book.cover}
                style={{ backgroundSize: "286px 180px" }}
              />

              <Card.Body>
                <Card.Title className="text-center">{book.name}</Card.Title>
                <Card.Text>{book.description}</Card.Text>

                {book.genre.map((genre) => (
                  <Card.Link
                    key={genre}
                    href={`/genre/${genre}`}
                    className="small"
                  >
                    {genre}
                  </Card.Link>
                ))}
              </Card.Body>

              <Card.Subtitle
                style={{ marginBottom: "1em" }}
                className="text-center small"
              >
                Pages: {book.numOfPages} | Points: {book.numOfPoints}
              </Card.Subtitle>

              <Button variant="outline-primary">Read</Button>
            </Card>
          </Col>
        ))}
        {/* ))} */}
      </Row>
    </Container>
  )
}

// export async function getStaticProps() {
//   const products = await getProducts()

//   console.log(products)

//   return { props: { products } }
// }

export default BooksPage
