import {useState} from "react";
import Todos from "./Todos";

function Outer1() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {setCount(c => c+1)}
    const addtodo = () => {setTodos(t=>[...t, "new todos"])}

    return(
        <div>
            <Todos todos={todos} addTodo={addtodo}></Todos>
            <hr></hr>
            <div>
                count: {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}
export default Outer1