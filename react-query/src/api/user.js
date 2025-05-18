const fetchData = async () => {
  const response = await fetch("http://localhost:3000/users");
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

export { fetchData, addData };
