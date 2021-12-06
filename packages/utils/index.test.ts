import {
	fixedRound,
	parseTime,
	getVal,
	sleep,
	formatCashReg,
	upDigit,
	isBlankObj
} from './index'

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

it('thousand formate', () => {
	expect(formatCashReg('1234567')).toBe('1,234,567')
	expect(formatCashReg('1234567.12')).toBe('1,234,567.12')
})

test('upDigit', () => {
	expect(upDigit(1234.12)).toBe('壹仟贰佰叁拾肆元壹角壹分整')
	expect(upDigit(1234)).toBe('壹仟贰佰叁拾肆元整')
})

test('isBlankObj', () => {
	expect(isBlankObj({})).toBeTruthy()
	expect(isBlankObj(null)).toBeFalsy()
	expect(isBlankObj(undefined)).toBeFalsy()
	expect(isBlankObj('')).toBeFalsy()
	expect(isBlankObj([])).toBeTruthy()
})

