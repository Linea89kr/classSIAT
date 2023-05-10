const fn = require('./test2');

// test("Get name 'mike' 3 sec after", ()=> {
//     function callback(name){
//         expect(name).toBe('Mike');
//         여기에는 dome처리가 되지 않음.
//     }
//     fn.getName(callback);
// });


// 비동기 콜백 테스트를 정확하게 처리하기 위해서는 반드시
// done 메서드를 로직 끝에 추가하여 호출할 수 있도록 해야 한다.
test("Get name 'mike' 3 sec after", (done) => {
    function callback(name) {
        expect(name).toBe('Mike');
        done();
    }

    fn.getName(callback);
});
// 에러가 생길 경우에는 반드시 try-catch문을 사용.
// 안쪽에 done()을 넣어 시간초과 오류를 발생시키지 않도록 주의!
test("test age exception", (done) => {
    function callback(age) {
        try {
            expect(age).toBe(20);
            done();
        } catch (error) {
            done(error);
        }
    }
    fn.getAge(callback);
})