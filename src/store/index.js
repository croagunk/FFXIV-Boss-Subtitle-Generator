import { createStore } from "vuex";

export default createStore({
  state: {
    file: null,
  },
  getters: {},
  mutations: {
    setFile: (state, file) => {
      state.file = file;
    },
  },
  actions: {},
  modules: {},
});
