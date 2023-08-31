import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../../assets/img/S1.jpg';
import img2 from '../../../assets/img/S2.jpg';
import img3 from '../../../assets/img/S3.jpg';
import img4 from '../../../assets/img/S4.jpg';
const BloodImg = () => {
  return (
    
    <Carousel id="carouselExampleControls" controls="true" fade>
    <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={img2} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={img3} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={img4} className="d-block w-100" alt="..." />
    </Carousel.Item>
  </Carousel>

  )
}

export default BloodImg