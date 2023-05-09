import './App.css';
import Outer4 from "./component/Outer4";

function App() {
  return (
    <div>
<Outer4></Outer4>
    </div>
  );
}


// 성능 개선을 위한 hooks
/*
* - lazy import : 컴포넌트가 호출 되었을 때만 import 하도록 할 경우 사용
* - memo : state의 변화에 영향을 받지 않는 하위 컴포넌트의 재 랜더링을 막을 경우 사용
* - useMemo()/useCallback() : 랜더링이 되었을 시 데이터가 동일할 경우 기존 값을 그대로 사용하여 재 랜더링을 안하도록 하는
* hook, useMemo는 함수의 결과 값, useCallback은 함수에 걸어 사용할 수 있다.
* - Automatic Batching : set 변경 함수가 연속으로 실행되었을 경우 최종 결과만 갱신하여 랜더링 시키는 방식. v18 이상에서만 적용된다.
* - useTransaction()/useDefferredValue() : 상태 업데이트를 트랜잭션 처리하여 비동기 방식으로 처리되도록 하는 hook
* 이를 통해 컴포넌트 랜더링과의 딜레이 영향을 안받도록 세팅이 가능하다. useTransaction()은 함수에, useDefferrendvalue()는 변수에 사용 가능하다.
*
* */
export default App;
