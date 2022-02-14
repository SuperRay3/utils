import { inject, provide } from 'vue-demi'

const StoreSymbol = Symbol('use-store')
export const provideStore = (store: any) => {
  provide(StoreSymbol, store)
}
export const useStore = () => {
  return inject(StoreSymbol)
}
