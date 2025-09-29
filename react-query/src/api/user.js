const fetchData = async (page) => {
  const response = await fetch(
    `http://localhost:3000/users?_sort=-id&${
      page ? `_page=${page}&_per_page=5` : ""
    }`
  );
  const data = await response.json();

  return data;
};

const addData = async (data) => {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Advanced React Query

const fetchUserById = async (id) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();
  return data;
};

const fetchPostsByUserId = async (id) => {
  const response = await fetch(`https://dummyjson.com/posts/user/${id}`);
  const data = await response.json();
  return data;
};

export { fetchData, addData, fetchUserById, fetchPostsByUserId };
