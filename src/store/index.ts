import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  file: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    file: ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export function useStore() {
  return baseUseStore(key)
}
