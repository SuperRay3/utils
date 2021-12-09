# useAMap

确保高德 JS API 加载完成后再进行自定义操作，通过提供 `onMapLoaded` 允许注册自定义操作。

```vue
<script setup lang="ts">
  import { ref, unref } from "vue"
  import { useAMap } from "@rayuse/composition";

  const mapRef = ref<null | HTMLDivElement>(null)
  const { onMapLoaded, map, loader } = useAMap(mapRef, {
    key: 'xxxxxxxxxxxxx',
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar']
  })

  onMapLoaded(() => {
    map.value.addControl(new loader.value.Scale())
    map.value.addControl(new loader.value.ToolBar())
  })
  
</script>

<template>
  <div ref="mapRef" class="map-wrapper"></div>
</template>

<style scoped>
  .map-wrapper {
    height: 250px;
  }
</style>

```
