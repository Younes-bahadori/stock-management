import Vue from "vue";
import Vuex from "vuex";

import stocks from "./stocks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    stocks,
  },
});
