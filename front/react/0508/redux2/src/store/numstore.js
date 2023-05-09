import {createSlice} from "@reduxjs/toolkit";

export let num = createSlice({
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

export const {increaseNum1, decreaseNum1, increaseNum2} = num.actions;