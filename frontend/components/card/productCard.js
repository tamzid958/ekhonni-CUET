import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from '../button/button';

function ProductCard() {
  return (
    <div className="" >
      
        
        <Row  className=" ">
          <Col>
            <Card>
              <Card.Img variant="top" src='https://istockbd.com/cdn/shop/products/iPhone-14-Pro-Price-in-Bangladesh.jpg?v=1663330585&width=600' />
              <Card.Body>
                <Card.Title>iphone 14 pro</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur.
                </Card.Text>
              </Card.Body>
              <div className="mb-5 d-flex justify-content-around">
                <h4>190$-200$</h4>
                <Button/>
              </div>
            </Card>
          </Col>

        
        </Row>
       
    
    </div>
  );
}

export default ProductCard;
