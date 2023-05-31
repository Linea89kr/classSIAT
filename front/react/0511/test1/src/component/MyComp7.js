
function MyComp7(){
    const [isLogin, setIstLogin] = useState(false);
    function onClickLogin(){
        setIstLogin(isLogin);
    }
    return(
        <button onClick={onClickHandler}>{IsLogin?"logout":"Login"}</button>
    )
}
export default MyComp7;