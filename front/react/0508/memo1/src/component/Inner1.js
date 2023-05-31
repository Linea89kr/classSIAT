import {memo} from "react";

const Inner1 = memo(() => {
        return(
            <div>
                <h1>여기는 inner 영역</h1>
            </div>
        )
    })

export default Inner1;