import './App.css';
import {useState} from "react";

function App() {

    const [obj1, setObj1] = useState({name: "KJR", age: 17})

    function changeName() {
        setObj1({
            ...obj1,
            name: "yun",
            age: "영원한 17살"
        })
    }
    function deleteName() {
        delete obj1.name
        setObj1({...obj1
        }
        )
    }

    return (
        <div>
            <h1>이름: {obj1?.name}</h1>
            <h1>나이: {obj1.age}</h1>
            <button onClick={() => changeName()}>수정</button>
            <button onClick={() => deleteName()}>삭제</button>
        </div>
    );
}

export default App;
