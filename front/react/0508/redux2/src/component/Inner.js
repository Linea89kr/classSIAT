import {useDispatch, useSelector} from "react-redux";
import {increaseNum1, decreaseNum1, increaseNum2} from "../store/numstore";
import {changeName2, changeName} from "../store/strstore"
import Profile1 from "./Profile1";
function Inner() {

    // useSelector를 통해 리듀서에 저장된 데이터에 접근이 가능해짐.
    const state = useSelector(state => state)
    // dispatch와 actionCreter 함수를 조합해서 action을 생성한다.
    const dispatch = useDispatch();

    return (
        <div>
            <h1>이것은 inner 페이지 입니다.</h1>
            <ul>
                <li>num : {state.num}</li>
                <li>str : {state.str}</li>
                <li><button onClick={()=>dispatch(increaseNum1())}>num 1 증가!</button></li>
                <li><button onClick={()=>dispatch(decreaseNum1())}>num 1 감소!!</button></li>
                <li><button onClick={()=>dispatch(increaseNum2(3))}>num 3 증가!!</button></li>
                <li><button onClick={()=>dispatch(changeName())}>xyz로 변경!</button></li>
                <li><button onClick={()=>dispatch(changeName2("FFF"))}>스트링 늘이기!</button></li>
                {/*상태가 바뀌면 액션이 실행되고, dispatch가 reducer를 호출하고, 그 reducer에서 함수와 값을 비교해서 변경.*/}
                <Profile1></Profile1>
            </ul>
        </div>
    )
}

export default Inner;