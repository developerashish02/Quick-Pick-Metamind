import React from "react";

const Product = ({ product, truncateText }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={product?.image}
        alt={product?.title}
        className="w-full h-48 object-contain rounded-t-lg"
      />
      <h2 className="text-xl font-bold mt-4">{product?.title}</h2>
      <p className="text-gray-700 mt-2">
        {truncateText(product.description, 100)}
      </p>
      <p className="text-blue-500 mt-4 font-bold">${product?.price}</p>
    </div>
  );
};

export default Product;
