import { useSelector } from "react-redux";
import { truncateText } from "../../helpers/helper";
import Product from "../common/Product";
import useJewelry from "../../hooks/useJewelry";

const JewelryPage = () => {
  useJewelry();
  const JewelryItems = useSelector((store) => store?.products?.Jewelry);
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Jewelry</h1>
      </header>

      <main className="p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {JewelryItems?.map((product) => (
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

export default JewelryPage;
