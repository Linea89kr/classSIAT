import {useEffect, useReducer} from "react";

function init(initCount) {
    return {count: initCount}
}

function reducer(state, action) {
    switch (action.type) {
        case "increment" :
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1}
        default:
            throw new Error();
    }
}

function Comp3({cnt}) {
    const [state, dispatch] = useReducer(reducer, cnt, init)
    useEffect(()=>{
        console.log(`check update of reducer`)
    })
    return (
        <div>
            <h3>Count : {state.count}</h3>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        </div>
    )
}
export default Comp3