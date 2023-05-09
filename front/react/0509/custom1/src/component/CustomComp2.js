import usePlus from "../hoc/usePlus";

function CustomComp2(){

    let a= 1;
    let b = 10;
    let result = usePlus(a,b);

    return(
        <div>
            <h1>{result}</h1>
        </div>
    )
}
export default CustomComp2