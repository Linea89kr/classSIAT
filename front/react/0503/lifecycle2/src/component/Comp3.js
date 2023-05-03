import {useState} from "react";
import InnerComp2 from "./InnerComp2";
import InnerComp3 from "./InnerComp3";

function Comp3(){

    const [pagenum, setPagenum] = useState(true)

    return(
        <div>
            {pagenum ? <InnerComp2 setPagenum={setPagenum}></InnerComp2> : <InnerComp3 setPagenum={setPagenum}></InnerComp3>}
        </div>
    )
}
export default Comp3