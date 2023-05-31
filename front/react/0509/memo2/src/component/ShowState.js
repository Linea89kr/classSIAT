import {useMemo} from "react";

const getNumber = (number) => {
    console.log("The num was changed")
    return number;
}

const getText = (text) => {
    console.log("The text was changed");
    return text;
}

function ShowState({number, text}){

    const showNumber = useMemo(()=> getNumber(number), [number]);
    const showText = useMemo(()=> getText(text), [text]);

    return(
        <div>
            {showNumber}<br></br>
            {showText}
        </div>
    )
}

export default ShowState;