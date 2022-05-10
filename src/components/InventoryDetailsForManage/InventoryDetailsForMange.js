import { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const InventoryDetailsForMange = ({item}) => {
    const {_id,name,img,description,price,quantity,supplier} = item;
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/phones")
        .then(res => res.json())
        .then(data => setItems(data))
    },[items]);
    // delete data
    const handleDelete = _id =>{
        console.log(_id);
        const proceed = window.confirm("Are you sure to DELETE??");
        if (proceed) {
            const url = `http://localhost:5000/phones/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remaining = items.filter(itm => itm._id !== _id);
                setItems(remaining);
            })
        }
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
                            {
                                quantity?
                                ""
                                : 
                                <span className='text-danger' style={{backgroundColor: 'black', padding: '2px 5px', borderRadius: '5px'}}>Sold Out</span>
                            }
                        </Card.Text>
                        <Button onClick={() => handleDelete(_id)} variant="danger" className='w-100 '>Delete Stock</Button>
                </Card.Body>
        </Card>
        </Col>
    );
};

export default InventoryDetailsForMange;