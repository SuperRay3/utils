import { fixedRound, parseTime, getVal, sleep } from './index'

test('parseTime', () => {
	expect(parseTime(new Date(2021, 10, 19), '{y}/{m}/{d}')).toBe('2021/11/19')
	expect(parseTime(1637743490387, '{y}/{m}/{d}')).toBe('2021/11/24')
	expect(parseTime('2021-11-24', '{y}/{m}/{d}')).toBe('2021/11/24')
})

test('fixedRound', () => {
	expect(fixedRound(2.1)).toBe('2.10')
})

test('getVal', () => {
	const a: { b: number, c?: number } = { b: 1 }
	expect(getVal(() => a.c, false)).toEqual(false)
})

it('should sleep', async () => {
	expect.assertions(1)
	const rst = await sleep(2000)
	expect(rst).toBeUndefined()
})
