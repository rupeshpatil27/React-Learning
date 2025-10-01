export const fetchTodos = async ({ pageParam = 0 }) => {

  const response = await fetch(
    `https://dummyjson.com/todos?&skip=${pageParam}&limit=10`
  );
  const data = await response.json();
  return data;
};

export const fetchTodo = async (id) => {
  const response = await fetch(`https://dummyjson.com/todos/${id}`);
  const data = await response.json();
  return data;
};

export const fetchUser = async (id) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();
  return data;
};

export const createTodo = async (newTodo) => {
  const response = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  return response.json();
};

export const updateTodo = async ({ id, updates }) => {
  const response = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
