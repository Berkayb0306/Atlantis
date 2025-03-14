import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import ReactPaginate from "react-paginate";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();

  // State'ler
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const limit = 25; // Sayfa başına ürün sayısı

  const products = useSelector((state) => state.product.products);
  const totalProducts = useSelector((state) => state.product.total);
  const fetchState = useSelector((state) => state.product.fetchState);

  const totalPages = Math.ceil(totalProducts / limit);

  // API isteğini güncelle
  useEffect(() => {
    const params = new URLSearchParams();
    if (categoryId) params.append("category", categoryId);
    if (filter) params.append("filter", filter);
    if (sort) params.append("sort", sort);
    const offset = (page - 1) * limit;
    
    dispatch(fetchProducts(params.toString(), limit, offset));
  }, [dispatch, categoryId, filter, sort, page]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop Products</h2>
      
      {/* Filtreleme Bileşeni */}
      <ProductFilter 
        onViewChange={setView}
        onSortChange={setSort} 
        onFilterChange={setFilter} 
      />
      
      {fetchState === "FETCHING" ? (
        <div className="text-center text-lg font-semibold">Loading...</div>
      ) : products.length > 0 ? (
        <div className={`grid grid-cols-1 ${view === "grid" ? "sm:grid-cols-2 md:grid-cols-4" : ""} gap-6`}>
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={{
                ...product,
                title: product.title && product.title !== "Ürün Başlığı Mevcut Değil" ? product.title : product.description?.slice(0, 30) || "Ürün Başlığı Yok",
              }} 
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}

      {/* Sayfalama Bileşeni */}
      <div className="flex justify-center mt-6">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          forcePage={page - 1} // ReactPaginate 0 tabanlı index kullanıyor, bu yüzden 1 çıkarıyoruz
          onPageChange={(selected) => setPage(selected.selected + 1)}
          containerClassName={"flex justify-center space-x-2 mt-4"}
          activeClassName={"font-bold text-blue-600"}
          pageClassName={"px-3 py-2 border rounded-md cursor-pointer"}
          previousClassName={"px-3 py-2 border rounded-md cursor-pointer"}
          nextClassName={"px-3 py-2 border rounded-md cursor-pointer"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    </div>
  );
};

export default ShopPage;