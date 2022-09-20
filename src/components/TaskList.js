import React from "react";
import Task from "./Task"
import {useState} from "react"

function TaskList({tasks, categories, setTasks}) {


  return (
    <div className="tasks">
      <ul className="Tasks"> 
        {tasks.map((task) => {
          return <Task key={task.text} text={task.text} category={task.category} tasks={tasks} setTasks={setTasks}/>
        })}
      </ul>
    </div>
  );
}

export default TaskList;