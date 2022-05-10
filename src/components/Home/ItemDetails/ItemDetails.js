import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ItemDetails = ({item}) => {
    const {_id,name,img,description,price,quantity,supplier} = item;
    const navigate = useNavigate();
    const navigateToInventoryDetail = _id =>{
        navigate(`/inventory/${_id}`);
    } 
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
                            <p>{description?.slice(0,100) + '....'}</p>
                        </Card.Text>
                        <Button onClick={() => navigateToInventoryDetail(_id)} variant="warning" className='w-100 '>Stock Update</Button>
                </Card.Body>
        </Card>
        </Col>
    );
};

export default ItemDetails;