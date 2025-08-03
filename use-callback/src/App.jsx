import { useState } from "react";
import SearchInput from "./component/SearchInput";

const initialUsers = ["Alice", "Bob", "Charlie", "David", "Eva"];
function App() {
  const [users, setUsers] = useState(initialUsers);

  const handleSearch = (text) => {
    const filteredUsers = users.filter((user) =>
      user.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(text ? filteredUsers : initialUsers);
  };

  // Shuffle users
  const shuffleUsers = () => {
    const shuffled = [...users].sort(() => Math.random() - 0.5);
    setUsers(shuffled);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-[80%] w-[60%] bg-red-100 rounded-2xl flex flex-col items-center justify-start gap-2">
        <h1 className="text-4xl font-extrabold mt-2">useCallback</h1>

        <div className="space-x-4 flex flex-row gap-5 items-center my-5">
          <button
            onClick={shuffleUsers}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none transition-all"
          >
            Shuffle
          </button>

          <SearchInput onChange={handleSearch} />
        </div>

        <ul className="list-none p-0 w-64 mb-6">
          {users.map((user, i) => (
            <li
              key={i}
              className="bg-white p-4 mb-2 rounded-lg shadow-lg hover:bg-blue-50 transition-all"
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
