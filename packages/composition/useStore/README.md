# useStore

::: warning
vue 2 composition 专用
:::

vue 2 环境中像 vue 3 中一样使用 `useStore` 获取 vuex 状态

```js
// main.js
import { provideStore } from '@rayuse/composition'
import store from '@/store


new Vue({
  setup() {
    provideStore(store)
  },
	...
}).$mount('#app')
```

```vue
<script>
import { useStore } from '@rayuse/composition'

export default {
	setup() {
		const $store = useStore()
	}
}
<script>
```


