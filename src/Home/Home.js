import React, { useState } from "react";
// import { FaBeer } from "react-icons/fa";

function Home() {
  const [todo, setTodo] = useState([
    { id: 1, title: "Task 1", satus: false },
    { id: 2, title: "Task 2", satus: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  const addTask = () => {};

  // Delete task
  const deleteTask = () => {};

  // markDone
  const markDone = () => {};

  // cancelUpdate
  const cancelUpdate = () => {};

  // change Task
  const changeTask = () => {};

  // update Task
  const updateTask = () => {};

  return (
    <div className="home">
      <h1>To Do List App (React.JS)</h1>
      {todo && todo.length ? "" : "No tasks..."}
    </div>
  );
}

export default Home;
