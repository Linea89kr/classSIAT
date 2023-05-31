
function Inner({num, func1}) {

    return(
        <div>
            <p>{num}</p>
            <button onClick={()=> func1(state => state +1)}>+1</button>
        </div>
    )
}

export default Inner;