import { Button, Col, Container, Form, Row } from "react-bootstrap";

export function SearchBar() {
  return (
    <Container className="mt-7">
      <Row>
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3 rounded-pill"
              style={{ width: '200px', height: '40px', backgroundColor: 'white' }} 
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary" style={{ height: '40px', color: 'white' }}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  ); 
};

export default SearchBar;
