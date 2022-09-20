import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from "react"
import Task from "./Task"

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

const [listedTasks, setTasks] = useState(TASKS)
const [listedCategories, setCategories] = useState(CATEGORIES)
const [taskClass, setClass] = useState('All')


const filterTasks = listedTasks
    .filter((task) => {
  if (taskClass === 'All'){
    return task
  } else if (task.category === taskClass){
    return task
  }
})

function onTaskFormSubmit(newTask){
  setTasks([...listedTasks, newTask])
}

console.log(filterTasks)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} listedCategories={listedCategories} setCategories={setCategories} tasks={TASKS} setClass={setClass} taskClass={taskClass}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filterTasks} categories={CATEGORIES} setTasks={setTasks}/>
    </div>
  );
}

export default App;
