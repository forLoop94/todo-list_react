import React from "react";

const Task = ({ task, setnewTask }) => {
  const toggleTodo = (id, completed) => {
    setnewTask(currentTasks => {
      return currentTasks.map(task => {
        if (task.id === id) {
          return { ...task, completed }
        }

        return task;
      })
    })
  }

  const removeTask = (id) => {
    setnewTask((currentTasks) => {
      return currentTasks.filter(task => task.id !== id);
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
      <button
      onClick={() => removeTask(task.id)} className="btn btn-danger">Remove</button>
    </li>
  );
};

export default Task;
