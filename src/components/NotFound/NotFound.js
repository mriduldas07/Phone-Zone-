import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='container my-5 py-5'>
            <Card className="text-center">
            <Card.Header>Opps!!! There is no phone...</Card.Header>
                <Card.Body>
                    <Card.Title> <h1> 404 - Page Not Found</h1></Card.Title>
                        <Card.Text>
                        <img className='my-5' src={'https://i.ibb.co/ygJ6G96/eorror.png'} alt="" />
                        </Card.Text>
                        <Button  variant="success" onClick={() => navigate('/home')} >Back To Home</Button>
                </Card.Body>
            
            </Card>
        </div>
    );
};

export default NotFound;