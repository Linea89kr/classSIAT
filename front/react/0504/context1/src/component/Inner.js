import {UserContext} from "../App";
import {useContext} from "react";

function Inner() {

    const {num, setNum} = useContext(UserContext)

    return(
        <div>
            <h1>Inner Component</h1>
            <h2>Received num : {num}</h2>
            <button onClick={()=>{setNum(num+1)}}>+</button>
            <button onClick={()=>{setNum(num-1)}}>-</button>
        </div>
    )
}

export default Inner;