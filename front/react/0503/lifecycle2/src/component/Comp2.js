import {useEffect, useState} from "react";
import InnerComp1 from "./InnerComp1";

function Comp2() {
    const [cnt1, setCnt1] = useState(0)
    useEffect(()=>{
        console.log(`Comp2 State 변경 감지`)
    })
    return(
        <div>
            <h1>이것은 별도의 outerComp 예시입니다</h1>
            <InnerComp1 cnt1 = {cnt1} setCnt1 = {setCnt1}></InnerComp1>
        </div>
    )
}
export default Comp2;