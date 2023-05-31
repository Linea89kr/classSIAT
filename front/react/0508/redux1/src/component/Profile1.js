import {useDispatch, useSelector} from "react-redux";
import {changeMyName1} from "../store/store";

function Profile1(){

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    return(
        <div>
            <h1>내 소개</h1>
            <h3>name: {state.myProfile.name}</h3>
            <h3>age: {state.myProfile.age}</h3>
            <button onClick={()=>dispatch(changeMyName1("RHS"))}>change your name!</button>
        </div>
    )
}

export default Profile1;