import React, { useState } from 'react';
import Button from '@mui/material/Button'; // Corrected import statement
import { useTheme } from '@mui/material/styles'; // Corrected import statement

const categories = ['Category A', 'Category B', 'Category C', 'Category D'];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const theme = useTheme();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-list">
      <h3>Product Categories</h3>
      <div className="list-group">
        {categories.map((category) => (
          <Button
            key={category}
            color={selectedCategory === category ? 'primary' : 'secondary'}
            onClick={() => handleCategoryChange(category)}
          >
            <i className={`material-icons ${category === 'Category A' ? 'active' : ''}`}>
              category
            </i>
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
