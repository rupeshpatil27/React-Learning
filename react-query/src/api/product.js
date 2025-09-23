const fetchProducts= async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5&skip=0");
  const data = await response.json();
  return data;
};

export { fetchProducts };