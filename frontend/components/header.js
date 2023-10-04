import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

function Header() {
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  const router = useRouter();
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    router.push('/');

  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ borderRadius: "8px" }}>
        <Container>
          <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Ekhoni
            <div style={{ fontSize: '14px', color: 'lightgray' }}>
              Buy and Sell Anything
            </div>
          </Link>

          <Nav className="me-auto">
            <Link href="/" style={{ textDecoration: 'none', color: 'white', margin: '0 10px', fontFamily: 'Arial' }}>Home</Link>
          </Nav>

          <div className="ml-auto">
            <SearchBar />
          </div>

          {user ? (
            <div>
              <Button className="rounded-pill" variant="outline-primary" style={{ marginTop: '10px', height: '40px' }} onClick={handleLogout}>
                Logout
              </Button>
              <Link href="/profile" style={{ textDecoration: 'none', color: 'white', margin: '0 10px', fontFamily: 'Arial' }}>Profile</Link>
              {user.userType === 'SELLER' &&
                (
                  <Link href="/postAd" style={{ textDecoration: 'none', color: 'white', margin: '0 10px', fontFamily: 'Arial' }}>Post your AD</Link>
                )}
            </div>
          ) : (
            <div>
              <Button className="rounded-pill" variant="outline-primary" style={{ marginTop: '10px', height: '40px' }}>
                <Link href='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
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
