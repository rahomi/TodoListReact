import React from "react"
import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem,setNewItem] = useState("");
  const [todos,setTodos] = useState([]);
  function handleSubmit(e){
    e.preventDefault();

    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        },
      ]
    })

    setNewItem("");
  }

  return( 
  <React.Fragment>
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input 
            type="text" id="item"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">TO DO LIST</h1>
    <ul className="list">
      {todos.map(todos => {
        return(
          <li key={todos.id}>
          <label>
            <input type="checkbox" checked={todos.completed}/>
            {todos.title}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        )
      })}
      
    </ul>
  </React.Fragment>
  )
}