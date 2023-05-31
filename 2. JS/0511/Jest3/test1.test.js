describe("mock prop", () => {
    const myMock = jest.fn(function (_name) {
        this.name = _name;
    });

    test("it has instance property name", () => {
        const a = new myMock("a function");
        const b = {};
        const bound = myMock.bind(b);
        bound("b function");

        // first mock function instance is equal to a
        expect(myMock.mock.instances[0]).toEqual(a);
        // first mock function instance is same to a
        expect(myMock.mock.instances[0]).toBe(a);
        // second mock function instance is equal to b
        expect(myMock.mock.instances[1]).toEqual(b);
        // first mock function instance name is equal to a function
        expect(myMock.mock.instances[0].name).toEqual("a function");
        // Data of first mock function instance name is equal to a function
        expect(myMock.mock.instances[0].name).toBe("a function");
        // data of first mock function instance name is equal to b function
        expect(myMock.mock.instances[1].name).toEqual("b function");
    });
});