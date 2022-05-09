import React from 'react';
import { Link } from 'react-router-dom';

const ManageLinkButton = () => {
    return (
        <div className='text-center my-3'>
            <Link to={'/manageitems'}>Manage All Items</Link>
        </div>
    );
};

export default ManageLinkButton;