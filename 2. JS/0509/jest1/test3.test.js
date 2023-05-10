test("null", ()=>{
    const n = null;
    expect(n).toBeNull(); // n === null
    expect(n).not.toBeUndefined() // n === undefined
    expect(n).toBeDefined() // n !== undefined
    expect(n).not.toBeTruthy() // !!(n) == true
    expect(n).toBeFalsy() // !!(n) == false
})

test("zero", ()=>{
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})