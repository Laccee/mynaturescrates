<template>
  <div id="app">
    <!-- Show a loading spinner until Firebase authentication is initialized -->
    <div v-if="!isFirebaseReady" class="loading">
      <p>Loading...</p>
    </div>

    <div v-else>
      <!-- Navigation/Header -->
      <AppHeader :isAuthenticated="isAuthenticated" @signOut="signOut" />

      <!-- Router View for dynamic pages (Home, About, etc.) -->
      <router-view />

      <!-- Footer -->
      <AppFooter />    
    </div>   
  </div>
</template>

<script>
// Import Firebase functions and components
import { onAuthStateChanged } from 'firebase/auth'; 
import { auth } from '@/firebaseConfig'; // Adjust this path as necessary
import { mapState, mapActions } from 'vuex'; // Import Vuex helpers

import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/AppFooter.vue'; // AppFooter is imported   

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter, // Importing this but not using it in the template was an oversight
  },
  data() {
    return {
      isFirebaseReady: false, // Tracks Firebase initialization
    };
  },
  computed: {
    ...mapState('user', ['isAuthenticated']), // Access 'isAuthenticated' from the 'user' Vuex state
  },
  methods: {
    ...mapActions('user', ['fetchUser', 'signOut']), // Map Vuex actions from 'user' module
  },
  created() {
    // Firebase authentication listener
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchUser(user); // Fetch user data via Vuex action
      } else {
        this.$store.commit('user/setAuthenticated', false); // Commit unauthenticated state to Vuex
      }
      this.isFirebaseReady = true; // Mark Firebase as initialized
    });
  },
};
</script>

<style scoped>
/* Add eco-friendly and natural theme styles */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f4f3; /* Soft eco-friendly background */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5em;
  color: #4caf50; /* Green theme */
}

a {
  color: #4caf50; /* Green theme for links */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
