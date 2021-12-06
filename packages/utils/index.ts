export function parseTime(time: Date | string | number, pattern: string): string {
  if (arguments.length === 0 || !time) {
    return ''
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/')
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }

	type formatObjType = { [key: string]: number }
  const formatObj: formatObjType = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let valueStr = `${formatObj[key]}`
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      valueStr = '0' + value
    }
    return valueStr
  })
  return time_str
}

/**
 * 保留指定位数小数,并自动补零
 * @param num 被操作数字
 * @param m 保留的位数
 */

export const fixedRound = (number: number, m = 2): string => {
  const result = Math.round(Math.pow(10, m) * number) / Math.pow(10, m)
  let resultStr = String(result)

  if (resultStr.indexOf('.') === -1) {
    if (m !== 0) {
      resultStr += '.'
      resultStr += new Array(m + 1).join('0')
    }
  } else {
    const arr = resultStr.split('.')
    if (arr[1].length < m) {
      arr[1] += new Array(m - arr[1].length + 1).join('0')
    }
    resultStr = arr.join('.')
  }

  return resultStr
}

/**
 * 程序暂停运行
 * @param ms 暂停运行的时间（毫秒）
 */
export const sleep = (ms: number):Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

/**
* 安全获取对象属性
* @param func 要获取的属性
* @param fallbackValue 默认值
* @tutorial (() => a.b, 'peace & love')
*/

export type getValType = <T, R>(func: () => T, fallbackValue: R) => (T | R)
export const getVal: getValType = (func, fallbackValue) => {
  try {
    const value = func()
    return (value === null || value === undefined) ? fallbackValue : value
  } catch (e) {
    return fallbackValue
  }
}

/**
 * 将字符串改为千分计数法
 */
export type formatCashType = (str: string) => string
export const formatCashReg: formatCashType = (str) => {
	return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 将金额转换为大写
 * @param n 金额
 * @returns 转换为大写的金额
 */
export const upDigit = (n: number) => {
  const fraction = ['角', '分']
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']]
  const head = n < 0 ? '欠' : ''
  n = Math.abs(n)

  let s = ''

  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = `${s}整` || '整'
  n = Math.floor(n)

  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = ''
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
}

/**
 * 判断是否为空对象
 * @param obj 被判断的对象
 * @returns 判断结果
 */
export const isBlankObj = (obj: unknown) => obj !== null && typeof obj === 'object' && !Object.keys(obj as object).length
