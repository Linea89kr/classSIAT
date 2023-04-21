import './App.css';
import {useState} from "react";

function App() {
    const [arr, setArr] = useState(["내용1", "내용2", "내용3"])


    // function spreadfunc1() {
    //     const liArr = [];
    //     for (let item of arr) {
    //         liArr.push(<li>{item}</li>)
    //     }
    //     return liArr;
    // }

    function increase(str) {
        // setArr([
        //     ...arr,
        //     cnt
        // ])
        setArr(arr.concat(str))
    }

    function modifyStr(oldVal, newVal) {
        setArr(arr.map(str =>
            ((str === oldVal) ? newVal : str))
        )
    }

    function deleteStr(Val) {
        setArr(arr.filter(str => (
            str !== Val))
        )
    }

    return (
        <div>
            <ul>
                {/*{spreadfunc1()}*/}
                {/*{arr.map(str=>(<li>{str}</li>))}*/}
                {arr.map((str, i) => (<li key={i}>{str}</li>))}
                <button onClick={() => increase("내용4")}>+</button>
                <button onClick={() => modifyStr("내용1", "content1")}>M</button>
                <button onClick={() => deleteStr("내용2")}>-</button>
            </ul>
        </div>
    );
}

export default App;
