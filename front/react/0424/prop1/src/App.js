import './App.css';
import Comp1 from './component/comp1'
import Comp2 from './component/comp2'
import Comp3 from './component/comp3'
function App() {
  return (
    <div>
      <Comp1 vali="React"></Comp1>
      <Comp2 vali="React" color="blue"></Comp2>
      <Comp3></Comp3>
    </div>
  );
}

export default App;
