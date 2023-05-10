const sum = require("./test1");

describe("text의 sum 함수 예제", ()=>{
    test("1 = 1", ()=>{
        expect(1).toBe(1);
    });
    test("1 + 2 = 3", ()=>{
        expect(sum(1,2)).toBe(3)
    });
    test("1+3!=5", ()=>{
        expect(sum(3,3)).not.toBe(5);
    });
})