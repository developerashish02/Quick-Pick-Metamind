import { useDispatch } from "react-redux";
import { URLS } from "../utils/api";
import { addAllJewelry } from "../features/productsSlice";
import { useEffect } from "react";

const useJewelry = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllJewelry();
  }, []);

  const getAllJewelry = async () => {
    try {
      const response = await fetch(URLS?.jewelry);
      const data = await response.json();
      dispatch(addAllJewelry(data));
    } catch (error) {
      console.error("errors", error);
    }
  };
};

export default useJewelry;
