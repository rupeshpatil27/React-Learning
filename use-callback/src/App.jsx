import { useState } from "react";

const initialUsers = ["Alice", "Bob", "Charlie", "David", "Eva"];
function App() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");


  // Shuffle users
  const shuffleUsers = () => {
    const shuffled = [...users].sort(() => Math.random() - 0.5);
    setUsers(shuffled);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-[60%] w-[60%] bg-red-100 rounded-2xl flex flex-col items-center justify-start gap-2">
        <h1 className="text-4xl font-extrabold mt-2">useCallback</h1>

        <div className="space-x-4">
          <button onClick={shuffleUsers} className="bg-blue-400 py-2 px-2 rounded-xl text-white font-semibold">
            Shuffle
          </button>
        </div>

        <ul>
          {users.map((user,i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
