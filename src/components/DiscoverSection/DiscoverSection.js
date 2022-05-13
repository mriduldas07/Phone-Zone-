import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const DiscoverSection = () => {
    return (
        <div className='my-5 container' style={{backgroundColor: '#f0f0f0'}}>
            <h2 className='py-3'>Discover</h2>
            <Row style={{paddingBottom: '20px'}}>
                <Col sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'https://i.ibb.co/C11frFM/phone.png'} />
                    <Card.Body>
                        <Card.Title>EVERYDAY EPIC</Card.Title>
                        <Card.Text>
                        Get up to $160 when you trade in your current iPhone
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'https://i.ibb.co/stfLKPn/videocall.jpg'} />
                    <Card.Body>
                        <Card.Title>LIVE SERVICES</Card.Title>
                        <Card.Text>
                        You can update and delivered your product from anywhere
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'https://i.ibb.co/bv5k8FH/router.png'} />
                    <Card.Body>
                        <Card.Title>UNLIMITED DATA!</Card.Title>
                        <Card.Text>
                        from $37 month with vodafone Mobile Broadband
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DiscoverSection;