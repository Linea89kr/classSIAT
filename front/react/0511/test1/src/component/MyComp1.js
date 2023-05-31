function MyComp1({user}){
    return(
        <div>
            {user?.name?(
                <h1>Welcome {user.name}!</h1>
            ):(<h1>
                    Please login
                    <button>Login</button>
            </h1>
            )}
            <h2>MyComp1</h2>
        </div>
    );
}
export default MyComp1;