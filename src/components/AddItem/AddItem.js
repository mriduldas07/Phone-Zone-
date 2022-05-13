import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleFormSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            supplier: e.target.supplier.value,
            email: e.target.email.value,
            description: e.target.description.value,
            price: e.target.price.value,
            img: e.target.img.value,
            quantity: e.target.quantity.value
        };
        const url = `https://fathomless-basin-88878.herokuapp.com/phones`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            e.target.reset();
            navigate('/manageitems')
        })
    }
    return (
        <div  className='login-form w-25 mx-auto'>
            <h2>Add Item</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder='Name' required/>
                <br />
                <br />
                <input type="text" name="supplier" placeholder='Supplier Name' required/>
                <br />
                <br />
                <input type="email" name="email" value={user?.email} disabled/>
                <br />
                <br />
                <textarea type="text" name='description' placeholder='Description' required/>
                <br />
                <br />
                <input type="number" name="price" id="" placeholder='Price' required/>
                <br />
                <br />
                <input type="text" name='img' placeholder='Image URL' required/>
                <br />
                <br />
                <input type="number" name='quantity' placeholder='Quantity' required />
                <br />
                <br />
                <input type="submit" value="Add Item" className='mb-4'/>
            </form>
        </div>
    );
};

export default AddItem;