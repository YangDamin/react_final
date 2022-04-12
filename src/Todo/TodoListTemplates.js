import React from "react";
import './TodoListTemplates.css'

const TodoListTemplate = ({form, children}) =>{
  return(
    
    <main className="todo-list-template">
      <div className="todo-list-title">
        오늘 할 일
      </div>
      <section className="form-wapper" id="todoList">
        {form}
      </section>
      <section className="todoItemList-wrapper">
        {children}
      </section>
    </main>
  )
}

export default TodoListTemplate;