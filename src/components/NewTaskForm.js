import React from "react";
import {useState} from "react"

function NewTaskForm({categories, onTaskFormSubmit}) {

const [itemName, setItemName] = useState('')
const [categoryName, setCategoryName] = useState('Code')
const [searchBarInput, setSearch] = useState('')

const newTask = {
  text: itemName,
  category: categoryName,
}

function changeHandler(event){
  setItemName(event.target.value)
}

function dropDownHandler(event){
  setCategoryName(event.target.value)
}

function submitHandler(event){
  event.preventDefault()
  onTaskFormSubmit(newTask)
}

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input type="text" name="text" onChange={changeHandler} value={itemName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={dropDownHandler} value={categoryName}>
          {categories.map((category) => {
            if (category !== 'All')
            return <option>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
