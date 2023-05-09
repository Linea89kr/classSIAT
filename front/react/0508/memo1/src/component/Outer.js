import Inner from "./Inner";
import {lazy, Suspense} from "react";

//Lazy Import
/*
* - 해당 컴포넌트가 호출 되었을 때만 import를 설정하고 싶을 경우 지정
* 성능에 엄청난 장애를 주지 않는 이상 자주 사용되지 않는다.
* lazy import를 사용할 경우 npm run build시 해당 *.js 파일을 새로 생성해 빌드 한다.
* lazy 로딩 시 해당 컴포넌트에 로딩 지연이 발생할 수 있으므로 이 경우에는 Suspense를 사용하요
* 지연 시 대신 할 태그를 넣어 돌릴 수 있다.
* */
//
const inner = lazy(() => import("./Inner"));

function Outer({num, func1}) {
    return (
        <div>
            <Suspense fallback={<div>로딩중...</div>}>
                <Inner num={num} func1={func1}></Inner>
            </Suspense>
        </div>
    )
}

export default Outer;