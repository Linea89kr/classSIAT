import {useEffect, useState} from "react";

function InnerComp1({cnt1, setCnt1}) {

    const [cnt2, setCnt2] = useState(0)
    const increaseCnt1 = () => {
        setCnt1(i => i + 1)
    }
    useEffect(()=>{
        console.log(`InnerComp1 State 변경 감지`)
    //     물고 있건 물고 있지 않건 최상단에서 상황 변화가 감지되면 줄줄이 지웠다 랜더를 다시 함.
    })
    const increaseCnt2 = () => {
        setCnt2(i => i + 1)
    }

    return (
        <div>
            <h3>현재 카운트 수 <span>{cnt1}</span></h3>
            <div>
                <button onClick={increaseCnt1}>값 1 증가</button>
            </div>
            <h3>현재 카운트 수 <span>{cnt2}</span></h3>
            <div>
                <button onClick={increaseCnt2}>값 1 증가</button>
            </div>
        </div>
    )
}
export default InnerComp1