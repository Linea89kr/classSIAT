import {useSelector} from "react-redux";

function Inner() {

    const state = useSelector(state => state)

    return(
        <div>
            <h1>Inner Component</h1>
            <h2>Received num : {state.num}</h2>
            {/*<button onClick={()=>{state.num+1}}>+</button>*/}
            {/*<button onClick={()=>{(state.num-1)}}>-</button>*/}
        </div>
    )
}

export default Inner;