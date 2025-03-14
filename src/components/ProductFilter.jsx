import PropTypes from "prop-types";
import { List, Grid } from "lucide-react";

const ProductFilter = ({ onViewChange = () => {}, onSortChange = () => {}, onFilterChange = () => {} }) => {
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
        <option value="price:asc">Price: Low to High</option>
        <option value="price:desc">Price: High to Low</option>
        <option value="rating:asc">Rating: Low to High</option>
        <option value="rating:desc">Rating: High to Low</option>
      </select>

      {/* Filtreleme Input Alanı */}
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onFilterChange(e.target.value)}
        className="border p-2 rounded-md"
      />
    </div>
  );
};

ProductFilter.propTypes = {
  onViewChange: PropTypes.func,
  onSortChange: PropTypes.func,
  onFilterChange: PropTypes.func,
};

export default ProductFilter;