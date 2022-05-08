import React from 'react';
import { Spinner } from 'react-bootstrap';

const LodingCompo = () => {
    return (
        <div style={{height: '200px'}} className='w-100 d-flex justify-content-center align-items-center mt-5'>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default LodingCompo;