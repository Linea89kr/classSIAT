import {useState} from "react";
import Inner1 from "./Inner1";

function Outer1(){
    const [num, setNum] = useState(0)
    return(
        <div>
            <Inner1></Inner1>
            <p>num : {num}</p>
            <button onClick={()=>setNum(state => state + 1)}>+1</button>
        </div>
    )
}

export default Outer1