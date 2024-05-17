import React from "react";

const SortSelect = ({ sortOrder, onSortChange }) => {
  return (
    <div className="flex justify-end mb-4">
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortSelect;
