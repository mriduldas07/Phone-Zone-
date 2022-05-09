import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemDetails from '../Home/ItemDetails/ItemDetails';

const ManageItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/phones")
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className='mt-5 g-5'>
            <h2 id='items' className='text-center text-success'>All Items</h2>
            <Container>
                <Row>
                    {
                        items.map(item => <ItemDetails
                        key={item._id}
                        item = {item}
                        ></ItemDetails>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageItems;