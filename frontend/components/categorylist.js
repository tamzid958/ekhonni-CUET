import React from 'react';
const ProductCategoryList = () => {
  const categories = [
      'Electronics',
      'Car',
      'Camera',
      'Game',
      'Mobile',
      'Lifestyle',
      'Bike',
      'Fasion',
      'Talevision',
      'Accessories',      
  ];

  return (
    <div className="categories">
      <div className="categories__all">
        <span>All Categories</span>
      </div>
      <ul >
        {categories.map((category, index) => (
          <li className='ab' key={index}>
              <a>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryList;

