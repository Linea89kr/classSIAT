import {useState} from "react";

function Comp1(){
    const [num, setNum] = useState(0);

    const increase = () =>{
        setNum(n => n+1)
    }

    const decrease = () =>{
        setNum(n => n-1)
    }

    return(
        <div>
        <h3>Count : {num}</h3>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}
export default Comp1