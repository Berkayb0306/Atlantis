import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import ReactPaginate from "react-paginate";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { gender = "all", categoryName = "all", categoryId = "0" } = useParams();

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const limit = 25;

  const products = useSelector((state) => state.product.products);
  const totalProducts = useSelector((state) => state.product.total);
  const fetchState = useSelector((state) => state.product.fetchState);

  const totalPages = Math.max(1, Math.ceil(totalProducts / limit));

  useEffect(() => {
    const params = new URLSearchParams();
    if (categoryId && categoryId !== "0") params.append("category", categoryId);
    if (filter) params.append("filter", filter);
    if (sort) params.append("sort", sort);
    const offset = (page - 1) * limit;

    dispatch(fetchProducts(params.toString(), limit, offset));
  }, [dispatch, categoryId, filter, sort, page]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop Products</h2>

      <ProductFilter onViewChange={setView} onSortChange={setSort} onFilterChange={setFilter} />

      {fetchState === "FETCHING" ? (
        <div className="text-center text-lg font-semibold">Loading...</div>
      ) : fetchState === "FAILED" ? (
        <div className="text-center text-lg text-red-500">Failed to load products. Please try again later.</div>
      ) : products.length > 0 ? (
        <div
          className={`grid grid-cols-1 gap-6 ${view === "grid" ? "sm:grid-cols-2 md:grid-cols-4" : "md:grid-cols-2"}`} // Liste görünümü için de bir düzenleme yaptık
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              gender={gender}
              categoryName={categoryName}
              categoryId={categoryId}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}

      {totalProducts > limit && (
        <div className="flex justify-center mt-6">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            forcePage={page - 1 >= 0 ? page - 1 : 0}
            onPageChange={(selected) => setPage(selected.selected + 1)}
            containerClassName="flex justify-center space-x-2 mt-4"
            activeClassName="font-bold text-blue-600"
            pageClassName="px-3 py-2 border rounded-md cursor-pointer hover:bg-gray-100"
            previousClassName="px-3 py-2 border rounded-md cursor-pointer hover:bg-gray-100"
            nextClassName="px-3 py-2 border rounded-md cursor-pointer hover:bg-gray-100"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
};

export default ShopPage;