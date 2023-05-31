import {useEffect, useState} from "react";

function usePlus(a,b){
    const [data, setData] = useState(0)

    useEffect(()=> {
        let result = 0;
        for(let i = a; i<b; i++){
            result += i;
        }
        setData(result)
    }, [a,b])
    return data;
}

export default usePlus;