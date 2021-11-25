import { arithmeticSequence, countOccurrences, deepFlatten, flatten, indexOfAll, intersection } from './index'


test('arithmeticSequence', () => {
	expect(arithmeticSequence(0, 2, 5)).toEqual([0, 2, 4, 6, 8])
	expect(arithmeticSequence(1, 5, 8)).toEqual([1, 6, 11, 16, 21, 26, 31, 36])
})

test('countOccurrences', () => {
	expect(countOccurrences([1, '', undefined, null, true], '')).toEqual(1)
	expect(countOccurrences([1, '', undefined, null, true, false], true)).toEqual(1)
	expect(countOccurrences([1, '', undefined, null, true, false], false)).toEqual(1)
	expect(countOccurrences([1, '', undefined, null, true, true], true)).toEqual(2)
	expect(countOccurrences([1, '', undefined, null, true], null)).toEqual(1)
	expect(countOccurrences([1, '', undefined, null, true], 1)).toEqual(1)
	expect(countOccurrences([1, '', undefined, null, true, undefined], 1)).toEqual(1)
	expect(countOccurrences([1, '', undefined, null, true, ''], '')).toEqual(2)
})

test('deepFlatten', () => {
	expect(deepFlatten([1, [2, 3], [[4, 5], [6, [7, 8]]]])).toEqual([1,2,3,4,5,6,7,8])
})

test('flatten', () => {
	expect(flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]])).toEqual([1, 2, 3,[4, 5], [6, [7, 8]]])
	expect(flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]], 2)).toEqual([1, 2, 3,4, 5, 6, [7, 8]])
	expect(flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]], 3)).toEqual([1, 2, 3,4, 5, 6, 7, 8])
})

test('indexOfAll', () => {
	expect(indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], undefined)).toEqual([2, 7])
	expect(indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], 1)).toEqual([0, 5])
	expect(indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], true)).toEqual([1, 6])
})

test('intersection', () => {
	expect(intersection([1,2,3,4,true], [2,5,true])).toEqual([2, true])
})
