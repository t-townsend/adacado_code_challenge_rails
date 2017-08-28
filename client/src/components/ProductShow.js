import React from 'react';

function ProductShow ({product, onBackClick = () => {}} ) {
  
  const {
    id = '', title = '', description = '', image = '', price = ''
  } = product;

  return (
    <div className="ProductShow">
      <a
        onClick={onBackClick}
        href="#">{'<<<'}</a>
      <h1>{title}</h1>
      <img href={{image}}/>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  )
}

export default ProductShow;