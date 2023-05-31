function MyComp4(){
  return (
    <div>
        <div>
            <label htmlFor="username">name</label>
            <input type="text" htmlFor="username" id="username"/>
        </div>
        <div>
            <label htmlFor="profile">profile</label>
            <input type="text" htmlFor="profile" id="profile"/>
        </div>
        <div>
            <label htmlFor="nickname">nickname</label>
            <input type="text" htmlFor="nickname" id="nickname"/>
        </div>
        <div data=testid:"my-div"></div>
    </div>
  );
}
export default MyComp4;