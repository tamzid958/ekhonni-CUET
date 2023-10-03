
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ProductCard from './productCard';


function CardSection  ({ products }) {
  return (
    <div className='p-5'>
      <div className='border border-1 border-solid border-ddd p-5 mb-5'>
        <div className='row'>
            {products.map((product) => (
              <div key={product.id} className='col-sm-3'>
              <ProductCard product={product} />
              </div>
            ))}
      </div>
      </div>
      </div>   
  );
};

export default CardSection;






