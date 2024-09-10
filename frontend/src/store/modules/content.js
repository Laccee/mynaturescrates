// src/store/modules/content.js
import axios from 'axios';

const state = {
  content: [],
};

const mutations = {
  setContent(state, content) {
    state.content = content;
  },
};

const actions = {
  async fetchRealTimeContent({ commit }) {
    const response = await axios.get('YOUR_API_ENDPOINT');
    commit('setContent', response.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
