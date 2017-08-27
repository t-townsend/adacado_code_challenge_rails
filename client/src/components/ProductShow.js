import React from 'react';

function ProductShow ({product, onBackClick = () => {}} ) {
  const {
    id = '', title = '', image = '', description = '', price = ''
  } = product;

  return (
    <div className="ProductShow">
      <a
        onClick={onBackClick}
        href="#">{'<<<'}</a>
      <h1>{title}</h1>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  )
}

export default ProductShow;