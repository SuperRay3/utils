# 快速开始


## 安装

### NPM

```bash
npm i @rayuse/utils
```

### CDN

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@rayuse/utils"></script>
```

这样将会在 `window` 对象上绑定一个 `rayuse` 属性，直接使用 `window.rayuse` 调用即可

## 使用方式

直接从 `@rayuse/utils` 里 `import` 你想要的工具函数即可。

```ts
import { fixedRound } from '@rayuse/utils'

fixedRound(2.12543)
```
