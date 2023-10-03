
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from '../button/button';


function ProductCard({ product }) {
  return (
    <div className="" >
        <Row  className=" ">
          <Col>
            <Card>
            <Card.Img variant='top' src={product.imageUrl} alt={product.name} />
             <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <div className="mb-5 d-flex justify-content-around">
                <h4>${product.price}</h4>
                <Button/>
              </div>
            </Card>
          </Col>
        </Row>
    </div>
  );
}

export default ProductCard;




