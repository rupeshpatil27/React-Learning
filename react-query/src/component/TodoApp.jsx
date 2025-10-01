import React, { useMemo, useState } from "react";

import { useInView } from "react-intersection-observer";
import { message } from "antd";
import {
  useCreateTodo,
  useDeleteTodo,
  useTodos,
  useUpdateTodo,
} from "../hook/useTodos";
import TodoModal from "./TodoModal";

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
}

function Todo({ todo, setModalTodo }) {
  const update = useUpdateTodo();
  const del = useDeleteTodo();

  const handleToggle = () => {
    update.mutate({
      id: todo.id,
      updates: { completed: !todo.completed },
    });
  };

  const handleDelete = () => {
    del.mutate(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input type="checkbox" onChange={() => handleToggle(todo.id)} />
      <span onClick={() => setModalTodo(todo)}>{todo.todo}</span>
      <button onClick={() => handleDelete(todo.id)}>✕</button>
    </li>
  );
}

function TodoList({
  todos,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  setModalTodo,
}) {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setModalTodo={setModalTodo}
        />
      ))}

      {hasNextPage && (
        <div ref={ref} className="loading">
          {isFetchingNextPage ? "Loading more todos..." : "Scroll to load more"}
        </div>
      )}
    </ul>
  );
}

function TodoApp() {
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState("");
  const [modalTodo, setModalTodo] = useState(null);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useTodos();

  const createTodoMutation = useCreateTodo();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    createTodoMutation.mutate(
      { todo: newTask, completed: false, userId: 1 }, // dummy new todo
      {
        onSuccess: () => {
          setNewTask("");
          message.success("Todo Added!");
        },
        onError: (err) => {
          message.error(err?.message || "Something went wrong!");
        },
      }
    );
  };

  const todos = data?.pages.flatMap((page) => page.todos) || [];

  const filtered = useMemo(() => {
    return (todos || []).filter((t) => {
      if (filter === "active") return !t.completed;
      if (filter === "completed") return t.completed;
      return true;
    });
  }, [todos, filter]);

  if (isLoading) return <div>Loading todos …</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="app">
      <h1>📋 Modern To-Do App</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={newTask}
          placeholder="What's next?"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <TodoFilter filter={filter} setFilter={setFilter} />

      {/* Show fetching indicator (background fetch) */}
      {isFetching && <div>Syncing…</div>}

      <TodoList
        todos={filtered}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        setModalTodo={setModalTodo}
      />

      {modalTodo && (
        <TodoModal todo={modalTodo} onClose={() => setModalTodo(null)} />
      )}
    </div>
  );
}

export default TodoApp;
