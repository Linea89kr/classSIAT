import './App.css';
import Comp1 from "./component/Comp1";
import Comp2 from "./component/Comp2";
import {useState} from "react";
import Comp3 from "./component/Comp3";

function App() {

    const [cnt, setCnt] = useState(0);
    return (
        <div>
            <Comp1></Comp1>
            <hr></hr>
            <Comp2></Comp2>
            <hr></hr>
            <Comp3 cnt={cnt}></Comp3>
        </div>
    );
}

// useReducer
/*
* - useState의 대체 함수
* - 다수의 하위 값을 포함하는 복잡한 정적 로직을 만드는 경우나 이젠 state 값에 의존적으로 활용하고자 하는 값의 경우 사용 가능하다.
* - useState와 상호보완적으로 사용 가능.
* - useReducer는 상위 컴포넌트에서 생성된 값을 받아 prop로 전달하는 형태에서 값을 useReducer에 집어넣어 사용이 가능한데, 이 경우 해당 값을 가공해야 하며,
* 맨 처음 함수를 생성할 때 init이라는 함수를 제공하여, 초기 state를 지정하는 것이 가능하다.
* - 다만 이 경우 상위 컴포넌트 와의 값의 동기화는 일어나지 않으며, 상위 컴포넌트의 값은 변하지 않고,
* 상위 컴포넌트의 값에 대한 변화를 차단하면서 해당 값에 대한 렌더링을 해야 할 경우, 이 방식을 사용할 수 있다.
*
*
* */

export default App;
