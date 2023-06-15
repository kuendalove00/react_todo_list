export function TodoItem({ completed, id, title, key }){
    return (
        <li key={key}>
                <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {title}
                </label>
                <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
            </li>
    )
}