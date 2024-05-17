import React from "react";

import { useSelector } from "react-redux";
import useAllProducts from "../../hooks/useAllProducts";
import Product from "../common/Product";
import { truncateText } from "../../helpers/helper";
import Loading from "../common/Loading";

const ProductsPage = () => {
  useAllProducts();
  const products = useSelector((store) => store.products?.allProducts);

  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Our Products</h1>
      </header>

      <main className="p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((product) => (
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

export default ProductsPage;
