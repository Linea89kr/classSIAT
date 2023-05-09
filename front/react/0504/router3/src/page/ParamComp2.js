import {useSearchParams} from "react-router-dom";

function ParamComp2() {
    const [searchParams] = useSearchParams();

    const id = searchParams.get("id")
    const name = searchParams.get("name")

    return(
        <div>
            <ul>
                <li>id: {id}</li>
                <li>name: {name}</li>
            </ul>
        </div>
    )
}
export default ParamComp2;