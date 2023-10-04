import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorfulCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="text-center">
          <img
            style={{ borderRadius: '8px', width: '100%', maxHeight: '400px' }}
            src="https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png"
            alt=""
          />
        </div>

      
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="text-center">
          <img
            style={{ borderRadius: '8px', width: '100%', maxHeight: '400px' }}
            src="https://gepard.io/uploads/product-images-for-ecommerce-websites.jpg"
            alt=""
          />
        </div>

        
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="text-center">
          <img
            style={{ borderRadius: '8px', width: '100%', maxHeight: '400px' }}
            src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/57.png?itok=iesjjdzJ"
            alt=""
          />
        </div>

      </Carousel.Item>
    </Carousel>
  );
}

export default ColorfulCarousel;
