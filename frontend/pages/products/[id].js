import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';
import dynamic from "next/dynamic";

const ProductDetails = ({ seller, product }) => {
  const prod_id = product._links.product.href.split('/')[product._links.product.href.split('/').length - 1];
  const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  const user = JSON.parse(storedUser);
  const [bidAmount, setBidAmount] = useState('');
  let [bids, setBids] = useState([]);
  const [isSeller, setIsSeller] = useState(false);
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetchBids();
    if (user && user.userType === 'SELLER') {
      setIsSeller(true);
    }
  }, []);

  const handleBidSubmit = async (e) => {
    
    if (!user) {
      return alert('Please login to place a bid');
    }
    e.preventDefault();
    const bidData = {
      bidPrice: bidAmount,
      buyer: `${baseUrl}/users/${user.id}`,
      product: `${baseUrl}/products/${prod_id}`,
    };
    try {
      const existingBuyerIndex = buyers.findIndex((buyer) => buyer.email === user.email);
      console.log(buyers);
      console.log(existingBuyerIndex);
      if (existingBuyerIndex == -1) {
        await axios.post(`${baseUrl}/biddings`, bidData);
        alert('Bid placed successfully!');
        fetchBids();
      }
      else {

        const bid_id = bids[0]._links.bidding.href.split('/')[bids[0]._links.bidding.href.split('/').length - 1];
        const updateBidUrl = `${baseUrl}/biddings/${bid_id}`;
        await axios.patch(updateBidUrl, {
          bidPrice: bidAmount
        });
        alert('Bid updated successfully!');
        fetchBids();
      }
    } catch (error) {
      console.error('Error placing bid:', error);
      alert('Error placing bid. Please try again later.');
    }
  };
  console.log(bids);
  var finalBuyers = [];

  const fetchBids = async () => {
    try {
      if (user) {
        let response;
        if (user.userType === 'SELLER') {
          response = await axios.get(
            `${baseUrl}/biddings/search/findByProductId?id=${prod_id}`
          );
        } else {
          response = await axios.get(
            `${baseUrl}/biddings/search/findByProductIdAndBuyerId?p_id=${prod_id}&b_id=${user.id}`
          );
        }
        const fetchedBids = response.data._embedded.biddings;
        if (fetchedBids.length > 0) {
          for (const bid of fetchedBids) {
            const buyerLink = bid._links.buyer.href;
            try {
              const buyerResponse = await axios.get(buyerLink);
              const buyerData = buyerResponse.data;
              finalBuyers.push(buyerData);
            } catch (error) {
              console.error('Error fetching buyer:', error);
            }
          }
          setBuyers(finalBuyers);
        }
        setBids(fetchedBids);
      }
    } catch (error) {
      console.error('Error fetching bids:', error);
    }
  };

  const acceptBid = async (url) => {
    try {
      await axios.patch(`${url}`, { status: 'accepted' });
      fetchBids();
    } catch (error) {
      console.error('Error accepting bid:', error);
    }
  };

  const rejectBid = async (url) => {
    try {
      await axios.patch(`${url}`, { status: 'rejected' });
      fetchBids();
    } catch (error) {
      console.error('Error accepting bid:', error);
    }
  };
  return (
    <Container>
      <Header />
      <Row>
        <Col md={6}>
          <Image
            src="https://www.deshify.com/images/thumbs/0015421_lige-men-watches-waterproof-multifunction-wrist-watch.jpeg"
            style={{ borderRadius: '8px', width: '75%', height: '75%' }}
            fluid
          />
        </Col>
        <Col md={6}>
          <p>Product Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Seller: {seller.name}</p>
          <p>Contact: {seller.phoneNumber}</p>
          <h3>Description: {product.description}</h3>
        </Col>
      </Row>

      {!isSeller && (
        <Row>
          <Col>
            <h3>Place a Bid</h3>
            <Form>
              <Form.Group controlId="bidForm">
                <Form.Label>Your Bid</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your bid amount"
                  onChange={(e) => setBidAmount(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={(e)=>handleBidSubmit(e)}>
                Place Bid
              </Button>
              <div>Current Bid: {bids.map((b) => b.bidPrice)}</div>
              <span>Status:{bids.map((b) => b.status)}</span>
            </Form>
          </Col>
        </Row>
      )}
      {isSeller && bids && bids.length > 0 && (
        <Row>
          <Col>
            <h3>Bid History</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Bidder</th>
                  <th>Price</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bids.map((bid, index) => (
                  <tr key={bid.id}>
                    <td>{buyers[index].name}</td>
                    <td>{bid.bidPrice}</td>
                    <td>{buyers[index].phoneNumber}</td>
                    <td>
                      {bid.status === 'accepted' ? (
                        <span>Accepted</span>
                      ) : bid.status === 'rejected' ? (
                        <span>Rejected</span>
                      ) : (
                        <>
                          <Button variant="primary" onClick={()=>acceptBid(bid._links.bidding.href)}>
                            Accept
                          </Button>{' '}
                          <Button
                            variant="primary"
                            style={{ backgroundColor: 'red' }}
                            onClick={() => rejectBid(bid._links.bidding.href)}
                          >
                            Reject
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
      <Footer />
    </Container>
  );
};

export default dynamic (() => Promise.resolve(ProductDetails), {ssr: false})




const getProducts = async () => {

  const response = await axios.get(`${baseUrl}/products`);
  let data = response.data._embedded;


  return { data }
}

const getSellerInfo = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}/seller`);
    const sellerData = response.data;
    return { sellerData };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { sellerData: null };
  }
}

const getOneProduct = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}`);
    const data = response.data;

    return { data };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { data: null };
  }
};


export async function getStaticPaths() {

  const { data } = await getProducts()

  const paths = data.products.map((prod) => ({
    params: { id: prod._links.product.href.split('/')[prod._links.product.href.split('/').length - 1] }
  }))

  return { paths, fallback: false }

}

export async function getStaticProps({ params }) {
  try {
    const { data } = await getOneProduct(parseInt(params.id));
    const { sellerData } = await getSellerInfo(parseInt(params.id))
    const product = data;
    const seller = sellerData;

    return {
      props: { product, seller },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: { product: null },
    };
  }
}


