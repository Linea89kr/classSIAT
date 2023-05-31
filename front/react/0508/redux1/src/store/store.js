import {configureStore, createSlice} from "@reduxjs/toolkit";


//state
// 넣고자 하는 데이터에 대한 이름 및 값을 세팅
// 실제 접근하는 이름: createSlice의 키인 name:'sth'
// let num이 컴포넌트에서 접근하는 키워드가 아님!
// initialState: 정의한 상태의 초기값.
let num = createSlice({
    name: 'num',
    initialState: 3,
    reducers: { // state에 대한 변경 함수는 reducers 라고 하는 키에 넣어서 사용이 가능하다.
        increaseNum1(state) { // 기존 state 상태 값을 인자에 넣어서 사용이 가능하다.
            return state + 1;
        },
        decreaseNum1(state) {
            return state - 1;
        },
        increaseNum2(state, action) {
            //인자를 받을 때 action이라는 파라미터의 payload라고 하는 속성을 이용해서, 외부의 인자를 전달받아 사용이 가능하다.
            return state + action.payload;
        }
    }

})

let str = createSlice({

    name: 'str',
    initialState: "abc",
    reducers: {
        changeName() {
            return "xyz";
        },
        changeName2(state, action) {
            return state + action.payload;
        }
    }

})

let profile = createSlice(
    {
        name: "myProfile",
        initialState: {name: "KJR", age: 35},
        reducers: {
            changeMyName1(state, action) {
                // return {
                //     ...state,
                //     name: action.payload
                // }
                state.name = action.payload;
            }
        }
    }
)


// reducers 를 통해 선언한 상태 변경 함수는 createSlice 를 통해 가공되어
// actions 라는 key 를 통해  action 을 생성하는 함수로 선언이 된다.
// 이후 dispatch 를 통해 해당 함수를 callback으로 줘서 사용이 가능하다.
export const {changeName, changeName2} = str.actions;
export const {increaseNum1, decreaseNum1, increaseNum2} = num.actions;

export const {changeMyName1} = profile.actions;

export const {changeMyName} = profile.actions;
console.dir(num);
console.dir(str);

// 위에 선언한 두개의 state의 reducer를 configureStore를 통해 redux container에 등록.
// 이러이러한 것들을 사용할 거야 라는 스펙을 redux가 알아먹을 수 있도록 정리, 등록
export default configureStore({
    reducer: {
        num: num.reducer,
        str: str.reducer,
        myProfile: profile.reducer
    }
})