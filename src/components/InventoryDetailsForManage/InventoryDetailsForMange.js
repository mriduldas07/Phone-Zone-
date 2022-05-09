import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const InventoryDetailsForMange = ({item}) => {
    const {id,name,img,description,price,quantity,supplier} = item;
    return (
        <Col lg={4} md={4} sm={12} className='mt-4'>
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h5>Name: {name}</h5></Card.Title>
                        <Card.Text>
                            <p>Price: $ {price}</p>
                            <p>Supplier Name: {supplier}</p>
                            <p>Quantity: {quantity}</p>
                            <p>{description.slice(0,100) + '....'}</p>
                        </Card.Text>
                        <Button variant="danger" className='w-100 '>Delete Stock</Button>
                </Card.Body>
        </Card>
        </Col>
    );
};

export default InventoryDetailsForMange;