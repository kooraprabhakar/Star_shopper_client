import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

import SellerImg from '../assets/sell.png';
import User from '../assets/user.png';

const SellerNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar style={{ background: '#FCFF33' }} >
    <Container>
      <Navbar.Brand style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }} onClick={()=>navigate('/sellerMainPage')}>
        <img
          alt=""
          src={SellerImg}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        <h4 style={{marginTop:'20px'}}><strong>Star_Seller</strong></h4>
      </Navbar.Brand>
      <Nav className="justify-content-end me-auto">
        <Nav.Link>
          <img
            alt=""
            src={User}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Nav.Link>
        <Nav.Link>
          <Button type="submit"  variant="light"  size="lg" onClick={()=>navigate('/sellerAuth')}>Logout</Button>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default SellerNavbar