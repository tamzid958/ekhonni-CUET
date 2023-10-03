import React, { useState } from 'react';
import Button from '@mui/material/Button'; // Corrected import statement
import { useTheme } from '@mui/material/styles'; // Corrected import statement

const ProductCategoryList = () => {
  // Define your product categories here
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

  return (
    <div className="list-group">
      {categories.map((category, index) => (
        <a
          href="#"
          key={index}
          className="list-group-item list-group-item-action"
        >
          {category}
        </a>
      ))}
    </div>
  );
};

export default ProductCategoryList;
