
import React from 'react';



function ProductsIndex ({products, onProductClick = () => {}} ) {

  const handleClick = id => event => {
    onProductClick(id);
  };

  return (
    <ul className="ProductsIndex">
    {
        
      products.map(
        p => (
          <li
            onClick={handleClick(p.id)}
            key={p.id}>
            {p.title}
          </li>
        )
      )
    }
    </ul>
  )
};

export default ProductsIndex;