import {useState} from "react";

function Outer2 (){
    const [count, setCount] = useState(0)
    console.log("rendering now!")

    function handleCount(){
        setCount(i => i+1)
    }

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={handleCount}>Click</button>
        </div>
    )
}
export default Outer2