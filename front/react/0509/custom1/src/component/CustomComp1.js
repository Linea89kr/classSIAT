function CustomComp1(){
    let a = 1;
    let b = 10;

    const forFunction = (a, b) => {
      let result = 0;
      for (let i = a; i<b; i++){
          return result += i;
      }
    }

    return(
        <div>
            <h1>{forFunction(a, b)}</h1>
        </div>
    )
}
export default CustomComp1