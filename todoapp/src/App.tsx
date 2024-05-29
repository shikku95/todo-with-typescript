import { useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";
type Tasks = {
  title: string;
  id: string;
};

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };
  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <>
      <div className="flex justify-center items-center h-full w-full flex-col gap-8">
        <form className="flex gap-3 " onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            placeholder="Type your todo..."
            className="rounded p-3 text-black"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(event.target.value);
            }}
          />
          <button type="submit" className="bg-pink-700 rounded p-3">
            Add
          </button>
        </form>
        {tasks.map((data) => (
          <div
            key={data.id}
            className="flex justify-between w-96 text-red-900 border border-green-600 rounded px-4 py-1 items-center"
          >
            <p>{data.title}</p>
            <MdDelete onClick={() => handleDelete(data.id)} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
