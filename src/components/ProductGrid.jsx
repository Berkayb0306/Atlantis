import { useEffect, useState } from "react";
import axios from "axios";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products") // API'den ürünleri çek
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-gray-900 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
      
      {/* Sayfalandırma */}
      <div className="flex justify-center items-center mt-6">
        <button 
          className={`px-4 py-2 border rounded-l ${currentPage === 1 ? 'bg-gray-300' : 'bg-white'}`} 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Prev
        </button>
        {[...Array(Math.ceil(products.length / itemsPerPage))].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className={`px-4 py-2 border rounded-r ${currentPage === Math.ceil(products.length / itemsPerPage) ? 'bg-gray-300' : 'bg-white'}`} 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(products.length / itemsPerPage)))}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
