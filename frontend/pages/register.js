// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import React from 'react';

// function Register() {
//   return (
//     <div className="form-container">
//     <Form className='form'>
//         <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Full Name</Form.Label>
//         <Form.Control type="name" placeholder="Enter Full Name" />
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//       <Form.Label htmlFor="inputPassword5">Password</Form.Label>
//       <Form.Control
//         type="password"
//         id="inputPassword5"
//         aria-describedby="passwordHelpBlock"
//         placeholder="Enter password"
//       />
//       <Form.Text id="passwordHelpBlock" muted>
//         Password must be 8-20 characters long, contain letters and numbers.
//       </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicUserType">
//       <Form.Label>User Type</Form.Label>
//       <Form.Select aria-label="Default select example">
//       <option value="1">Buyer</option>
//       <option value="2">Seller</option>
//     </Form.Select>
//     </Form.Group>

//     <Row className="mb-3">
//       <Form.Group as={Col} className="mb-3" controlId="formBasicContactNumber">
//           <Form.Label>Contact Number</Form.Label>
//           <Form.Control type="tel" placeholder="Enter contact number" pattern="[0-9]{11}" />
//         </Form.Group>

//       <Form.Group as={Col} className="mb-3" controlId="formBasicNID">
//         <Form.Label>NID</Form.Label>
//         <Form.Control type="tel" placeholder="Enter NID number" pattern="[0-9]" />
//       </Form.Group>
//       </Row>

//       <Row className="mb-3">
//        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
//          <Form.Label>Address</Form.Label>
//          <Form.Control placeholder="1234 Main St" />
//        </Form.Group>

//        <Form.Group as={Col} controlId="formGridPostCode">
//            <Form.Label>Post Code</Form.Label>
//            <Form.Control />
//          </Form.Group>

//        <Form.Group as={Col} controlId="formGridDistrict">
//            <Form.Label>District</Form.Label>
//            <Form.Control />
//          </Form.Group>
//      </Row>

//     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Register
//       </Button>
//     </Form>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    userType: 'BUYER',
    nid: '',
    address: '',

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
      const response = await axios.post('http://localhost:8080/api/users/register', formData);

      console.log('Registration successful!', response.data);

      setFormData({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        userType: 'BUYER',
        nid: '',
        address: '',

      });
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="form-container">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Password must be 8-20 characters long, contain letters and numbers.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserType">
          <Form.Label>User Type</Form.Label>
          <Form.Select
            name="userType"
            aria-label="Default select example"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="BUYER">Buyer</option>
            <option value="SELLER">Seller</option>
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formBasicContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              placeholder="Enter contact number"
              pattern="[0-9]{11}"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formBasicNID">
            <Form.Label>NID</Form.Label>
            <Form.Control
              type="tel"
              name="nid"
              placeholder="Enter NID number"
              pattern="[0-9]"
              value={formData.nid}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="1234 Main St"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>

         
        </Row>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;