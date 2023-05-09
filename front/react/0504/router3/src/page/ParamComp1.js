import {useParams} from "react-router-dom"
import Comp1 from "../component/Comp1";
import Comp2 from "../component/Comp2";
import Comp3 from "../component/Comp3";

function ParamComp1(){

    const {id} = useParams();

    const pageObj = {
        page1: (<Comp1></Comp1>),
        page2: (<Comp2></Comp2>),
        page3: (<Comp3></Comp3>)
    }
    // param이 null로 들어올 수도 있으니 null check이 필수.
    return(
        <div>
            <p>Param is now {id}</p>
            {pageObj["page"+id]}
        </div>
    )
}
export default ParamComp1