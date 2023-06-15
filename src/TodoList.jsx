import { TodoItem } from "./TodoItem"

/* eslint-disable react/prop-types */
export function TodoList({todos}){
    return (
        
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
            return (
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id}  />
            )
        })}
  </ul>
    )
}