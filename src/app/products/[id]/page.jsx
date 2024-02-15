import React from 'react';

const ProductsId = ({params,searchParams}) => {
  console.log(params);
  return (
    <div>
      this page is for produts id :{params.id}
      <p>category : {searchParams.category}</p>
      <p>price : {searchParams.price}</p>
    </div>
  );
};

export default ProductsId;