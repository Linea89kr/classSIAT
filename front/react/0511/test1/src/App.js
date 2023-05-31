import logo from './logo.svg';
import './App.css';
import MyComp1 from "./component/MyComp1";

function App() {
    return (
        <div>
            <h1>React Test</h1>
            <MyComp1></MyComp1>
            <img src={logo} className="app-logo" alt="logo" />

        </div>
    );
}

export default App;
