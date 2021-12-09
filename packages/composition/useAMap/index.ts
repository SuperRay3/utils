import { ref, Ref, watch } from 'vue-demi'

import AMapLoader, { load } from '@amap/amap-jsapi-loader'

export type AMapLoaderOptType = Parameters<typeof load>[0]

/**
 * 快捷使用 amap-jsapi-loader
 * @param dom 地图挂在的 dom 节点
 * @param mapOpt 高德地图配置项
 * @returns
 */

export type useAMapType = (dom: Ref<null | HTMLDivElement>, mapOpt: AMapLoaderOptType) => {
	map: Ref<any>,
	loader: Ref<any>,
	loaderLoaded: Ref<boolean>,
	onMapLoaded: (cb: () => void) => void
}
export const useAMap: useAMapType = (dom, mapOpt = {
	key: '',
	version: '2.0'
}) => {
	const loaderLoaded = ref<boolean>(false)
	const loader = ref<any>(null)
	const map = ref<any>(null)

	let mapOnLoaded: Array<() => void> = []
	const onMapLoaded = (cb: () => void) => {
		mapOnLoaded.push(cb)
	}

	watch([loaderLoaded, dom], ([newLoaderLoaded, newDom]) => {
		// 当 loader 和 dom 都加载完成时再挂载地图
		if (newLoaderLoaded && newDom) {
			loadMap()
				.then(() => {
					mapOnLoaded.forEach(cb => cb()) // 依次调用注册的地图初始化成功事件
					mapOnLoaded = []
				})
				.catch((error) => {
					console.error(error)
				})
		}
	})

	/**
	 * 挂载地图
	 */
	function loadMap() {
		return new Promise((res, rej) => {
			if (!dom.value) {
				return rej('地图要挂载的 dom 不可用')
			}

			if (!loaderLoaded.value) {
				return rej('amap-jsapi-loader 还未加载完成')
			}

			try {
				map.value = new loader.value.Map(dom.value)
				res(map.value)
			} catch {
				rej('加载地图失败！')
			}
		})
	}

	AMapLoader.load(mapOpt).then(AMap => {
		loaderLoaded.value = true
		loader.value = AMap
	}).catch(() => {
		console.error('amap-jsapi-loader 加载失败！')
	})

	return {
		map,
		loader,
		loaderLoaded,
		onMapLoaded
	}
}

export type useAMapReturn = ReturnType<typeof useAMap>
