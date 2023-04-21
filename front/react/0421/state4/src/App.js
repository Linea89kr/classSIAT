import './App.css';
import {useState} from "react";


// state
/*
* - 컴포넌트에서 이용할 수 있는 동적으로 이용할 수 있는 값, 혹은 상태
* - 값을 작성하거나 변경할 수 있는 객체를 보통 이벤트와 함께 사용한다.
* - 일반적으로 컴포넌트 내부에서 변경 가능한 데이터를 관리해야 할 경우 사용한다.
* - state를 활용하기 위해서는 useState라는 메서드를 받아와야 하며 해당 메서드는 'react'에
* 내장되어 있어, import를 받아서 사용해야 한다.
* - 형식 : const [데이터, 데이터 변경함수] = useState(초기값)
* - useState는 compnant 함수 안에 사용되어야 한다.
* */
// state와 객체 사용
/*
* - useState 사용하는 데이터 대상이 객체 혹은 배열일 경우 안의 내용만 교체시 랜더링이 되지 않는다.
* - 데이터의 내부 내용은 변화 되었지만, 주소는 동일하기에 같은 데이터라 판단하고 랜더링이 되지 않는다.
* - 이 경우 데이터를 새로 만들어 배포해야 하며, 바구조화 할당을 통해 로직의 단순화가 가능하다.
* */

// 배열 출력 시 주의점
/*
* - 배열 엘리먼트 풀력 시 반드시 엘리먼트의 속성에 key를 추가해야 한다.
* - key는 앨리먼트의 안정적인 고유성을ㅇ 부여하기 위해 반드시 필요하며 만약 쓰지 않을 경우 리액트는 에러를 출력한다.
* - key를 써야하는 이유는 리액트가 배열에 있는 모든 값을 랜더링할 때 체크를 진행하는데,
*  이 과정에서 키가 없을 경우 변경/삭제시 랜더링시 키 값을 통한 색인이 이루어지지 않으므로, 속도가 느려진다.
* - 또한 요소들의 순서가 바뀌면 엉뚱한 위치에 렌더링이 될 수가 있어 반드시 key를 지정해야 한다.
* - 단 이 경우 eky는 단순 인덱스 번호보다 임의의 고유값으로 넣는 것을 추천한다.
*
* 백엔드에서 index를 쓰니, 프론트에서 index에 대응할 id 값을 달라고 하는 게 보통 맞음.
* id의 경우 배열을 통해서 만들어진 객체를 탐색할 때 hash값을 기준으로 탐색을 한다.
* 속도를 위해서라도 서버의 index값에 대응되는 id값을 만들어서 자료를 관리하자.
* */

// input 타입 데이터를 가져올 시
/*
*  - input 데이터를 가져올 경우 onChange 이벤트를 통해 실시간으로 데이터를 state에 받아오는 방식을 사요한다.
* - 해당 방식을 이용하게 되면 기존의 DOM tree를 활용하지 않고 데이터를 받아올 수 있다.
* - 단 이 경우에는 e.target을 통해 해당 input 타입의 정보를 받아와야 하며, 이 정보를 이용해 state의 값을 계속 갱신해야 한다.
*
* */



function App() {

    const [inputs, setInputs] = useState({
            name: "",
            nickname: ""
        }
    )

    const {name, nickname}= inputs;

const onChange = (e) => {
  const{value, name} = e.target
    setInputs({
        ...inputs,
    [name] : value
    })
}

const onReset = () => {
    setInputs({
        name : "",
        nickname : ""
    })
}

    return (
        <div>
            <input type="text" placeholder="name" onChange={onChange} value={name}/>
            <input type="text" placeholder="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default App;