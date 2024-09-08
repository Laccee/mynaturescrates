<template>
    <div class="home">
      <AppHeader />
      <section class="intro">
        <h1>Welcome to Your Project</h1>
        <p>Discover the best products and real-time AI-curated content.</p>
      </section>
      <ProductSearch />
      <RealTimeContent />
      <AppFooter/>
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/Header.vue';
  import AppFooter from '@/components/Footer.vue';
  import ProductSearch from '@/components/ProductSearch.vue';
  import RealTimeContent from '@/components/RealTimeContent.vue';
  
  export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppFooter,
    ProductSearch,
    RealTimeContent,
  },
};

  </script>
  
  <style scoped>
  .intro {
    text-align: center;
    padding: 40px;
    background-color: #f5f5f5;
  }
  </style>
  