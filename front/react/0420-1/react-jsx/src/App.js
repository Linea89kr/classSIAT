import './App.css';

import {useState} from "react";
import DivComp from "./components/DivComp";

// JSX 문법 특징
/*
* 하나의 엘리먼트가 반드시 감싸야 한다. (아닐 경우 frangment 혹은 <> 태그를 사용하여 묶어준다.)
* 자바스크립트 표현식을 사용할 수 있으며 속성, 혹은 컨텐츠에 사용 가능하다.
* 디자인이나 이벤트등의 속성 이름은 전부 카멜 케이스 형태로 변경하여 사용하여야 한다.
* JSX에서는 HTML에서 사용하던 몇몇 속성의 이름을 변경해서 사용하므로 주의할 것
* => 자세한 건 홈페이지의 DOM Element 참조
*
*
*
*
* */

function tag2() {
    return <h1>this tag is declared in outer rim</h1>
}

function App() {
    const name = "hb"
    const text1 = "zyx"
    let text2 = function () {
        return {__html: "<span style='color:green;'>abcdefghij</span>"};
    }
    useState(() => {
        // document.getElementById(`p1`).innerText=text2
    })

    function event1() {
        alert(`이벤트1`)
    }

    function tag1() {
        return <h1>This tag is runned by function</h1>
    }


    return (
        <div className="App">
            <h1 className="ha">빨간색 글씨</h1>
            <h1 className={name}>파란색 글씨</h1>
            <label htmlFor="abc">abc</label>
            <p id="text1">{text1}</p>
            <p dangerouslySetInnerHTML={text2()}></p>
            <button onClick={event1}>버튼</button>
            {tag1()}
            {tag2()}
            <DivComp></DivComp>
        </div>
    );
}

export default App;
