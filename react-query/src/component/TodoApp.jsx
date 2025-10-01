import React, { useMemo, useState } from "react";
import { message } from "antd";
import { useCreateTodo, useDeleteTodo, useTodos, useUpdateTodo } from "../hook/useTodos";
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
      <span onClick={() => setModalTodo(todo)} >{todo.todo}</span>
      <button onClick={() => handleDelete(todo.id)}>✕</button>
    </li>
  );
}

function TodoList({ todos, toggleTodo, deleteTodo, setModalTodo }) {
  return (
    <ul className="todo-list">
      {[...todos]
        .sort((a, b) => b.id - a.id)
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            setModalTodo={setModalTodo}
          />
        ))}
    </ul>
  );
}

function TodoApp() {
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState("");
  const [modalTodo, setModalTodo] = useState(null);

  const {
    data: todos,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
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

  const filtered = useMemo(() => {
    return (todos?.todos || []).filter((t) => {
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
        setModalTodo={setModalTodo}
      />

      {modalTodo && (
        <TodoModal todo={modalTodo} onClose={() => setModalTodo(null)} />
      )}
    </div>
  );
}

export default TodoApp;
