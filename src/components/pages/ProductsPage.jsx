import React, { useState, useEffect } from "react";
import { URLS } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../../features/productsSlice";

const ProductsPage = () => {
  const products = useSelector((store) => store.products?.allProducts);
  const dispatch = useDispatch();

  console.log(products, "products");
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch(URLS?.allProducts);
      const data = await response.json();
      dispatch(addAllProducts(data));
    } catch (error) {
      console.error("errors", error);
    }
  };

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Our Products</h1>
      </header>

      <main className="p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product?.id}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="w-full h-48 object-contain rounded-t-lg"
                />
                <h2 className="text-xl font-bold mt-4">{product?.title}</h2>
                <p className="text-gray-700 mt-2">
                  {truncateText(product.description, 100)}
                </p>
                <p className="text-blue-500 mt-4 font-bold">
                  ${product?.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
