import { createRouter, createWebHistory } from 'vue-router'; // Correct Vue 3 imports
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Community from '../views/Community.vue';
import Profile from '../views/Profile.vue';
import Content from '../views/Content.vue';

// Define your routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/community', name: 'Community', component: Community },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/content', name: 'Content', component: Content },
];

// Create the router instance with Vue 3 syntax
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes, // Short for `routes: routes`
});

export default router;
