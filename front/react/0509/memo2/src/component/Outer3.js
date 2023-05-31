import {useState, useTransition} from "react";

let a = new Array(10000).fill(0)

function Outer3(){

const [name, setName] = useState("")
    const [isPending, startTransaction] = useTransition();

    return(
        <div>
            {/*<input onChange={(e)=>{setName(e.target.value)}></input>*/}
            <input onChange={
                (e)=>{
                    startTransaction(()=>{
                        setName(e.target.value)
                    })
                }}/>
            {
                a.map((v, i)=>{
                    return <div key={i}>{name}</div>
            })
            }
        </div>
    )
}
export default Outer3