import {configureStore} from "@reduxjs/toolkit"
import {num} from "./store/numstore"
import {str} from "./store/strstore"
import {profile} from "./store/profilestore"

export default configureStore({
    reducer : {
        num: num.reducer,
        str : str.reducer,
        myProfile: profile.reducer
    }
})