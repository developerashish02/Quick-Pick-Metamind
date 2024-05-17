import { useDispatch } from "react-redux";
import { URLS } from "../utils/api";
import { useEffect } from "react";
import { addAllMeans } from "../features/productsSlice";

const useMeans = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllMeans();
  }, []);

  const getAllMeans = async () => {
    try {
      const response = await fetch(URLS?.mens_clothing);
      const data = await response.json();
      dispatch(addAllMeans(data));
    } catch (error) {
      console.error("errors", error);
    }
  };
};

export default useMeans;
