/**
 * @jest-environment jsdom
 */
import { ref } from 'vue-demi'

import {useAMap} from './index'


test('has dom', () => {
  const element = document.createElement('div')
	const elementRef = ref(element)

	useAMap(elementRef, {
		key: '',
		version: '2.0'
	})
})

