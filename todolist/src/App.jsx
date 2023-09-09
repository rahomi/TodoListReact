import React from "react"
import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./styles.css"

export default function App(){
  const [todos,setTodos] = useState([]); 
  function addItem(title){
    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        },
      ]
    })
  }


  function toggleTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id == id){
          return {...todo, completed}
        }
        return todo
      })
    });
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter( todo => todo.id != id)
    })
  }

  return( 
  <React.Fragment>
    <NewTodoForm onSubmit={addItem}/>
    <h1 className="header">TO DO LIST</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </React.Fragment>
  )
}