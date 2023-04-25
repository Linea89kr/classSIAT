import {useState} from "react";

function Comp5({val2, setVal2}) {
    const [idnum, setIdnum] = useState(0)
    const [innerText, setInnerText] = useState("")

    const inputArr = () => {
        setVal2([
            ...val2,
            {id: idnum, text: innerText}
        ])
    }
    const deleteArr = () => {
        setVal2(val2.filter(item => item.id !== idnum))
    }
    const onChagneId = (e) => {
        setVal2(val2.filter(item => item.id !== idnum))
        const {value} = e.target;
        setIdnum(value)
    }
    const onChagneText = (e) => {
        const {value} = e.target;
        setInnerText(value)
    }

    const modifyArr = (e)=>{
        setVal2(val2.map(item => item.id === idnum ? {id:item.id, text:innerText} : item))
    }

    return (
        <div>
            {/* 1. App.js 안의 val2를 아래와 같이 나열하세요   */}
            {/* <p>(id) : (text)</p>   */}
            {/* key값 삽입   */}
            {val2.map(obj => <p key={obj.id}>&nbsp;&nbsp;&nbsp;&nbsp;{obj.id}: {obj.text}</p>)}
            {/* 2. input 타입을 입력받아 input 타입 내에*/}
            {/* 1. 숫자를 삽입하여 삭제 버튼을 누를 시   */}
            {/* 2. 해당 숫자와 아이디 값이 같은 객체를   */}
            {/* 3. 삭제하는 로직을 만들어라.   */}
            <input type="text" onChange={onChagneId} value={idnum}></input>
            <input type="name" onChange={onChagneText} value={innerText}></input>
            <button onClick={inputArr}>추가</button>
            <button onClick={deleteArr}>삭제</button>
            <button onClick={modifyArr}>수정</button>
        {/* 3. input 타입 2개를 입력받아 input 타입 내에
           숫자와 내용을 삽입하여 추가 버튼을 누를 시
           해당 숫자와 아이디 값이 같은 객체를
           생성하여 추가하는 로직을 만드세요.*/}

        </div>
    )
}

export default Comp5;