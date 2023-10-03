import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCard from './productCard';

export const getStaticProps=async()=>{
  const result=await fetch("http://localhost:8080/products")
  const data= await result.json()
  return {
    props:{}
  }
}

function CardSection  ({data}) {
  console.log(data);

  return (
  <div className='p-5'>
    <div className='border border-1 border-solid border-ddd p-5 mb-5'>
       <div className='row'>
          <div className='col-sm-3'>
            <ProductCard product={data}/>
          </div>
          {/* <div className='col-sm-3'>
            <ProductCard/>
          </div>
          <div className='col-sm-3'>
            <ProductCard/>
          </div>
          <div className='col-sm-3'>
            <ProductCard/>
          </div> */}
       </div>
    </div>
    </div>   
  )
}

export default CardSection