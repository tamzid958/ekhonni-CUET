import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from '../button/button';
import Link from 'next/link';

function ProductCard({ product }) {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="container py-5 ">
        <Row className="justify-content-center">
          {product.map((singleProduct) => (
            <Col md={8} lg={6} xl={4} key={singleProduct.id}>
              <Card style={{ borderRadius: '15px' ,marginBottom:'20px'}}>
                <div className="bg-image" >
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                    style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} className="img-fluid"  />
                 
                </div>
                
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title>{singleProduct.name}</Card.Title>
                      <p className="small text-muted">{singleProduct.category}</p>
                    </div>
                  </div>
                </Card.Body>

                <hr className="my-0" />

                <Card.Body>
                  <div className="d-flex justify-content-between">
                  <h4>${singleProduct.price}</h4>
                  </div>
                </Card.Body>

                <hr className="my-0" />

                <Card.Body>
                <div className='btn btn-medium btn-success text-decoration: none' >
                    <Link href={`/products/${singleProduct._links.product.href.split('/')[singleProduct._links.product.href.split('/').length - 1]}`} style={{
                      color:'white'
                    }}>Product Details</Link>
                  </div>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default ProductCard;