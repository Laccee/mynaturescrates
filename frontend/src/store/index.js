// src/store/index.js
import { createStore } from 'vuex';
import user from './modules/user';
import content from './modules/content';

export default createStore({
  modules: {
    user,
    content,
  },
});
