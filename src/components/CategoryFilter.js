import React from "react";
import Task from "./Task"
import {useState} from "react"


function CategoryFilter({categories, tasks, setClass, taskClass}) {

  function handleClick(event){
    setClass(event.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        const className = category === taskClass ? "selected" : null
        return <button className={className} key={category} onClick={handleClick}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
