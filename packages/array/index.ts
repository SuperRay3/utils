/**
 * 生成等差数列
 * @param start 最小值
 * @param step 步长值
 * @param len 数组长度
 * @returns 等差数组
 */
 export const arithmeticSequence = (start = 0, step = 1, len = 10): number[] => Array(len).join(' ').split(' ').map((e, i) => start + i * step)

/**
 * 统计数组中指定元素出现的次数
 *
 * 只能统计 string | number | boolean | null | undefined 类型的元素
 * @param arr 数组
 * @param val 待统计的元素
 * @returns 出现次数
 */
export const countOccurrences = <T = string | number | boolean | null | undefined>(arr: T[], val: T): number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

/**
 * 扁平化数组
 * @param arr 被操作数组
 * @returns 扁平化后的数组
 */
export const deepFlatten = (arr: unknown[]): unknown[] => {
	const a: unknown[] = []
	return a.concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))
}

/**
 * 扁平化指定深度数组
 * @param arr 被操作数组
 * @param depth 深度
 * @returns 扁平后的数组
 */
export const flatten = (arr: unknown[], depth = 1): unknown[] => arr.reduce((a: unknown[], v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])

/**
 * 统计目标元素在数组中的全部索引
 *
 * 只能统计 string | number | boolean | null | undefined 类型的元素
 * @param arr 数组
 * @param val 目标元素
 * @returns 索引的集合
 */
export const indexOfAll = <T = string | number | boolean | undefined | null>(arr: T[], val: T): number[] => {
	return arr.reduce((acc, el, i) => {
		return (el === val ? [...acc, i] : acc)
	}, [] as number[])
}

/**
 * 获取数组交集
 * @param arrA 数组 a
 * @param arrB 数组 b
 * @returns 交集
 */
export const intersection = <T = string | number | boolean | undefined | null>(arrA: T[], arrB: T[]): T[] => {
  const s = new Set(arrB)
  return arrA.filter(x => s.has(x))
}

/**
 * 获取数组差集
 * @param arrA 数组 a
 * @param arrB 数组 b
 * @returns 差集数组
 */
export const diffrence = <T = string | number | boolean | undefined | null>(arrA: T[], arrB: T[]) => {
  return arrA.filter((v) => !arrB.includes(v))
}

/**
 * 获取指定范围、指定长度的随机数组
 * @param min 最小值
 * @param max 最大值
 * @param n 数组长度
 * @returns 数组
 */
export const randomIntArrayInRange = (min = 0, max = 10, n = 10) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min)
	

