import {useEffect, useState} from "react";

function Comp1() {

    const [val1, setVal1] = useState(0)
    const [val2, setVal2] = useState(0)

useEffect(()=>{
    console.log(`from Comp1 Component`)
    // 랜더링이 실행 된 직후
    // 위의 setVal같은 변경감지는 잘 쓸 것. 잘못하면 무한루프 돔.
    return(
        ()=>{
            console.log("This will be show on when Comp1 will initialize")
            // 이건 초기화할 때 실행
            //
        }
    )
}, [val2])

    useEffect(()=>{
        console.log(`call at only first time`)
    }, [])
    // if you need to block render more.
    // useEffect(()=>{
    //     console.log(`from Comp1 Component`)
    // }, [])
    const setStateEvent1 = () => {
    setVal1(v=>v+1)
    }
    const setStateEvent2 = () => {
        setVal2(v=>v+1)
    }
    return (
        <div>
            <h1>from Comp1 Component</h1>
            <button onClick={setStateEvent1}>rerender it </button>
            <button onClick={setStateEvent2}>rerender it2 </button>
        </div>
    )
}

export default Comp1