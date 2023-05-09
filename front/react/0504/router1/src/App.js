import './App.css';
import {Link, NavLink, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Intro from './pages/Intro'

function App() {

    const activeStyle = {
        fontSize:"3rem",
        color:'green'
    }

    return (
        <div>
            <h1>Move to prev page</h1>
            <header>
                <ul>
                    {/*<li><Link to={"/"}>Intro</Link></li>*/}
                    {/*<li><Link to={"/About"}>About</Link></li>*/}
                    {/*<li><Link to={"/Home"}></Link>Home</li>*/}
                    <li><NavLink to={"/"} style={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>Intro</NavLink></li>
                    <li><NavLink to={"/Home"}  style={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>Home</NavLink></li>
                    <li><NavLink to={"/About"}  style={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>About</NavLink></li>
                </ul>
            </header>
            <Routes>
                <Route path={"/"} element={<Intro/>}></Route>
                <Route path={"/Home"} element={<Home/>}></Route>
                <Route path={"/About"} element={<About/>}></Route>
                <Route path={"*"} element={<Intro/>}></Route>
            </Routes>
            <h1>Move to next page</h1>
            <footer>

            </footer>
        </div>
    );
}

export default App;
