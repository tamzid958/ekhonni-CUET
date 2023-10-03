import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function Header() {
  const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ border: '3px solid green' }}>
        <Container>
          <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'lightwhite', textDecoration: 'none' }}>
            <span style={{ fontSize: '24px', marginBottom: '5px' }}>Ekhoni</span>
            <div style={{ fontSize: '14px', fontFamily: 'italic', color: 'lightgray' }}>
              Buy and Sell Anything
            </div>
          </Link>

          <Nav className="me-auto">
            <Link href="/" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Home</Link>
            <Link href="/profile" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Profile</Link>
            <Link href="/post your AD" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Post your AD</Link>
          </Nav>

          <div className="ml-auto">
            <SearchBar />
          </div>

          {user ? (
            <div>
              <Button className="rounded-pill" variant="outline-primary" style={{ marginTop: '50px', height: '40px' }} onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button className="rounded-pill" variant="outline-primary" style={{ marginTop: '50px', height: '40px' }}>
              <Link href='/login'>Login</Link>
              </Button>
            </div>
          )}
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
