import "./Comp1.css"
function Comp1() {
    const color1={
     backgroundColor:"yellowgreen",
     color:"darkblue"
    }

    const cls2 = "cls2";
    return(
        <div>
            <h1 style={{backgroundColor:"brown", color:"yellow"}}>Inline Design1</h1>
            <h1 style={color1}>Inline Design2</h1>
            <h1 className={"cls1"}>CSS File Design1</h1>
            <h1 className={cls2}>CSS File Design1</h1>
        </div>
    )
}

export default Comp1