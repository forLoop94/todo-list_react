import React from "react";

const Task = ({ task, setNewTask }) => {
  const toggleTodo = (id, completed) => {
    setNewTask(currentTasks => {
      return currentTasks.map(task => {
        if (task.id === id) {
          return { ...task, completed }
        }

        return task;
      })
    })
  }

  return (
    <li>
      <label>
        <input type="checkbox"
        onChange={e => toggleTodo(task.id, e.target.checked)}
        />
        {task.title}
      </label>
      <button className="btn btn-danger">Remove</button>
    </li>
  );
};

export default Task;
