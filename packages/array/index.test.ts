import {
	arithmeticSequence,
	countOccurrences,
	deepFlatten,
	flatten,
	indexOfAll,
	intersection,
	diffrence,
	randomIntArrayInRange,
	lastArrItem,
	everyNth
} from './index'


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

test('diffrence', () => {
	expect(diffrence([1,2,3], [3,2,1])).toEqual([])
	expect(diffrence([2,5,2,5], [1])).toEqual([2,5,2,5])
	expect(diffrence([2,5,2,5], [2])).toEqual([5,5])
})

test('randomIntArrayInRange', () => {
	const rst = randomIntArrayInRange(12, 35, 10)
	expect(rst.length).toBe(10)
	expect(Math.min(...rst)).toBeGreaterThanOrEqual(12)
	expect(Math.max(...rst)).toBeLessThanOrEqual(35)
})

test('lastArrItem', () => {
	expect(lastArrItem([1,2,3,4,true])).toEqual(true)
	expect(lastArrItem([1,2,3,4,{ aa: 1, bb: 2 }])).toEqual({ aa: 1, bb: 2 })
})

test('everyNth', () => {
	expect(everyNth([1,2,3,4,5])).toEqual([2,4])
	expect(everyNth([1,2,3,4,5], 3)).toEqual([3])
	expect(everyNth([1,2,3,4,5], -1)).toEqual([])
})
