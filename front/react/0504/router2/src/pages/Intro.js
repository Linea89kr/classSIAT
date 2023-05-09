import {Link, Outlet} from "react-router-dom";

function Intro(){
    return(
        <div>
            <h1>Here's Intro page</h1>
            <ul>
                <li><Link to={"/Home"}>HOME</Link></li>
                <li><Link to={"/About"}>About</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}
export default Intro;