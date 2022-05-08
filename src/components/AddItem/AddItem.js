import React from 'react';

const AddItem = () => {
    return (
        <div  className='login-form w-25 mx-auto'>
            <h2>Add Item</h2>
            <form>
                <input type="text" name="name" placeholder='Name' required/>
                <br />
                <br />
                <input type="text" name='description' placeholder='Description' required/>
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
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;