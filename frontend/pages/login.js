import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { baseUrl } from '../utils/baseUrl'
import Header from '../components/header'
import Footer from '../components/footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${baseUrl}/api/v1/users/login`, requestBody);
      const user = response.data;

      localStorage.setItem('user', JSON.stringify(user));

      router.push('/');

    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="login-container">
        <Form className='login' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Button className="rounded-pill" variant="outline-primary" style={{ marginTop: '50px', height: '40px' }} onClick={(e) => handleSubmit(e)}>
                Login
              </Button>
            </Form.Group>

            <Form.Group as={Col}>
              <Button className="rounded-pill" variant="outline-primary" style={{ marginTop: '50px', height: '40px' }}>
                <Link href='/register' style={{
                  textDecoration: 'none',
                }}>Register</Link>
              </Button>
              <Form.Text className="text-muted">
                <p style={{ textAlign: 'center' }}>Do not have an account?</p>
              </Form.Text>
            </Form.Group>
          </Row>

        </Form>

      </div>
      <Footer />

    </div>
  );
}

export default Login;