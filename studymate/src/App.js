import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  // ADD TASK
  const addTask = (newTask) => {

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask
    ]);

  };


  // DELETE TASK
  const deleteTask = (taskId) => {

    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId
      )
    );

  };


  // EDIT TASK
  const editTask = (taskId, updatedTask) => {

    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? updatedTask
          : task
      )
    );

  };


  return (

    <div className="app">

      <Navbar />

      <main className="main-content">

        <Dashboard />

        <TaskForm
          addTask={addTask}
        />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />

      </main>

    </div>
  );
}

export default App;