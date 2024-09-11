import { createStore } from 'vuex';
import user from './modules/user';
import content from './modules/content'; // Make sure this module exists or remove if not used

export default createStore({
  modules: {
    user,
    content, // Ensure content module exists or remove if not used
  },
});
