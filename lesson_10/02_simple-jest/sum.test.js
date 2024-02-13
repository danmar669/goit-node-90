const sum = require("./sum");

describe("test sum func", () => {

    beforeAll(() => {
        console.log('run before all test')
    })

    afterAll(() => {
        console.log('Testing is completed!')
    })

    beforeEach(() => {
        console.log('Run before each test')
    })


    test("1 + 2 should return 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it("1 + -2 should return -1", () => {
        const result = sum(1, -2);
        expect(result).toBe(-1)
    });

    describe("not a number test", () => {
        test.skip('"1" - 2 should return -1', () => {
            const result = sum("1", -2);
            expect(result).toBe(-1);
        });
    });
});
