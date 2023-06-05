import React from "react";

const Task = ({ task }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {task.title}
      </label>
      <button className="btn btn-danger">Remove</button>
    </li>
  );
};

export default Task;
