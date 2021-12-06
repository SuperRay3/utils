# Array

> 常用的一些关于数组的工具函数。

引用方式

```typescript
import { arithmeticSequence, ... } from '@rayuse/array'
```

## arithmeticSequence

生成等差数列，参数分别为 `数组起始值` `步长值` `数组长度`

```ts
arithmeticSequence(0, 2, 5) // [0, 2, 4, 6, 8]
arithmeticSequence(1, 5, 8) // [1, 6, 11, 16, 21, 26, 31, 36]
```

## countOccurrences

统计数组中指定元素出现的次数，**只能统计 string | number | boolean | null | undefined 类型的元素**

```ts
countOccurrences([1, '', undefined, null, true], '') // 1
countOccurrences([1, '', undefined, null, true, ''], '') // 2
countOccurrences([1, '', undefined, null, true], null) // 1
countOccurrences([1, '', undefined, null, true, true], true) // 2
```

## deepFlatten

- 扁平化数组，**不限层级**

```ts
deepFlatten([1, [2, 3], [[4, 5], [6, [7, 8]]]]) // [1,2,3,4,5,6,7,8]
```

- **限定层级**

```ts
flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]]) // [1, 2, 3,[4, 5], [6, [7, 8]]]
flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]], 2) // [1, 2, 3,4, 5, 6, [7, 8]]
flatten([1, [2, 3], [[4, 5], [6, [7, 8]]]], 3) // [1, 2, 3,4, 5, 6, 7, 8]
```

## indexOfAll

统计目标元素在数组中的全部索引

```ts
indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], undefined) // [2, 7]
indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], 1) // [0, 5]
indexOfAll([1, true, undefined, null, '1', 1, true, undefined, null, '1'], true) // [1, 6]
```

## intersection

数组交集，**只能统计 string | number | boolean | null | undefined 类型的元素**

```ts
intersection([1,2,3,4,true], [2,5,true]) // [2, true]
```

## randomIntArrayInRange

获取指定范围、指定长度的随机数组

```ts
randomIntArrayInRange(12, 35, 10) // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
