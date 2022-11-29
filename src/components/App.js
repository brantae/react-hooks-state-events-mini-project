import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //We are not adding new categories, but we are adding new tasks here therefore use state
  //state 'tasks' is initialized to the data 'TASKS'
  const [tasks, setTasks] = useState(TASKS)

  //updating state of our task and passing it back and forth
  const handleDelete = (text) => {
    console.log("text:", text)
    //filtering state
    setTasks(tasks.filter(task => task.text !== text))
    console.log("tasks:", tasks)
  }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={TASKS} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
 