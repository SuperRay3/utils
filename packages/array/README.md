# Array

常用的一些关于数组的工具函数。

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

