const fn = require("./test2");

describe("test의 동등비교 예제", ()=>{
    test("1을 넣은 funcA의 결과는 1이다", ()=>{
        // toBe : 프리미티브 타입 동등비교
        expect(fn.funcA(1)).toBe(11);
    });
    test("funcB에 2, 3을 넣을 시 {a:2, b:3}이 나온다", ()=>{
        // toEqual : 레퍼런스 타입 동등 비교
        expect(fn.funcB(2,3)).toEqual({a:2, b:3});
    })
    test("funcC에 2, 3을 넣을 시 {a:2, b:3}이 나온다", ()=>{
        // fc = funcC(2,3) = fc.a == test.a, fc.b == test.b
        // undifined는 아예 검사하지 않음.
        expect(fn.funcC(2,3)).toEqual({a:2, b:3})
    })
    test("funC dp 2,3을 넣을 시 {a:2, b:3}이 나온다", ()=>{
        // toEqual에서 못거르는 조건까지 확인하고 싶다면 (ex/undefined) toStrictEqul을 사용할 것.
        expect(fn.funcC(2,3)).toStrictEqual({a:2, b:3, c:undefined});
    })


//  toBe: primitive type 에 넣는 것이 toBe.
//  toEqual: using in non-primitive type.
})