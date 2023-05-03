import {useEffect} from "react";

function InnerComp2({setPagenum}){

    useEffect(() => {
        console.log(`Start logic of InnerComp2`)
        return ()=>{console.log(`End logic of InnerComp2`)}
    },[])

    const exchangePage = () =>{
        setPagenum(n=>!n)
    }

    return(
        <div>
            <h1>InnerComp2</h1>
            <button onClick={exchangePage}>페이지 이동</button>
        </div>
    )
}

export default InnerComp2