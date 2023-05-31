const sum = require('./test4');

let num =1;


// 테스트 로직에 대한 전처리를 수행할 때 사용되는 함수
beforeEach(() => {
    num = 1;
})

// 테스트 전에 단 한번만 실행하는 함수
beforeAll(()=>{
    console.log("All case set up");
})

// 테스트가 다 끝나고 단 한번만 실행되는 함수
afterAll(()=>{
    console.log("All case finished");
})

// 테스트 로직에 대한 후처리를 수행할 때 사용되는 함수
afterEach(() => {
    console.log("test finished");
})

test('3 + 1 = 4', () => {
    num = sum(num,1);
    expect(num).toBe(2)

})
test('1 + 2 = 3', () => {
    num = sum(num,2);
    expect(num).toBe(3)
})
test('1 + 2 = 3', () => {
    num = sum(num,3);
    expect(num).toBe(4)
})

// 해당 테스트만 테스트하고 싶을 경우:

// test('1 + 2 = 3', () => {
//     num = sum(num,4);
//     expect(num).toBe(5)
// })

test('1 + 2 = 3', () => {
    num = sum(num,4);
    expect(num).toBe(5)
})