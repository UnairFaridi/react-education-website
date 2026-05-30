import { useState } from "react";

function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((t, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Student Dashboard
      </h1>

      <div className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-3 rounded-lg w-full"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-800"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <p
              className={
                t.completed
                  ? "line-through text-gray-500"
                  : ""
              }
            >
              {t.text}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => completeTask(index)}
                className="bg-green-500 text-white px-4 py-1 rounded"
              >
                Complete
              </button>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;