const fn = require('./test4');

// ./test4를 바탕으로 클로닝 모듈을 생성
jest.mock("./test4");

fn.createUser.mockReternValue({name:'Mike'});

test("check name is mike", () => {
    const user = fn.createUser();
    expect(user.name).toBe('Mike');
})