import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllElectronics } from "../features/productsSlice";
import { URLS } from "../utils/api";

const useElectronics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllElectronics();
  }, []);

  const getAllElectronics = async () => {
    try {
      const response = await fetch(URLS?.electronics);
      const data = await response.json();
      dispatch(addAllElectronics(data));
    } catch (error) {
      console.error("errors", error);
    }
  };
};

export default useElectronics;
