import { arithmeticSequence } from './index'


test('arithmeticSequence', () => {
	expect(arithmeticSequence(0, 2, 5)).toEqual([0, 2, 4, 6, 8])
	expect(arithmeticSequence(1, 5, 8)).toEqual([1, 6, 11, 16, 21, 26, 31, 36])
})
