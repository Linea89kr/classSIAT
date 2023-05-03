import {useEffect} from "react";

function InnerComp3({setPagenum}){

    useEffect(() => {
        console.log(`Start logic of InnerComp3`)
        return ()=>{console.log(`End logic of InnerComp3`)}
    },[])
    // state에 변경이 있건 없건 상관 없이 화면이 다시 랜더되면 useEffect는 다시 실행 됨.
    const exchangePage = () =>{
        setPagenum(n=>!n)
    }

    return(
        <div>
            <h1>InnerComp3</h1>
            <button onClick={exchangePage}>페이지 이동</button>
        </div>
    )
}


// useEffect
/*
* - React에서의 lifecycle 상에서 각 포인트마다 이벤트를 실행시키기 위해 만들어진 리액트 훅
* - 컴포넌트의 생성 소멸 주기마다 해당 컴포넌트에 특정 이벤트를 실행시키기 위해 사용된다.
* - useEffect는 랜더링이 되고난 후 함수와 해당 컴포넌트가 화면에서 지워졌을 시 실행되는 Clean up function
* 그리고 state 변경감지 대상을 체크하는 배열로 이루어져 있다.
*
* - useEffect 일반 콜백: 해당 함수에서는 해당 컴포넌트가 랜더링이 되고난 후의 동작을 저으이할 수 있다.
* => 일번적으로 useRef와 같은 DOM 오브젝트에 연결하여 사용하기 위한 로직이나 이벤트들이 여기에 해당된다.
* => 다만 주의해야 할 점은 변경감지 함수를 조심해서 사용해야 한다. (자칫 잘못하면 무한 루프가 돌아갈 수 있다.)
*
* - useEffect return 함수: 해당 컴포넌트가 삭제되거나 리랜더링 전에 지워질 시 해당 컴포넌트에 아직 동작하고 있는 로직을 초기화 하기 위하여 사용되는 함수.
* 이 함수를 보통 clean up function이라 부르기도 한다.
* => 해당 컴포넌트 내에서 서버 상에 지속적으로 요청중인 소켓이나 타이머 function,복잡한 로직들이 여기에 속하며 해당 로직들을 Component가 삭제됨과
* 동시에 초기화를 하기 위해 해당 로직을 여기에 선언하게 된다.
*
* - 변경 감지 대상 배열 : useEffect가 실행될 경우 state에서 변경감지가 일어날 때 어떤 state가 변경감지가 일어나야 실제 useEffect함수를
* 실행할 것인가의 여부를 지정할 경우 변경감지 대상 배열에서 해당 state를 지정할 수 있다.
* => 만약 배열을 선언하지 않았다면 해당 컴포넌트 내에서 사용되는 모든 state에 대해 변경감지를 하여 useEffect를 실행하겠다라는 뜻이 된다. - All state
* => 빈 배열을 선언하게 되면 최초의 한번만 해당 로직이 실행되고 그 이후부턴 실행되지 않음. 단 해당 컴포넌트가 화면상에서 아예 지워졌다가 나올 경우 그 때는
* 변경감지 stae가 어떤 것인가에 상관 없이 해당 useEffect는 다시 실행됨.
* => [] 안에 관련 state를 넣으면 해당 state가 변경이 될 때마다 useEffect내의 클리어 function 및 일반 callback function이 실행됨.
* 관련된 state에 대해서만 변화가 일어날 시 관련 로직을 실행시킬 경우 사용 가능.
*
* = 참고 : [] 에 특정 useState 여부에 상관 없이 아예 컴포넌트가 지워졌다가 생성되는 경우 해당 컴포넌트의 useEffect는 무조건 실행된다.
*
*
* */


export default InnerComp3