import { useDispatch } from "react-redux";
import { URLS } from "../utils/api";
import { useEffect } from "react";
import { addAllWomen } from "../features/productsSlice";

const useWomen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllWomens();
  }, []);

  const getAllWomens = async () => {
    try {
      const response = await fetch(URLS?.womens_clothing);
      const data = await response.json();
      dispatch(addAllWomen(data));
    } catch (error) {
      console.error("errors", error);
    }
  };
};

export default useWomen;
