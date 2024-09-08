<template>
    <div class="about">
      <AppHeader />
      <section class="content">
        <h1>About Us</h1>
        <p>We are dedicated to offering the best products and services for your needs.</p>
        <p>Our real-time AI content curates the most relevant and up-to-date information for you.</p>
      </section>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/Header.vue';
  import AppFooter from '@/components/Footer.vue';
  
  export default {
    name: 'AboutView',
    components: {
      AppHeader,
      AppFooter,
    },
  };
  </script>
  
  <style scoped>
  .content {
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  