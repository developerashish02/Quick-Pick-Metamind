import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const Product = ({ product, truncateText }) => {
  const dispatch = useDispatch();

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
      <div className="flex flex-col items-end mt-4">
        <button
          onClick={() => dispatch(addToCart(product))}
          type="button"
          className=" text-white w-full bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
