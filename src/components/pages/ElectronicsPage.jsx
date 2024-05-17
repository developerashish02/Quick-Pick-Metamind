import React from "react";
import Product from "../common/Product";
import { useSelector } from "react-redux";
import { truncateText } from "../../helpers/helper";
import useElectronics from "../../hooks/useElectronics";
import Shimmer from "../common/Shimmer";

const ElectronicsPage = () => {
  useElectronics();
  const electronicsItems = useSelector((store) => store?.products?.electronics);

  if (electronicsItems?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Electronics</h1>
      </header>

      <main className="p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {electronicsItems?.map((product) => (
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

export default ElectronicsPage;
