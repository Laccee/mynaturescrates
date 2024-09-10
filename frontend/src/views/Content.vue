<template>
    <div class="content">
      <AppHeader />
      <section class="content-section">
        <h1>AI-Curated Real-Time Content</h1>
        <RealTimeContent />
      </section>
      <AppFooter/>
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/Header.vue';
  import AppFooter from '@/components/AppFooter.vue';
  import RealTimeContent from '@/components/RealTimeContent.vue';
  
  export default {
    name: 'ContentView',
    components: {
      AppHeader,
      AppFooter,
      RealTimeContent,
    },
  };
  </script>
  
  <style scoped>
  .content-section {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
  }
  </style>
  