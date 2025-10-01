import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/todo";

function TodoModal({ todo, onClose }) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user", todo.userId],
    queryFn: () => fetchUser(todo.userId),
    enabled: !!todo.userId,
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <h2>📝 Task Details</h2>
        <p>
          <strong>ID:</strong> {todo.id}
        </p>
        <p>
          <strong>Todo:</strong> {todo.todo}
        </p>
        <p>
          <strong>Completed:</strong> {todo.completed ? "✅ Yes" : "❌ No"}
        </p>

        {user ? (
          <p>
            <strong>User:</strong>{" "}
            {isLoading ? "Loading..." : `${user?.firstName} ${user?.lastName}`}
          </p>
        ) : (
          <p>
            <strong>User ID:</strong> {todo.userId}
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoModal;
