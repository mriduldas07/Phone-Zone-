import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddItemsBtn from '../AddItemsBtn/AddItemsBtn';
import InventoryDetailsForMange from '../InventoryDetailsForManage/InventoryDetailsForMange';

const ManageItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch("https://fathomless-basin-88878.herokuapp.com/phones")
        .then(res => res.json())
        .then(data => setItems(data))
    },[items]);
    return (
        <>
                <div className='mt-5 g-5'>
            <h2 id='items' className='text-center text-success'>Manage Inventories</h2>
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