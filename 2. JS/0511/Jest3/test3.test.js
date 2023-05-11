describe('continueous data filter test', () => {
    const filterTestFn = jest.fn();
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    test('check result is 11', () => {
        expect(result).toEqual([11]);
    })

    test("data called in tests", () => {
        expect(filterTestFn.mock.calls).toEqual([[11],[12]])
    })
})

describe("the name of objective from server'is mike", () => {
    const mockFn = jest.fn();
    mockFn.mockResolvedValue({name: 'mike'});

    test("check name is mike", () => {
        mockFn().then(res => {expect(res.name).toBe('mike')})
    })
})