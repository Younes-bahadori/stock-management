import state from "./state.stocks";
import getters from "./getters.stocks";
import mutations from "./mutations.stocks";
import actions from "./actions.stocks";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
