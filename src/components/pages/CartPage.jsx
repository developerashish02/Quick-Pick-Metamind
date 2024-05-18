import React from "react";
import { useSelector } from "react-redux";
import Product from "../common/Product";
import { truncateText } from "../../helpers/helper";
import Shimmer from "../common/Shimmer";

const CartPage = () => {
  const cartItems = useSelector((store) => store?.cart?.cart);
  const price = useSelector((store) => store?.cart?.totalPrice);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4 flex justify-center items-center space-x-4">
        <h1 className="text-3xl font-bold text-center">Cart</h1>
        <p> Total Price : {price?.toFixed(2)} </p>
      </header>

      <main className="p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cartItems?.map((product) => (
              <Product
                product={product}
                key={product?.id}
                truncateText={truncateText}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
