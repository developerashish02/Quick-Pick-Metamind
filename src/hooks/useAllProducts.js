import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { URLS } from "../utils/api";
import { addAllProducts } from "../features/productsSlice";

const useAllProducts = () => {
  const dispatch = useDispatch();

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
};

export default useAllProducts;
