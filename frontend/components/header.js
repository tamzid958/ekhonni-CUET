import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link href="/home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Ekhoni
            <div style={{ fontSize: '14px', color: 'lightgray' }}>
              Buy and Sell Anything
            </div>
          </Link>

          <Nav className="me-auto">
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/pricing">Post your AD</Link>
          </Nav>


          <div className="ml-auto">
            <SearchBar />
          </div>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
