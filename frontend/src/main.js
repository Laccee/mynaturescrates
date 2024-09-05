import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import Vuex store
import router from './router'; // Import router if using

const app = createApp(App);

app.use(store); // Use Vuex store in the app
app.use(router); // Use the router in the app

app.mount('#app');
