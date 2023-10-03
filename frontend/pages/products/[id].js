import React from 'react';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useState } from 'react';
import axios from 'axios';

const handleBidSubmit = async (e) => {
  e.preventDefault();

  const bidData = 

  try {
    await axios.post('http://localhost:8080/biddings', bidData);

    alert('Bid placed successfully!');
  } catch (error) {
    console.error('Error placing bid:', error);
    alert('Error placing bid. Please try again later.');
  }
};


const ProductDetails = ({ productName, price, seller, contact, description, category, productDescription }) => {
  const [bidAmount, setBidAmount] = useState('');
  <Form onSubmit={handleBidSubmit}>
  <Form.Group controlId="bidForm">
    <Form.Label>Your Bid</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your bid amount"
      value={bidAmount}
      onChange={(e) => setBidAmount(e.target.value)}
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    Place Bid
  </Button>
</Form>


  return (
    <Container>
      <Header />
      <Row>
        {}
        <Col md={6}>
          <Image
            src="https://www.deshify.com/images/thumbs/0015421_lige-men-watches-waterproof-multifunction-wrist-watch.jpeg"
            style={{ borderRadius: '8px', width: '75%', height: '75%' }}
            fluid
          />
        </Col>

        {}
        <Col md={6}>
          <h2>{productName}</h2>
          <p>Product Name: {productName}</p>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
          <p>Seller: {seller}</p>
          <p>Contact: {contact}</p>
          <h3>Description: {productDescription}</h3>
          <p>{description}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Seller</h3>
          <Form>
            <Button variant="primary" type="submit">
              Accepted
            </Button>
            <Button variant="primary" type="submit" style={{ marginLeft: '10px' }}>
              Rejected
            </Button>
          </Form>

        </Col>
      </Row>

      {}
      <Row>
        <Col>
          <h3>Place a Bid</h3>
          <Form>
            <Form.Group controlId="bidForm">
              <Form.Label>Your Bid</Form.Label>
              <Form.Control type="text" placeholder="Enter your bid amount" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Place Bid
            </Button>
          </Form>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ProductDetails;
