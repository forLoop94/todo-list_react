import { useState } from "react";
import "./styles.css";

function App() {
  const [newItem, setNewItem] = useState("item 1");
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New task</label>
          <input value={newItem} type="text" id="item" placeholder="Enter new task" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Remove</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Remove</button>
        </li>
      </ul>
    </>
  );
}

export default App;
