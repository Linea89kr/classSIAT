import './App.css';
import Intro from "./pages/Intro";
import {Routes, Route} from "react-router-dom";
import Default from "./pages/Default";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Intro />}>
          <Route index element={<Default />}></Route>
          <Route path={"/Home"} element={<Home />}></Route>
          <Route path={"/About"} element={<About />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
