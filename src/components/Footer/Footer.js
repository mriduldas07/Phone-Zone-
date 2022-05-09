import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const getCurrentYear = () =>{
        let newDate = new Date().toDateString();
        return newDate;
    };
    return (
        <div className='footer'>
            <h4><span className='text-light'>Incredible stock. Flexible pricing. </span><span className='text-success'> Buy credits or subscribe today.</span> </h4>
                <Row className='row'>
                    <Col className='col1'>
                        <h2>pHoneZone</h2>
                        <input type="text" placeholder='English' />
                    </Col>
                    <Col>
                        <Row>
                            <Col className='middle-row'>
                                <h6>LEARN MORE</h6>
                                <br />
                                <p>
                                Plans and pricing
                                phonezone promo codes
                                Tips and tricks
                                Stock photos
                                </p>
                            </Col>
                            <Col className='middle-row'>
                                <h6>COMPANY</h6>
                                <br />
                                <p>About us
                                Press
                                Careers
                                Affiliates
                                Sell stock.
                                </p>
                            </Col>
                            <Col className='middle-row'>
                                <h6>SUPPORT</h6>
                                <br />
                                <p>
                                1 866 478 6251
                                Contact us
                                FAQ
                                Site map
                                24/7 support
                                </p>
                            </Col>
                            
                        </Row>
                    </Col>
                    <Col>
                        <h6>PRODUCTS</h6>
                        <br />
                        <p> Prices drop |
                        New products |
                        Best sales
                        </p>
                        <br />
                        <h6>YOUR ACCOUNT</h6>
                        <p>Personal info |
                        Orders |
                        Credit slips |
                        Addresses |
                        My alerts
                        </p>
                    </Col>
                </Row>
                <p className='text-center'>@{getCurrentYear()} | Copyright by phonezone</p>
        </div>
    );
};

export default Footer;