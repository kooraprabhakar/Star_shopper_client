import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

import ShopperImg from '../assets/buy.png';
import Cart from '../assets/kart.png';
import User from '../assets/user.png';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar style={{ background: '#FCFF33' , height:'15vh' , padding:'0px' }} >
    <Container>
      <Navbar.Brand style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }} onClick={()=>navigate('/mainPage')}>
        <img
          alt=""
          src={ShopperImg}
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' '}
        <h4><strong>Star_Shopper</strong></h4>
      </Navbar.Brand>
      <Nav className="justify-content-end ">
        <Nav.Link>
          <img
            alt=""
            src={Cart}
            width="40"
            height="40"
            className="d-inline-block align-top"
            onClick={()=> navigate('/cart')}
          />
        </Nav.Link>
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
          <Button type="submit"  variant="light"  size="lg" onClick={()=>navigate('/shopperAuth')}>Logout</Button>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header