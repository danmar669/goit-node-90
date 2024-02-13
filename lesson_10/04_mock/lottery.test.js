const lottery = require('./lottery')

const mockGenerateNumber = jest.fn()

jest.mock('./generateNumber', () => {
    return {
        generateNumber: () => mockGenerateNumber()
    }
})

describe('test lottery', () => {
    it('should won', () => {
        mockGenerateNumber.mockImplementation(() => 2)

        const result = lottery(2)

        expect(result).toBe('You won!')
    })

    // it('should lose', () => {
    //     const result = lottery(1)
    //     expect(result).toBe("You lose")
    // })
})