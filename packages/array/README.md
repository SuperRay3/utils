# Array

> 常用的一些关于数组的工具函数。

引用方式

```typescript
import { arithmeticSequence, ... } from '@rayuse/array'
```

## arithmeticSequence

生成等差数列，参数分别为 `数组起始值` `步长值` `数组长度`

```ts
/**
 * @param start 最小值
 * @param step 步长值
 * @param len 数组长度
 * @returns 等差数组
 */
arithmeticSequence(0, 2, 5) // [0, 2, 4, 6, 8]
arithmeticSequence(1, 5, 8) // [1, 6, 11, 16, 21, 26, 31, 36]
```

## countOccurrences

统计数组中指定元素出现的次数，**只能统计 string | number | boolean | null | undefined 类型的元素**

```ts
/**
 * @param arr 数组
 * @param val 待统计的元素
 * @returns 出现次数
 */
countOccurrences([1, '', undefined, null, true], '') // 1
countOccurrences([1, '', undefined, null, true, ''], '') // 2
countOccurrences([1, '', undefined, null, true], null) // 1
countOccurrences([1, '', undefined, null, true, true], true) // 2
```

## deepFlatten

- 扁平化数组，**不限层级**

```ts
/**
 * @param arr 被操作数组
 * @returns 扁平化后的数组
 */
deepFlatten([1, [2, 3], [[4, 5], [6, [7, 8]]]]) // [1,2,3,4,5,6,7,8]
```

- **限定层级**

```ts
/**
 * @param arr 被操作数组
 * @param depth 深度
 * @returns 扁平后的数组
 */
flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]]) // [1, 2, 3,[4, 5], [6, [7, 8]]]
flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]], 2) // [1, 2, 3,4, 5, 6, [7, 8]]
flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]], 3) // [1, 2, 3,4, 5, 6, 7, 8]
```

## indexOfAll

统计目标元素在数组中的全部索引

```ts
/**
 * @param arr 数组
 * @param val 目标元素
 * @returns 索引的集合
 */
indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], undefined) // [2, 7]
indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], 1) // [0, 5]
indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], true) // [1, 6]
```

## intersection

数组交集，**只能统计 string | number | boolean | null | undefined 类型的元素**

```ts
/**
 * @param arrA 数组 a
 * @param arrB 数组 b
 * @returns 交集
 */
intersection([1,2,3,4,true], [2,5,true]) // [2, true]
```

## diffrence

数组 A 与数组 B 的差集，不带去重功能

```ts
/**
 * @param arrA 数组 a
 * @param arrB 数组 b
 * @returns 差集数组
 */
diffrence([1,2,3], [3,2,1]) // []
diffrence([2,5,2,5], [1]) // [2,5,2,5]
diffrence([2,5,2,5], [2]) // [5,5]
```

## randomIntArrayInRange

获取指定范围、指定长度的随机数组

```ts
/**
 * @param min 最小值
 * @param max 最大值
 * @param n 数组长度
 * @returns 数组
 */
randomIntArrayInRange(12, 35, 10) // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```

## lastArrItem

获取数组最后一个元素

```ts
/**
 * 获取数组最后一个元素
 * @param arr 数组
 * @returns 数组最后一个元素
 */
lastArrItem([1,2,3,4,true]) // true
lastArrItem([1,2,3,4,{ aa: 1, bb: 2 }]) // { aa: 1, bb: 2 }
```

## everyNth

数组指定间隔的元素（nth）

```ts
/**
 * @param arr 数组
 * @param nth 间隔
 * @returns 结果数组
 */
everyNth([1,2,3,4,5]) // [2, 4]
everyNth([1,2,3,4,5], 3) // [3]
everyNth([1,2,3,4,5], -1) // []
```

## chunkArr

按指定大小分隔数组

```ts
chunkArr([1,2,3,4,5], 1) // [[1],[2],[3],[4],[5]]
chunkArr([1,2,3,4,5], 2) // [[1,2], [3,4], [5]]
chunkArr([1,2,3,4,5], 3) // [[1,2,3], [4,5]]
```

## shuffle

打乱数组

```ts
shuffle([1,2,3,4,5,6]) // [5,3,4,6,2,1]
```
