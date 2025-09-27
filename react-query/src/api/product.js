const fetchProducts = async ({ queryKey }) => {
  const [_key, { page, limit }] = queryKey;
  const skip = (page - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const data = await response.json();
  return data;
};

const autoSuggest = async ({ queryKey }) => {
  const [_key, { q }] = queryKey;
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${q}&limit=${8}`
  );
  const data = await response.json();
  return data;
};

const fetchCategories = async () => {
  const response = await fetch(`https://dummyjson.com/products/category-list`);
  const data = await response.json();
  return data;
};

export { fetchProducts, autoSuggest, fetchCategories };
