import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/phones")
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);

    useEffect( () =>{
        const email = user?.email;
        const url = `http://localhost:5000/myitems?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItem(data))
    },[]);

    // delete data
    const handleDelete = _id =>{
        const proceed = window.confirm("Are you sure to DELETE??");
        if (proceed) {
            const url = `http://localhost:5000/phones/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                const remaining = items.filter(itm => itm._id !== _id);
                setItems(remaining);
            })
        }
    }
    return (
        <div className='container'>
            <h2 className="text-center my-3">My Items</h2>
            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItem.map(item => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>$ {item.price}</td>
                                <td>{item.supplier}</td>
                                <td>{item.quantity}</td>
                                <td><Button onClick={() => handleDelete(item._id)} variant="danger" className='w-100 '>Delete Stock</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyItem;