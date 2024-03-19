import { useState } from "react";
import uuid from "react-uuid";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import NotFound from "./components/NotFound/NotFound";
import Help from "./components/Help/Help"; // Import the HelpPage component

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: true,
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false,
    },
  ]);

  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  };

  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleAddTask = (description, status) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        description: description,
        done: status === "completed",
      },
    ]);
  };

  return (
    <>
      <Header />
      <main className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Tasks
                tasks={tasks}
                onStatusChange={handleStatusChange}
                onTaskRemove={handleTaskRemove}
                onClearTasks={handleClearTasks}
              />
            }
          />
          <Route
            path="/add"
            element={<Form onAddTask={handleAddTask} />}
          />
          <Route
            path="/help"
            element={<Help />}>
            {/* Nested routes for Help page submenu */}
            <Route path="add" element={<p>To add a new task, click on the "Add" link in the navigation menu. This will take you to the Add Task page, where you can enter the details of the task you want to add.</p>} />
            <Route path="remove" element={<p>
Here's a description for the remove task functionality in the Help page:

Remove Task:

To remove a task from your to-do list, follow these simple steps:

Navigate to the Task List: From the main menu, click on the "Tasks" link to access your list of tasks.

Identify the Task to Remove: Locate the task you want to remove from the list. You can easily identify tasks by their descriptions and statuses.

Initiate Removal: Once you've identified the task you wish to remove, hover over it or select it to reveal options for task management.

Select "Remove": Look for the "Remove" option or icon associated with the task you want to delete. Click on this option to initiate the removal process.</p>} />
            <Route path="change" element={<p>To change the status of a task from "Incomplete" to "Completed" or vice versa, follow these steps:

Navigate to the Task List: Start by navigating to the main task list by clicking on the "Tasks" link in the navigation menu.

Identify the Task: Locate the task for which you want to change the status. You can easily identify tasks by their descriptions and current statuses.

Select the Task: Once you've identified the task, hover over it or select it to reveal options for task management.

Change Status: Look for the option or icon that allows you to change the status of the task. This may be labeled as "Mark as Complete" or "Mark as Incomplete" depending on the current status of the task.</p>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
