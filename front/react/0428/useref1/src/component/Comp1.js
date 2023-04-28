import {useState, useRef} from "react";

function Comp1() {

    const [render, setRender] = useState(false);
    let countRef = useRef(0);
    let countVar = 0;

    console.log(`***** 랜더링 후 countRef : ${countRef.current}`)
    console.log(`***** 랜더링 후 countVar : ${countVar}`)

    const increaseVal = () => {
        countRef.current = countRef.current + 1;
        console.log(`Ref UP! ---> ${countRef.current}`)
    }

    const increaseRef = () => {
        countVar += 1;
        console.log(`Var UP! ---> ${countVar}`);
    }

    const doRender = () => {
        setRender(prevrender => !prevrender)
    }

    return (
        <div>
            <div>
                <p>Ref : {countRef.current}</p>
                <p>Var : {countVar.value}</p>
                <div>
                    <button onClick={increaseRef}>Ref UP!</button>
                    <button onClick={increaseVal}>Val UP!</button>
                    <button onClick={doRender}>Render!</button>
                </div>
            </div>
        </div>
    )
}

export default Comp1