import './App.css';
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

/*
// Component
  - 웹을 구성하는 html, Element, css, javaScript의 단위
  - 리액트 내의 앱을 구성하는 단위
  - 재사용성의 극대화를 위해 기존의 자바스크립트의 web component의 개량판
  - 컴포넌트 내의 컴포넌트 함 수 이름은 항상 대문자로 시작한다.
  - UI를 재사용 가능한 개별적인 조각으로 나누고 각 조각을 용도에 맞춰 코딩한다.

// Component 선언 시 주의할 점
  - 한 개의 파일에는 가급적 하나의 컴포넌트만 넣어 사용할 것
  - 파일의 이름은 파스칼 케이스로 작성하며 컴포넌트 함수는 파일의 이름과 동일하게 작성할 것
*/

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
