import React from 'react';

function ProductSummary (props) {
 
  return (
    <div
      style={{marginBottom: '10px'}}
      className="ProductSummary">
      <div><p>{props.title}</p> </div>
    </div>
  );
}

export default ProductSummary;