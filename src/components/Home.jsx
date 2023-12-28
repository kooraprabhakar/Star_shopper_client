import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShopperImg from '../assets/buy.png';
import SellerImg from '../assets/sell.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Container fluid>
                <Row xs={1} sm={2} className='g-4'>
                    <Col className='center' style={{ background: '#86fde8' }}>
                        <Card style={{ width: '80%', height: '80%', border: 'none', background: '#86fde8' }}>
                            <Card.Img variant="top" src={ShopperImg} />
                            <Button variant="primary" style={{ marginTop: 30 }} onClick={() => { navigate('/shopperAuth') }}>Shoppers Site</Button>
                        </Card>
                    </Col>
                    <Col className='center' style={{ background: '#348ac7' }}>
                        <Card style={{ width: '80%', height: '80%', border: 'none', background: '#348ac7' }}>
                            <Card.Img variant="top" src={SellerImg} />
                            <Button variant="light" style={{ marginTop: 60 }} onClick={() => { navigate('/sellerAuth') }}>Sellers Site</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
