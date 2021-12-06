# utils

> 常用的一些没有特定分类的工具函数。


引用方式

```ts
import { fixedRound, ... } from '@rayuse/utils'
```

## parseTime

格式化时间

```ts
parseTime(new Date(2021, 10, 24), '{y}/{m}/{d}') // '2021/11/24'
parseTime(1637743490387, '{y}/{m}/{d}') // '2021/11/24'
parseTime('2021-11-24', '{y}/{m}/{d}') // '2021/11/24'

parseTime(1637743490387, '{y}/{m}/{d} {h}:{i}:{s}') // '2021/11/24 16:11:44'
parseTime('2021-11-24', '{y}/{m}/{d} {h}:{i}:{s}') // 2021/11/24 00:00:00
```

## fixedRound

四舍五入保留指定位数小数，并自动补零

::: tip
函数内部对精度丢失问题进行了优化
:::

众所周知，JavaScript 存在**精度丢失**的问题，[0.1 + 0.2 !== 0.3](https://juejin.cn/post/6844903557326454791)。这就给我们在进行数字处理，包括但不限于四则运算等情况下带来了烦恼。

这个函数则是将**原始值扩大相应倍数后进行运算，将运算结果再还原倍数后 `Math.round`**，这样就可以有效地规避精度丢失问题。

```ts
fixedRound(0.2577) // 0.26
fixedRound(0.1 + 0.2) // 0.30
fixedRound(0.5234575, 4) // 0.5235
```

## sleep

::: tip
灵感来自于其它语言的 sleep 函数
:::
指定代码暂停运行 x 毫秒

 - **场景1：** 前端模拟接口请求时的 loading 状态
 - **场景2：** *更新补充中...*

```ts
// 场景1
const loading = ref(false)
async function getData() {
	loading.value = true
	await sleep(2000) // 两秒后改变 loading 状态
	loading.value = false
}
```

## getVal

安全获取对象属性，提供兜底值

- **场景1：** 读取对象上不存在的属性，并提供缺省值

- **场景2：** 对象值为 `undefined` 或者 `null` 时，提供缺省值

```ts
const a = { b: 1, c: 2, e: null }

getVal(() => a.d, 0) // 0 因为不存在属性 c，正常读取会报错可能导致代码终止运行，此时可通过此函数避免报错并提供页面友好的缺省值
getVal(() => a.e, '--') // '--'
```

## formatCashType

千分计数法

```ts
formatCashReg('1234567') // '1,234,567'
formatCashReg('1234567.12') // '1,234,567.12'
```

## upDigit

将金额转换为大写

```ts
upDigit(1234.12) // '壹仟贰佰叁拾肆元壹角壹分整'
upDigit(1234) // '壹仟贰佰叁拾肆元整'
```

## isBlankObj

判断是否为空对象

```ts
isBlankObj({}) // true
isBlankObj(null) // false
isBlankObj(undefined) // false
isBlankObj('') // false
isBlankObj([]) // true
```
