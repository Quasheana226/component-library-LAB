import React from "react";
import { ProductDisplayProps } from '../../types';

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product, // The product object (name price etc)
  showDescription, //boolean shows visible 
  showStockStatus, //boolean Stock status is visible 
  onAddToCart, // Shows the add to car button
  children // pass content between component tags 

}) => {
  return (
    <div className=" bg-white rounded-x1 shadow-md p-6">
      <p className=" text-lg font-bold text-gray-900">{product.name}</p>

      <p className="text-md text-indgo-600 font-semibold">{product.price}</p>

      {showDescription && (
        <p className="text-sm text-gray-600 ">{product.price}</p>
      )}

      {showStockStatus && (
        <p className={product.inStock}></p>

      )}

      {children}

      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-4 px-4 py-2 bg-indgo-600 rounded-lg hover:bg-indgo-700">
          Add To Cart

        </button>
      )}



    </div>
  );
};
export default ProductDisplay;
