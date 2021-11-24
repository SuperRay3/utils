/**
 * 生成等差数列
 * @param start 最小值
 * @param step 步长值
 * @param len 数组长度
 * @returns 等差数组
 */
 export const arithmeticSequence = (start = 0, step = 1, len = 10): number[] => Array(len).join(' ').split(' ').map((e, i) => start + i * step)
