import './App.css';
import {useState} from "react";
import Comp4 from "./component/Comp4";
import Comp5 from "./component/Comp5"


// import Comp6 from "./component/Comp6";
function App() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState([
        {id: 0, text: "text1"},
        {id: 1, text: "text2"},
        {id: 2, text: "text3"},
        {id: 3, text: "text4"}
    ])
    console.log(val1,typeof vali)
    return (
        <div>
            <Comp4 val1={val1} setVal1={setVal1}></Comp4>
            <Comp5 val2={val2} setVal2={setVal2}></Comp5>
        </div>
    );
}

export default App;
