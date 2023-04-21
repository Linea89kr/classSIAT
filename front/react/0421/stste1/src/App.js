// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(count)
    })

    const increase = ()=>{
        setCount(cnt=>cnt+1)
    }

    const decrease = () =>{
        setCount(cnt => cnt-1)
    }

    return (
        <div>
            <p>count : {count}</p>
            {/*<button onClick={()=>{setCount(count+1)}}>증가</button>*/}
            {/*<button onClick={() => setCount(cnt => cnt + 1)}>증가</button>*/}
            {/*<button onClick={() => setCount(cnt => cnt - 1)}>감소</button>*/}
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
        </div>
    )
}

// let isCount = 1;
//
// function App()
//  let isCount = 1;
//  function prinCount() {
//  ++isCount
//  console.log(isCount)
// document.getElementById("cnt").textContent=isCount;
//  }
// }
//
// return (
//     <div>
//         <p>count : <span id="cnt">{isCount}</span></p>
//         <button onClick={() => {
//             printCount()
//         }}>증가
//         </button>
//     </div>
// )


export default App;