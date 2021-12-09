
import { ref, Ref, watch } from 'vue-demi'

import AMapLoader from '@amap/amap-jsapi-loader'

interface AMapLoaderOptType {
	key: string; // 申请好的Web端开发者Key，首次调用 load 时必填
	version: string; // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
	plugins?: string[]; //插件列表
	// 是否加载 AMapUI，缺省不加载
	AMapUI?: {
			version?: string; // AMapUI 缺省 1.1
			plugins?: string[]; // 需要加载的 AMapUI ui插件
	};
	// 是否加载 Loca， 缺省不加载
	Loca?: {
			version?: string; // Loca 版本，缺省 1.3.2
	};
}

interface allMapOpts extends AMapLoaderOptType {
	// loader 加载完毕后如果 dom 也准备完毕时立即尝试实例化地图
	immediate?: boolean
}

export function useAMap(dom: Ref<null | HTMLDivElement>, opt: allMapOpts = {
	key: '',
	version: '2.0',
	immediate: true
}) {
	if (!opt.key) {
		console.error('请提供 Web 端开发者Key')
		return
	}


	const loaderLoaded = ref<boolean>(false)
	const loader = ref(null)
	const map = ref(null)

	const mapOnLoaded: Array<() => void> = []
	const onMapLoaded = (cb: () => void) => {
		mapOnLoaded.push(cb)
	}

	AMapLoader.load(opt).then(AMap => {
		loaderLoaded.value = true
		loader.value = AMap

		if (opt.immediate && dom?.value) {
			map.value = new AMap.Map(dom.value)
			mapOnLoaded.forEach(cb => cb())
		}
	}).catch(() => {
		console.error('amap-jsapi-loader 加载失败！')
	})

	watch(dom, (newVal) => {
		console.log(newVal)
	})

	return {
		map,
		loader,
		loaderLoaded,
		onMapLoaded
	}
}
