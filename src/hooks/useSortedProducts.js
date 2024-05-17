import { useState, useMemo } from "react";

const useSortedProducts = (products) => {
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      } else if (sortOrder === "highToLow") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  }, [products, sortOrder]);

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  return { sortedProducts, sortOrder, handleSortChange };
};

export default useSortedProducts;
