import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Todo() {

const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskInput.trim()) return;
    
    setTasks([...tasks, { text: taskInput.trim(), completed: false }]);
    setTaskInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskStatus = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
        <button className="btn btn-primary home-button" onClick={() => navigate("/")}>Home</button>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add a new task Todo"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskStatus(index)}
            />
            <span className="ms-3" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button className="ms-3" onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
