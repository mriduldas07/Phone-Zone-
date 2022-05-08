import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel className='container mt-5 banner'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: '600px'}}
      src="https://i.ibb.co/G5xLj5k/jonas-leupe-w-K-elt11p-F0-unsplash.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: '600px'}}
      src="https://i.ibb.co/XX3QbQV/priscilla-du-preez-Bjh-Uu6-Bp-UZA-unsplash.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: '600px'}}
      src="https://i.ibb.co/7KhYxT7/maxim-ilyahov-0a-Rycsf-H57-A-unsplash.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;