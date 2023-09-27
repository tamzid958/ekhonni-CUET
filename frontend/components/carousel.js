import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ColorfulCarousel()  {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <div className="text-center"> { }
        <img
          style={{ width: '71%', height: '71%' }} 
          src="https://static.startuptalky.com/2022/06/Product-Image-Guide-for-Your-eCommerce-Store-StartupTalky--1-.jpg"
          alt=" "
        />
      </div>
        <Carousel.Caption>
        <div>
        <p style={{ color: 'orange' }}>Description </p>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="text-center"> { }
        <img
          style={{ width: '80%', height: '80%' }}
          src="https://gepard.io/uploads/product-images-for-ecommerce-websites.jpg"
          alt=" "
        />
      </div>
        <Carousel.Caption>
         
          <p style={{ color: 'green' }}>Description </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="text-center"> { }
        <img
        style={{ width: '71%', height: '71%' }}
          src="https://www.stockvault.net/data/2020/09/14/278904/thumb16.jpg"
          alt=" "
        
        />
       
        </div>
        <Carousel.Caption>
         
          <p style={{ color: 'pink' }}>Description </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ColorfulCarousel;
