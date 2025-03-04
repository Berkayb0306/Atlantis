import { useState } from "react";
import PropTypes from "prop-types";
import { Grid, List } from "lucide-react";

const ProductFilter = ({ onViewChange, onSortChange, onFilterClick }) => {
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("popularity");

  const handleViewChange = (newView) => {
    setView(newView);
    onViewChange(newView);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-md mb-6">
      <p className="text-gray-700">Showing all 12 results</p>
      <div className="flex items-center space-x-4">
        {/* View Toggle Buttons */}
        <button
          className={`p-2 rounded-md ${view === "grid" ? "bg-gray-300" : "bg-white"}`}
          onClick={() => handleViewChange("grid")}
        >
          <Grid size={18} />
        </button>
        <button
          className={`p-2 rounded-md ${view === "list" ? "bg-gray-300" : "bg-white"}`}
          onClick={() => handleViewChange("list")}
        >
          <List size={18} />
        </button>
        {/* Sorting Dropdown */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border px-4 py-2 rounded-md focus:outline-none"
        >
          <option value="popularity">Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
        {/* Filter Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={onFilterClick}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

ProductFilter.propTypes = {
  onViewChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default ProductFilter;
