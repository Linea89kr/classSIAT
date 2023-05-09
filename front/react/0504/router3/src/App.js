
import './App.css';
import ParamComp1 from "./page/ParamComp1";
import {Route, Routes, useNavigate} from "react-router-dom";
import ParamComp2 from "./page/ParamComp2";

function App() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>{navigate("/param-search?id=2&name=홍길동")}}>move</button>
        <Routes>
            <Route path={"/param/:id"} element={<ParamComp1 />}></Route>
            <Route path={"/param-search"} element={<ParamComp2 />}></Route>
        </Routes>
    </div>
  );
}

//router
/*
* CSR 방식에서 페이지에 대한 이동을 시각적으로 제공하기 위해 마련된 서드파티 라이브러리
*  클라이언트에서 이루어지는 페이지 이동을 간단하게 하기 위해 제공되는 기능
* create-react-app에서는 해당 기능을 default로 제공하지 않기 때문에 반드시 install로 react-router-app을 다운받아 실행하여야 한다.
* */
// Router 설정 - BrowserRouter
/*
* HTML5의 history API를 활용해 ㅕrl을 통한 상태 저장을 하는 특징을 활ㅇ요하며 주송에 따라 보여지는 페이지를 다르게 활용할 수 있게 해주는 Router 컴포넌트
* - 보통 최상위 ㅑndex.js에 해당 태그를 설정하여 사용하는 형태로 router를 상요할 수 있ㄷ.
* 다른 태그들도 존재하지만 웹 브라우저 용으로 활용하기 위해서는 반드시 BrowserRouter를 써야 한다.
* */

// Router 사용 방법
/*
* <Routes>
* <Route path="주소 규칙" element=(보여줄 컴포넌트 or html 태그)>
* </Routes>
*  - 주의할 점은 만약 자바스크립트 로직을 넣어 활용해야 하는 경우 html 태그로 넣기 보단 컴포넌트로 활용하는 것을 권장한다.
* */
// Link & NavLink 사용방법
/*
* <Link to="이동할 주소":">컨텐츠</Link>
* <NaveLink to="이동할 주소" style={부여 스타일}>컨텐츠</NavLink>
* - Link는 클릭 시 이동할 주소에 매핑되는 라우트 페이지로 이동할 경우 사용한다.
* - navLink는 기능은 Link와 동일하지만 차이가 있다면 해당 Link 페이지의 활성화 여부에 따라 디자인을 다르게 먹일 수 있다.
* */
// Nested Route
/*
* - Route 페이지 내에 Route 페이지를 넣어야 할 경우 사용하는 기법
* - 다만 페이지를 너무 많이 사용할 경우 오히려 페이지의 난독화 및 복잡도만 높아지므로 페이지는 가능하면 3depth 이상 가져가지 않는다.
* - 필요에 따라서는 컴포넌트의 조합을 통해 하나의 페이지를 재사용하는 방향으로 가는 것이 가장 좋다.
* - 테마 별로 페이지를 가져가는 것도 좋지만 페이지의 모양을 보고 재사용할 수 있다면 같은 모양의 페이지에 컴포넌트만 바꿔서 기능 형태가 가장 이상적 - 순수하게 제 생각입니다.
* - 만약 페이지의 복잡도가 높아지고 페이지의 모양이 늘어난다 판단이 된다면 테마별로 페이지를 가져가는 것이 좋다.
* */
// ReactRouterHook
/*
* - React Router에서는 많은 Hook들을 제공하며 BrowserRouter에서 쓸 수 있는 대표적인 Hook들은 다음과 같다.
* - useParams : URL 패스 정보를 가져와 활용할 경우 사용
* - useSearchParams : URL 패스 정보 뒤의 쿼리 스트링 정보를 가져와 활용할 경우 사용
* - useNavigate : 페이지를 이동할 수 있는 함수를 사용할 경우 사용
* */

export default App;
