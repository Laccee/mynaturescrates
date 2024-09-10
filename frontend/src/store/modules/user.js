// src/store/modules/user.js
import { auth } from '@/firebaseConfig';
import { signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from 'firebase/auth';

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
  async signIn({ commit }) {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    commit('setUserInfo', result.user);
    commit('setAuthenticated', true);
  },
  async signOut({ commit }) {
    await firebaseSignOut(auth);
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
