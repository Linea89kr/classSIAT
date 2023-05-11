const mockFn = jest.fn()

mockFn(10,20);
mockFn(5,10);
mockFn(30,40);

test('is mockFn called more then 1 time?', () => {
    expect(mockFn).toHaveBeenCalled();
})
test('is mockFn called 3 times?', () => {
    expect(mockFn).toHaveBeenCalledTimes(3);
})
test('is mockFn called with 10, 20?', () => {
    expect(mockFn).toHaveBeenCalledWith(10, 20);
})
test('is mockFn called with 30, 40?', () => {
    expect(mockFn).toHaveBeenCalledWith(30, 40);
})
test('is mockFn called second time with 5, 10?', () => {
    expect(mockFn).toHaveBeenNthCalledWith(2, 5, 10);
})
test('does last function call return 30, 40?', () => {
    expect(mockFn).toHaveBeenLastCalledWith(30, 40);
})