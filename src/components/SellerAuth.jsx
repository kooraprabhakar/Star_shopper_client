import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import SellerImg from '../assets/sell.png';

const SellerAuth = () => {

    const [Lemail, setLemail] = useState('')
    const [Lpassword, setLpassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false); // Initially, show the registration form
    const navigate = useNavigate();


    const handleToggleForm = () => {
        setIsLogin(!isLogin); // Toggle between registration and login forms
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        await axios.post('https://star-shopper-server.onrender.com/sellerAuth', { name, email, password })
            .then(result => {
                console.log(result)
                setName('');
                setEmail('');
                setPassword('');
                setIsLogin(!isLogin);
            })
            .catch(err => console.log(err))

    }

    const handleLogin = async(e) => {
        e.preventDefault();
        await axios.post('https://star-shopper-server.onrender.com/sellerAuth/login' , {Lemail , Lpassword})
        .then(result => { console.log(result)
           if(result.data === "success"){
              navigate('/sellerMainPage')
           }
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Container style={{ margin: 0 }}>
                <Row style={{ width: '100vw' }}>
                    <Col className='center' style={{ background: '#12c2e9', borderRight: '2px solid grey' }}>
                        <Card style={{ width: '80%', height: '80%', border: 'none', background: '#12c2e9' }}>
                            <Card.Img variant="top" src={SellerImg} />
                            <Button variant="primary" style={{ marginTop: 30 }} onClick={() => { navigate('/shopperAuth') }} >
                               Go to Shopper Site
                            </Button>
                        </Card>
                    </Col>
                    <Col className='center' style={{ background: '#12c2e9' }}>
                        <Card style={{ width: '80%', height: isLogin ? '60%' : '80%', border: 'none', background: '#86fde8', padding: 20, borderRadius: 10 }}>
                            {isLogin ? ( // Show the login form
                                <Form onSubmit={handleLogin}>
                                    <h3 className='text-center' style={{fontFamily:'Agbalumo'}}> LOGIN FORM </h3>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={Lemail}  placeholder="Enter email" onChange={(e)=>{setLemail(e.target.value)}} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label> Password</Form.Label>
                                        <Form.Control type="password" value={Lpassword} placeholder="Enter Password" onChange={(e)=>{setLpassword(e.target.value)}} />
                                    </Form.Group>
                                    <div className='text-center'>
                                        <Button variant="primary" size="md" type="submit" style={{ width: '40%' }}>Login</Button> <br /><br />
                                        <span>Don't have an account? <strong className='hover' onClick={handleToggleForm}>Register</strong></span>
                                    </div>
                                </Form>
                            ) : ( // Show the registration form
                                <Form onSubmit={handleRegister}>
                                    <h3 className='text-center' style={{ fontFamily: 'Agbalumo' }}> REGISTER FORM </h3>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" value={name} placeholder="Enter FullName" onChange={(e) => { setName(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label> Password</Form.Label>
                                        <Form.Control type="password" value={password} placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} />
                                    </Form.Group>
                                    <div className='text-center'>
                                        <Button variant="primary" size="md" type="submit" style={{ width: '40%' }}>Register</Button> <br /><br />
                                        <span>Already have an account? <strong className='hover' onClick={handleToggleForm}>Login</strong></span>
                                    </div>
                                </Form>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SellerAuth;
