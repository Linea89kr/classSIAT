import './App.css';
import Comp1 from "./component/Comp1";
import Comp2 from "./component/Comp2";

function App() {
  return (
    <div>
        <Comp1></Comp1>
        <Comp2>
            <h1>안녕하세요</h1>
            <h1>반갑습니다</h1>
        </Comp2>
    </div>
  );
}

export default App;
