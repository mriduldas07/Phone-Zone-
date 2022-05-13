import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './InformationSection.css'

const InformationSection = () => {
    return (
        <div className='my-5 container'>
            <strong className='information'>Information for our users.</strong>
            <h3 className='d-flex justify-content-center my-4 container'>PULL A SWITCHEROO AND SAVE</h3>
            <Row className='pb-5'>
                <Col sm={6} md={3}>
                <Card border="danger" style={{ width: '16rem' }}>
                    <Card.Body>
                        <Card.Title>Data Rollover</Card.Title>
                            <Card.Text>
                            At the end of 31 days any unused data can roll over. Just purchase another data pack prior to expiry.
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={3}>
                <Card border="warning" style={{ width: '16rem' }}>
                    <Card.Body>
                        <Card.Title>We've got you covered</Card.Title>
                            <Card.Text>
                            In 98.5% of places where us Kiwis live and work. Check your coverage and discover more about 4G
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={3}>
                <Card border="success" style={{ width: '16rem' }}>
                    <Card.Body>
                    <Card.Title>Free browsing</Card.Title>
                            <Card.Text>
                            All Warehouse Mobile users can use on The Warehouse, Warehouse Stationery, The Market, Noel Leeming.
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={3}>
                <Card border="primary" style={{ width: '16rem' }}>
                    <Card.Body>
                        <Card.Title>Free next day delivery</Card.Title>
                            <Card.Text>
                                The warehouse delivered phones by clicking one by one.Seven days a week, straight to your door.
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default InformationSection;