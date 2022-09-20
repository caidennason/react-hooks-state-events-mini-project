import React from "react";
import {useState} from "react"
import TaskList from "./TaskList"

function Task({tasks, text, category, setTasks}) {

function handleRemove(event){
  const newTasks = tasks.filter((task) => task.text !== text)
  setTasks(newTasks)
}


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemove}>X</button>
    </div>
  );
}

export default Task;
