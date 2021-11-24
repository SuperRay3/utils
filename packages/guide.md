---
sidebar: false
---

# 快速开始

## 安装

### NPM

```bash
npm i @rayuse/utils
# 或者
npm i @rayuse/array
```

### YARN

```bash
yarn add @rayuse/utils
# 或者
yarn add @rayuse/array
```

### CDN

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@rayuse/utils"></script>
```

这样将会在 `window` 对象上绑定一个 `rayuse` 属性，直接使用 `window.rayuseutils` 或者 `window.rayusearray` 调用即可

## 使用方式

直接从 `@rayuse/utils` 里 `import` 你想要的工具函数即可。

```ts
import { fixedRound } from '@rayuse/utils'

fixedRound(2.12543)
```
