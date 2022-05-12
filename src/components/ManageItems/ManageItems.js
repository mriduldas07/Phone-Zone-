import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddItemsBtn from '../AddItemsBtn/AddItemsBtn';
import InventoryDetailsForMange from '../InventoryDetailsForManage/InventoryDetailsForMange';

const ManageItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/phones")
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);
    return (
        <>
                <div className='mt-5 g-5'>
            <h2 id='items' className='text-center text-success'>All Items</h2>
            <Container>
                <Row>
                    {
                        items.map(item => <InventoryDetailsForMange
                        key={item._id}
                        item = {item}
                        ></InventoryDetailsForMange>)
                    }
                </Row>
            </Container>
        </div>
        <AddItemsBtn></AddItemsBtn>
        </>
    );
};

export default ManageItems;