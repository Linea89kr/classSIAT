import {memo} from "react";

function Todos({todos, addTodo}){
    console.log("todos render")
    return(
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index)=>{
                return <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>add todos</button>
        </div>
    )
}
export default memo(Todos)