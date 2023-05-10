const fn = require('./test3');

//return을 쓰지 않고 할 경우에는 제대로된 결과가
// 리턴되지 않으므로 주의할 것.
test('get age 20(1) after 3 sec', ()=>{
    return fn.getAge1().then(age => {
        expect(age).toBe('20');
    })
});

// resolve를 활용한 테스팅이 가능함.
test('get age 20(2) after 3 sec', ()=>{
    return expect(fn.getAge1()).resolves.toBe('20');
});

// reject 사용 예제
test('get age 20(reject) after 3 sec', ()=>{
    return expect(fn.getAge2()).rejects.toMatch(/error/);
})

// async await 사용 예제
test('get age 20(3) after 3sec', async ()=>{
    await expect(fn.getAge1()).resolves.toBe('20');
})

// async await 사용 예제2
test('get age 20(4) after 3sec', async ()=>{
    const age = await fn.getAge1();
    expect(age).toBe('20');
})