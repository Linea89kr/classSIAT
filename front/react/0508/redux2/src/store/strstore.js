import {createSlice} from "@reduxjs/toolkit";


export let str = createSlice({

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

export const {changeName, changeName2} = str.actions;