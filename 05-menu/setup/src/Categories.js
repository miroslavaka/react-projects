import React from 'react';

const Categories = ({ categories, filterItems }) => {
  console.log(categories);

  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              type="button"
              className="btn"
              onClick={() => {
                filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
