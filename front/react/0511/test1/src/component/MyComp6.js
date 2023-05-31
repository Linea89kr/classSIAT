import {useEffect} from "react";

function MyComp6({users}){
    const [showTitle, setShowTitle] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setShowTitle(true);
        }, 1500);
    },[]);
    return (
        <div>
            {showTitle && <h1>User List</h1>}
            <ul>
                {users.map(user => (<li key={user} > {user}</li>))}
            </ul>
        </div>
    )
}

export default myComp6;