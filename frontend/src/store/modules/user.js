const state = {
    isAuthenticated: false,
    userInfo: {},
  };
  
  const mutations = {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  };
  
  const actions = {
    async fetchUser({ commit }, user) {
      commit('setUserInfo', user);
      commit('setAuthenticated', true);
    },
    signOut({ commit }) {
      commit('setUserInfo', {});
      commit('setAuthenticated', false);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  