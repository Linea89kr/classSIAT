function Comp4({val1, setVal1}) {
    const setCount = () => setVal1(val => ++val);
    const decrease = () => setVal1(val => --val);
    const doubleit = () => setVal1(val => val + 2);


    return (
        <div>
            <h1> count : {val1}</h1>
            <button onClick={setCount}>증가</button>
            <button onClick={decrease}>감소</button>
            <button onClick={doubleit}>2번 증가!</button>
        </div>)
}

export default Comp4