import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './searchbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Ekhoni
            <div style={{ fontSize: '14px', color: 'lightgray' }}>
              Buy and Sell Anything
            </div>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="#pricing">Post your AD</Nav.Link>
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
