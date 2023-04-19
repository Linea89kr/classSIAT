import './App.css';

// create-react-app의 주요 파일
/*
  - App.css/App.js : 앱이 실행되는 메인 코드와 스타일시트, js는 컨테이너 관련 로직과 jsx가 작성되어 있다.
  - App.test.js : App.js를 테스트 할 때 사용되는 파일. jest 형식을 지원한다.
  - index.css/index.js : index.html과 연결된 js 파일과 css, 엔트리 포인트이다.
  - setupTest.js : 테스팅 라이브러리를 import 할 때 사용하는 파일. 테스팅과 관련된 파일을 여기서
                   받아 사용이 가능하다.
  - logo.svg : 앱에서 사용하고 있는 svg 파일이며 삭제해도 무관하다.
  - reportWebVitals.js : 앱의 퍼포먼스를 분석해주는 기능을 담은 파일.
                         객체 형태로 각 성능에 대한 수치를 제공한다.
부모태그는 꼭 div일 필요는 없음.
frangment 태그를 사용해도 된다. 단, 이 fragment는 처리 속도가 느려서 지양됨.
frangment를 사용하려면 import {fragment} from
-> 이렇게 쳐도 될 것.
<>
</>
*/

function App() {
    return (
        <div>
            <h1>a는 3보다 작습니다.</h1>
        </div>)
    const style = {
        backgroundColor: "yellow",
        fontSize: 20px
    }
    return (
        <div>
            <p style={style}>Hello World!</p>
        </div>
    )
}


//
// function App() {
//   return (
// <div>
//       <h1>Hello React!!!</h1>
// </div>
//   )
// }

export default App;
