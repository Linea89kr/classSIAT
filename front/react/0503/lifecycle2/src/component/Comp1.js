import {useEffect, useState} from "react";

function Comp1(){
    const [cnt1, setCnt1] = useState(0)
    const [cnt2, setCnt2] = useState(0)

    useEffect(()=>{
        console.log(`Comp1이 리랜더링`)
        return () => {
            console.log(`이것은 해당 컴포넌트가 클린업 되었을 때 호출.`)
        }
    }, [cnt2])

    const increaseCnt1 = ()=>{
        setCnt1(i => i+1)
    }
    const increaseCnt2 = ()=>{
        setCnt1(i => i-1)
    }
    return(
        <div>
            <h3>현재 카운트 수: <span>{cnt1}</span></h3>
            <div>
                <button onClick={increaseCnt1}>값 1 증가</button>
                <button onClick={increaseCnt2}>값 1 감소</button>
            </div>
        </div>
    )
}
export default Comp1