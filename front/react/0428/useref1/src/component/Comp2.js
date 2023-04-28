import {useRef, useState} from "react";

function Comp2() {
    const inputE1 = useRef(null)
    const [val, setVal1] = useState("");
    const onButtonClick = () => {
        inputE1.current.focus()
    }
    //useRef
    /*
    * - react에서는 실제 dom에 대한 사용을 지양하고 있으며 일부 dom은 사용하려고 하는 사람들은 기존의 dom보단 다른 방식으로 우회해서 사용하는 것을 react에서는 권장한다.
    * - 하지만 그럼에도 react에서 dom은 사용해야 할 경우가 있는데, 이럴 경우 useRef를 통해서 해당 react내에서의 dom지원을 받을 수 있다.
    * - useRef 사용 시 두가지 용도로 사용할 수 있는데,
    *   1. 재랜더링 시 값의 유지를 위해서 사용할 수 있지만 보통 이 용도로는 잘 사용하지 않으며
    *   2. React에서 DOM 지원을 받을 경우 사용하는 경우가 많다.
    * - 드래그 앤 드롭 및 비디오 제어 등의 HTML5 API 지원을 받고 자 하는 경우, useRef를 통해 자주 사용할 수 있다.
    *  - 다만 input value를 받아오는 등의 동작의 경우 가급적이면 useRef보다는 onChange 이벤트를 통해 가져오는 것을 추천한다.
    * - 주의: useRef를 너무 남발해서 사용하지 말 것 (사용하는 만큼 메모리에 눌러앉아 있게 된다)
    * */

    const getValue = () =>{
        console.log(inputE1.current.value)
    }
    return(
        <div>
            <input ref={inputE1} type="text"/>
            <button onClick={onButtonClick}>input에 포커스</button>
            <button onClick={getValue}>import data</button>
        </div>
    )
}
export default Comp2;