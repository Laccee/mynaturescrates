<template>
    <div class="profile">
      <AppHeader />
      <section class="profile-section">
        <h1>Your Profile</h1>
        <p>Name: {{ userInfo.name }}</p>
        <p>Email: {{ userInfo.email }}</p>
        <button @click="logout">Logout</button>
      </section>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/Header.vue';
  import AppFooter from '@/components/Footer.vue';
  import { mapState } from 'vuex';
  
  export default {
    name: 'ProfileView',
    components: {
      AppHeader,
      AppFooter,
    },
    computed: {
      ...mapState('user', ['userInfo']),
    },
    methods: {
      logout() {
        this.$store.dispatch('user/signOut');
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .profile-section {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
  }
  button {
    padding: 10px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #c0392b;
  }
  </style>
  