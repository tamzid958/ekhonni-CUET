import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';

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

      console.log('Login successful!', response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="form-container">
      <Form className='form' onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;