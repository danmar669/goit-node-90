const greet = require('./greet')

describe('inline snapshot', () => {
    it('should return greeting', () => {
        const result = greet()
        expect(result).toMatchInlineSnapshot(`"Hello!!!!!!"`)
    })
})