describe("mock function type test", () => {
    const Mymock = jest.fn();
    // test('check function is in myMock', () => {
    //     expect(Mymock()).toEqual(undefined);
    // })

    // inject return type 10, 'x', true
    // last return type is true
    Mymock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    test('check return type is 10', () => { expect(Mymock()).toBe(10); })
    test('check return type is x', () => { expect(Mymock()).toBe('x'); })
    test('check return type is true', () => { expect(Mymock()).toBeTruthy(); })
    test('check is it true in rest called', () => { expect(Mymock()).toBeTruthy(); })


    // 연속적으로 값을 전달하는 코드에서 임의로 시나리오를 지정해서 사용할 경우에 유용함.
    // 실제 함수를 굳이 사용할 필요가 없다.
})