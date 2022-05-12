import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';
import './InventoryItems.css'

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/phones")
        .then(res => res.json())
        .then(data => setItems(data))
    },[items])
    return (
        <div className='mt-5 g-5'>
            <h2 id='items' className='text-center text-success'>Inventory Items</h2>
            <Container>
                <Row>
                    {
                        items.slice(0,6).map(item => <ItemDetails
                        key={item._id}
                        item = {item}
                        ></ItemDetails>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default InventoryItems;