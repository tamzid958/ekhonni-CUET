
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';
import Header from '../components/header';
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl'
import { useRouter } from 'next/router';

const CreateProduct = () => {

  const storedUser=typeof window!=='undefined'?localStorage.getItem('user'):null;
  const user = JSON.parse(storedUser);
  const router=useRouter();
  const [formData, setFormData] = useState({
    category: 'electronic',
    name: '',
    price: '',
    description: '',
    seller:`${baseUrl}/users/${user.id}`
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/products`, formData);

      alert('Product created successfully!');
      router.push('/');

    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product. Please try again later.');
    }
  };

  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <div className="form-container mb-5 mt-3" >
            <h2>Create a New Product</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="name">Product Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter product name" onChange={handleChange} value={formData.name} />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select name="category" id="category" onChange={handleChange} value={formData.category}>
                  <option value="electronic">Electronic</option>
                  <option value="book">Book</option>
                  <option value="grocery">Grocery</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" placeholder="Enter product price" onChange={handleChange} value={formData.price} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Product Description:</label>
                <textarea name="description" id="description" placeholder="Enter product description" onChange={handleChange} value={formData.description}></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default CreateProduct;
