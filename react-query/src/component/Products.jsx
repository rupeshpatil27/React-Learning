import { useSearchParams } from "react-router";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { FaCube, FaStar, FaTag } from "react-icons/fa6";
import { fetchProducts } from "../api/product";

import Pagination from "./Pagination";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white hover:shadow-xl flex flex-col row-span-1 transform hover:scale-105 transition duration-300 ease-in-out rounded-xl overflow-hidden border border-gray-200 hover:border-none">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-45 object-cover"
      />
      <div className="p-4 h-full flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <h2 className="text-lg font-semibold text-gray-800">{product.id}</h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-bold">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-green-600 text-sm">
            {product.discountPercentage}% OFF
          </span>
        </div>

        <div className="flex items-center text-yellow-500 text-sm">
          <FaStar className="w-5 h-5 mr-1" />
          {product.rating}
        </div>

        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center">
            <FaCube className="w-4 h-4 mr-1" />
            Stock: {product.stock}
          </div>
          <div className="flex items-center">
            <FaTag className="w-4 h-4 mr-1" />
            {product.brand}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const pageSize = parseInt(searchParams.get("limit")) || 10;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", { page: currentPage, limit: pageSize }],
    queryFn: fetchProducts,
    placeholderData: keepPreviousData,
  });

  const handlePageChange = (newPage) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", newPage);
      return params;
    });
  };

  const handlePageSizeChange = (newSize) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("limit", newSize);
      params.set("page", 1);
      return params;
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div className="flex justify-center items-center mt-10 px-10">
      <div className="w-full flex items-stretch flex-col box-border bg-white rounded-xl container-shadow">
        <div className="w-full flex items-center justify-between px-5 py-4 relative">
          <div className="text-xl font-medium">Products</div>

          <div className="absolute bottom-0 inset-x-0 border-b border-light border-opacity-10 w-full mt-2" />
        </div>

        <div className="w-full py-1 my-5 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[25rem] gap-5">
            {data?.products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
          <div className="mt-8">
            <Pagination
              totalItems={data?.total || 0}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
              showSizeChanger={true}
              showTotal={true}
              pageSizeOptions={["10", "20", "50", "100"]}
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

