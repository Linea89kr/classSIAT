const forEachtx = require('./test6');

describe(
    "mock function for new feacher forEachtx()", ()=>{
        //mock function
        const mockCallback = jest.fn(x => 42 + x);
        // call mock function by array
        forEachtx([0, 1], mockCallback);

        // if mf is called 2 times
        test("mock function is called 2 times(1)", ()=>{
            expect(mockCallback.mock.calls.length).toBe(2);
        });
        // if mf is called 2 times
        test("mock function is called 2 times(2)", ()=>{
            expect(mockCallback.mock.calls).toHaveLength(2)
        });
        // if mock called first time
        test("mock function is called first time", ()=>{
            expect(mockCallback.mock.calls[0][0]).toBe(0);
        });
        // if mock called second time and got argument 1
        test("mock function is called second time and got argument 1", ()=>{
            expect(mockCallback.mock.calls[1][0]).toBe(1);
        })
        // if mock called final time and get first argument 1
        test("mock function called last time and get first argument 1", ()=>{
            expect(mockCallback.mock.lastCall[0]).toBe(1);
        })
        // if return value of first call is 42
        test("return value of first call is 42", ()=>{
            expect(mockCallback.mock.results[0].value).toBe(42);
        })
    }

)