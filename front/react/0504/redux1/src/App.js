import './App.css';
import {useState, createContext} from "react";
import Outer from "./component/Outer";

export let UserContext = createContext();
// 손자 함수 쪽으로 바로 직배송 시키기. outer를 건너 뛰기.
function App() {
    const [num, setNum] = useState(0)
    return (
        <UserContext.Provider value={{num, setNum}}>
            <div>
                <Outer></Outer>
            </div>
        </UserContext.Provider>
    );
}

export default App;
