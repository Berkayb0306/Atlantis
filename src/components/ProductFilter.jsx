import PropTypes from "prop-types";
import { List, Grid } from "lucide-react";

const ProductFilter = ({ onViewChange, onSortChange, onFilterClick }) => {
  return (
    <div className="flex justify-between items-center py-4">
      {/* Görünüm Seçimi */}
      <div className="flex space-x-4">
        <button onClick={() => onViewChange("grid")} className="p-2 border rounded-md">
          <Grid size={20} />
        </button>
        <button onClick={() => onViewChange("list")} className="p-2 border rounded-md">
          <List size={20} />
        </button>
      </div>

      {/* Sıralama Seçenekleri */}
      <select onChange={(e) => onSortChange(e.target.value)} className="border p-2 rounded-md">
        <option value="popularity">Popularity</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Best Rating</option>
      </select>

      {/* Filtreleme Butonu */}
      <button onClick={onFilterClick} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Filter
      </button>
    </div>
  );
};

ProductFilter.propTypes = {
  onViewChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default ProductFilter;
