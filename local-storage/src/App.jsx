import useLocalStorage from "./component/useLocalStorage";

function App() {
  const [count, setCount,reset] = useLocalStorage("count", 0);

  return (
    <div className="h-screen w-full p-10">
      <h1 className="text-4xl font-extrabold text-center my-10">LocalStorage</h1>
      <div className="flex flex-col items-center justify-center gap-5 space-y-5">
        <p className="text-2xl font-semibold text-gray-400">{count}</p>

        <div className="flex items-center gap-5">
          <button onClick={() => setCount(count + 1)}>Count</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
