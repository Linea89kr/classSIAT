// 초기 변수
import {useEffect, useReducer} from "react";

const init = {count: 0}

// Reducer : 데이터에 대한 이벤트 함수를 제공
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement" :
            return {count: state.count - 1}
        default :
            throw new Error();
    }
}

function Comp2() {
    const [state, dispatch] = useReducer(reducer, init);

    useEffect(() => {
        console.log(`check Comp2's update`)
    })
    return (
        <div>
            <h2>Count : {state.count}</h2>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>


        </div>
    )
}

export default Comp2