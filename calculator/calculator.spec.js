const { add } = require('./calculator.js');

// test away!
describe("the add function", () => {
    it("should add two values", () => {
        const result = add(2,2);
        expect(result).toBe(4);
        expect(add(-1,4)).toBe(3);
        expect(add(-2,-8)).toBe(-10);
    });

    it("should return 0 when no arguments are provided", () => {
        expect(add()).toBe(0)
    });

    it("should return the passed in value when one argument is provided" , () => {
        expect(add(1)).toBe(1);
        expect(add(7)).toBe(7);
    });

    it("should add any number of arguments" , () => {
        expect(add(2,3,4)).toBe(9);
        expect(add(2,-2,1,9,-7)).toBe(3)
    });

    it("should accept an array as an argument", () => {
        add([1,2,3,4])
    })
});