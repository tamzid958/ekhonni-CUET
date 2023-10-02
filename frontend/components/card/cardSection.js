import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCard from './productCard';

function CardSection  () {

  return (
  <div className='p-5'>
    <div className='border border-1 border-solid border-ddd p-5 mb-5'>
       <div className='row'>
          <div className='col-sm-3'>
            <ProductCard/>
          </div>
          <div className='col-sm-3'>
            <ProductCard/>
          </div>
          <div className='col-sm-3'>
            <ProductCard/>
          </div>
          <div className='col-sm-3'>
            <ProductCard/>
          </div>
       </div>
    </div>
    </div>   
  )
}

export default CardSection