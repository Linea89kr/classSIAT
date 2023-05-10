// 숫자와 관련된 테스트

test("2 더하기 2의 결과", ()=>{
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // val > 3?
    expect(value).toBeGreaterThanOrEqual(3.5) // val>=3.5?
    expect(value).toBeLessThan(5) //val < 3?
    expect(value).toBeLessThanOrEqual(5) // val <=3.5?
    // expect(value).toBe(4) // val == 4 ?
    expect(value).toEqual(4) // val == 4?
})

test("소수 더하기 연산 결과", () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); // value == 0.3
    expect(value).toBeCloseTo(0.3);
    // 지수를 정수로 만들고, 다시 소수점으로 떨어뜨렸을 때도 소수 형태를 유지하는지를 테스트하는 것이 더 명확함.
    // toBeCloseTo는 대략적인 선에서의 테스팅이라, 아주 정확하지는 않음.
})

test("team에 i가 없는지 체크", ()=>{
    expect("team").not.toMatch(/i/);
});

test("Christopher 에 stop 이 있는지 체크", ()=>{
    expect("Christopher").toMatch(/stop/)
})