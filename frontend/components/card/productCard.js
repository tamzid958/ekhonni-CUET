
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from '../button/button';
import Link from 'next/link';


function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="" >
        <Row  className=" ">
        {product.map((singleProduct) => (
          <Col key={singleProduct.id}>
            <Card>
              {/* <Card.Img variant='top' src={singleProduct.imageUrl} alt={singleProduct.name} /> */}
              <Card.Body>
                <Card.Title>{singleProduct.name}</Card.Title>
                <Card.Text>{singleProduct.description}</Card.Text>
              </Card.Body>
              <div className="mb-5 d-flex justify-content-around">
                <h4>${singleProduct.price}</h4>
                <Link href={`/products/${singleProduct._links.product.href.split('/')[singleProduct._links.product.href.split('/').length-1] }`}>Click me</Link>
              </div>
            </Card>
          </Col>
        ))}
        </Row>
    </div>
  );
}

export default ProductCard;



