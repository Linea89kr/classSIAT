import {useDeferredValue, useState} from "react";

let a = new Array(10000).fill(0)

function Outer4(){

//변수로 처리할 때.

    const [name, setName] = useState("")
let state1 = useDeferredValue(name)

    return(
        <div>
            {/*<input onChange={(e)=>{setName(e.target.value)}></input>*/}
            <input onChange={(e)=>{setName(e.target.value)}}/>

            {
                a.map((v, i)=>{
                    return <div key={i}>{state1}</div>
                })
            }
        </div>
    )
}
export default Outer4