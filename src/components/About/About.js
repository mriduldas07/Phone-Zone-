import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='container my-5'>
            <h2 className="text-center py-2">About our phone Zone</h2>
            <img className='img-fluid' src={"https://i.ibb.co/PhWRp8k/jacques-dillies-jcav1-COVv-Oc-unsplash.jpg"} alt="" />
            <p className='my-3'><strong>Description of our work,</strong>A mobile warehouse is a facility to store goods,which is not permanently static, or based in a building. It could a trailer loaded with ready-packed goods,or a barge on the Thames filled with seasonal or frequently purchased items.Of course, it will have originally been supplied from a separate, static warehouse.But these goods will make it to their new owners far more easily and quickly when serviced from a mobile facility.This is a phone based warehouse.We store mobile phone of any kind.Anyone can be user of our website and also our housing system.We displayed your adding product and you can also update data further,delete your adding data and match more thing.</p>
            <Row>
                <Col sm={12} lg={6}>
                <img className='img-thumbnail' src={'https://i.ibb.co/5vd1Lhr/adrian-sulyok-scz-NLg6rrh-Q-unsplash.jpg'} alt="" />
                </Col>
                <Col sm={12} lg={6}>
                <img style={{height: '370px'}} className='img-thumbnail' src={'https://i.ibb.co/xFF42WK/warehouse.jpg'} alt="" />
                </Col>
            </Row>
            <p><strong>Benefits of mobile warehouses,</strong>The main advantage of a mobile warehouse is that the goods leave the warehouse at a point that closer than normal to the customer. This makes last mile delivery much faster.Our Warehouse "phoneZone" allows you to keep track of all your warehouse movements and data updating. With Warehouse, your goods are always exactly where they are needed – at the right time and in the right quantity, making both your warehouse workers and your customers happy. In conjunction with mobile data capture, internal warehouse processes are accelerated and orders can be picked and delivered faster. isWarehouse is not a disproportionate software with a multitude of functions that are not commonly used in everyday warehousing, rather it is based on a number of standard modules, which are adapted exactly to your needs. isWarehouse has clearly designed screens, which lead to all important modules and functions within just a few clicks.</p>
            <img style={{height: '500px'}} className='img-fluid w-100' src={'https://i.ibb.co/kyd8Ww2/warszawska-rog-szerokiej-TCk-Iri6lx-Eo-unsplash.jpg'} alt="" />
            <b><small>Front view of our wareHouse</small></b>
            <Row>
                <Col sm={12} lg={6}>
                <img style={{width: '150%', height:'305px'}} className='img-fluid' src={'https://i.ibb.co/zbBnt1h/ware2.jpg'} alt="" />
                </Col>
                <Col sm={12} lg={6}>
                <img style={{width: '150%'}} className='img-fluid' src={'https://i.ibb.co/YRxcTLq/ware1.jpg'} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default About;