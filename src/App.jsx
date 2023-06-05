import { useState } from "react";
import "./styles.css";
import Task from "./components/Task";

function App() {
  const [newItem, setNewItem] = useState("");
  const [newTask, setnewTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setnewTask((currentTasks) => {
      return [...currentTasks, { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    });

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New task</label>
          <input value={newItem}
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new task" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {/* short-circuiting */}
        { newTask.length === 0 && "No tasks yet!"}
        {newTask.map(task => {
          return <Task key={task.id} task={task} setnewTask={setnewTask} />
        })}
      </ul>
    </>
  );
}

export default App;
