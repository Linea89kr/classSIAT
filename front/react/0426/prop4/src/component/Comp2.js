function Comp2({children}) {
    return(
        <div style={{border : "1px solid black"}}>
            {children}
        </div>
    )
}

export default Comp2

// Prop
/*
* - 프로퍼티의 줄임말
* - 상위 컴포넌트가 하위 컴포넌트에 값을 전달하여 하위 컴포넌트에서 해당 값을 그대로 사용함은 물론,
* 상위 컴포넌트의 이벤트를 하위 컴포넌트에서 실행할 수 있게 만들어주는 핸들러를 제공하는 등, 상위 컴포넌트와
* 하위 컴포넌트와 간의 원활한 데이터 이동을 위해 필요한 속성
* - 프로퍼티는 수정이 불가능하다. (읽기 전용 데이터)
* - 프로퍼티에 문자열을 전달할 때는 큰 따옴표를 쓰며, 문자열 외의 값을 전달할 때는 중괄호를쓴다.
* - 프로퍼티를 통해 일반 값을 전달 받게 되면 컴포넌트에서 컴포넌트로의 이동이 가능하며 만약
* 최상위 컴포넌트의 state를 하위 컴포넌트에서 받으려 하면 중간의 컴포넌트에서 프로퍼티를 통해
* 이를 받아 연결하여야 한다.
* - state의 변경 감지가 일어날 시 해당 state 를 prop로 받은 모든 컴포넌트의 재 랜더링이 일어나므로
* 렌더링 등의 범위를 반드시 신중하게 파악하고 prop를 사용하는 것을 권장함.
* - 만약 prop를 선언하였음에도 prop을 전달하지 않았을 경우 defaultProp을 사용할 수 있으며,
* 별도로 컴포넌트, defaultProp이라는 함수를 만들어 해당 디폴트 prop 속성에 대한 값을 선언하는 것이 가능하다.
* - 만약 컴포넌트 내에 프로퍼티 값이 아닌 태그를 삽입하려고 하는 경우, children이라는 속성을 활용하여
* 해당 컴포넌트에 직접 주입하는 것이 가능하지만, 권장되지는 않는다. (어떤 식으로 태그가 삽입될 지 알 수 없기 때문.)
* */