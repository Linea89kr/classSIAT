import ShowState from "./ShowState";
import {useState} from "react";

function Outer() {

    const [number, setNumber] = useState(0)
    const [text, setText] = useState("")

    const increaseNum = () => {
        setNumber(prev => prev + 1)
    }

    const decreaseNum = () => {
        setNumber(prev => prev - 1)
    }


    const onChangeText = (e) => {
        setText.target.value
    }

    return (
        <div>
            <button onClick={increaseNum}>+</button>
            <button onClick={decreaseNum}>-</button>
            <input type="text" placeholder="last name" onChange={onChangeText}></input>
            <ShowState number={number} text={text}></ShowState>
        </div>
    )
}
export default Outer;