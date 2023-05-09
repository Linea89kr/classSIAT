import {createSlice} from "@reduxjs/toolkit";

export let profile = createSlice(
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

export const {changeMyName1} = profile.actions;