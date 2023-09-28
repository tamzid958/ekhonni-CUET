import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ProductCard() {
  return (
    <div>
      <Container className="py-5">
        <h1 className="text-center">Popular Dishes</h1>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 py-5">
          <Col>
            <Card>
              <Card.Img variant="top" src='https://istockbd.com/cdn/shop/products/iPhone-14-Pro-Price-in-Bangladesh.jpg?v=1663330585&width=600' />
              <Card.Body>
                <Card.Title>iphone 14 pro </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur.
                </Card.Text>
              </Card.Body>
              <div className="mb-5 d-flex justify-content-around">
                <h4>190$-200$</h4>
                <Button variant="primary">Buy Now</Button>
              </div>
            </Card>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
}

export default ProductCard;
