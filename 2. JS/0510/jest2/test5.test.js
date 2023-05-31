const obj = require('./test5');

beforeAll(()=>console.log("beforeAll"))
beforeEach(()=>console.log("Outer beforeEach"))
afterEach(()=>console.log("Outer afterEach"));
afterAll(()=>console.log("afterAll"))

test("name is KJR", ()=>{
    expect(obj.user.name).toMatch(/^KJR$/);
})

test("age is 17", ()=>{
    expect(obj.user.age).toBe(17);
})

describe("check one's car", ()=>{
    beforeAll(()=>console.log("beforeAll"))
    beforeEach(()=>console.log("Inner beforeEach"))
    afterEach(()=>console.log("Inner afterEach"));
    afterAll(()=>console.log("afterAll"))

    test("brand is Hyundai", ()=>{
        expect(obj.user.car.brand).toMatch(/^Hyundai$/);
    })
    test("name is Sonata", ()=>{
        expect(obj.user.car.name).toMatch(/^Sonata$/);
    })
})