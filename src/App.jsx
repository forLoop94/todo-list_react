import { useState } from "react";
import "./styles.css";
import Task from "./components/Task";

function App() {
  const [newItem, setNewItem] = useState("");
  const [newtask, setNewTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask((currentTasks) => {
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
        {newtask.map(task => {
          return <Task key={task.id} task={task} setNewTask={setNewTask}/>
        })}
      </ul>
    </>
  );
}

export default App;
