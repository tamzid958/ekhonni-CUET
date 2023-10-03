import React from 'react';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useState, useEffect } from 'react';
import axios from 'axios';



const ProductDetails = ({ productName, price, seller, contact, description, category, productDescription ,biddings,product}) => {
  console.log(seller);
  let prod_id=product._links.product.href.split('/')[product._links.product.href.split('/').length-1];
  const storedUser=typeof window!=='undefined'?localStorage.getItem('user'):null;
  const user = JSON.parse(storedUser);
  const [bidAmount, setBidAmount] = useState('');
  const [bids,setBids]=useState([]);
  console.log(bidAmount);
  const handleBidSubmit = async (e) => {
    e.preventDefault();
    const bidData = {
      bidPrice: bidAmount, 
      buyer: `http://localhost:8080/users/${user.id}`, 
      product: `http://localhost:8080/products/${prod_id}`, 
    };

    try {
      await axios.post('http://localhost:8080/biddings', bidData);
      alert('Bid placed successfully!');
      fetchBids();
    } catch (error) {
      console.error('Error placing bid:', error);
      alert('Error placing bid. Please try again later.');
    }
  };

console.log(prod_id);





const fetchBids = async () => {
  try {

 
    

    if(user)
    {
      if(user.userType=="SELLER") {
        var response = await axios.get(
          `http://localhost:8080/biddings/search/findByProductId?id=${prod_id}`
        );
      }
      else{

          var response = await axios.get(
          `http://localhost:8080/biddings/search/findByProductIdAndBuyerId?p_id=${prod_id}&b_id=${user.id}`
        );
      }
    }

  
    console.log(response.data);

    const fetchedBids = response.data._embedded.biddings;
    setBids(fetchedBids); 
    return fetchedBids; 
  } catch (error) {
    console.error('Error fetching bids:', error);
    return []; 
  }
};





useEffect(() => {
  fetchBids().then((bidsData) => {
    console.log(bidsData); 
  });
}, []);


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
          <p>Product Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Seller: {seller.name}</p>
          <p>Contact: {seller.phoneNumber}</p>
          <h3>Description: {product.description}</h3>
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
              <Form.Control type="text" placeholder="Enter your bid amount" onChange={(e)=>setBidAmount(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=>handleBidSubmit(e)}>
              Place Bid
            </Button>
            <div>Current Bid: {bids.map(b=>b.bidPrice)}</div>
          </Form>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ProductDetails;

const getProductsWithoutPaginaton = async () =>{
  
    const response = await axios.get('http://localhost:8080/products');
    let data = response.data._embedded;


  return {data}
}

const getSellerInfo=async(id)=>{
  try {
    const response = await axios.get(`http://localhost:8080/products/${id}/seller`);
    const sellerData = response.data;
    return { sellerData };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { sellerData: null }; 
  }
}

const getOneProduct = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    const data = response.data;

    return { data };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { data: null }; 
  }
};


export async function getStaticPaths(){

  const {data} = await getProductsWithoutPaginaton()
  
  const paths = data.products.map((prod )=> ({
     params: { id:prod._links.product.href.split('/')[prod._links.product.href.split('/').length-1] }
  }))

return { paths, fallback: false }

}

export async function getStaticProps({ params }) {
  try {
    const { data } = await getOneProduct(parseInt(params.id));
    const {sellerData}=await getSellerInfo(parseInt(params.id))
    const product = data;
    const seller=sellerData; 

    return {
      props: { product,seller },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: { product: null }, 
    };
  }
}

