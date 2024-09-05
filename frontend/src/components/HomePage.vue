<template>
  <div class="home-page">
    <h1>Welcome to Our Platform</h1>
    <product-search />
    
    <section class="promo-section">
      <h2>Latest Promotions</h2>
      <!-- Promotional content or featured products -->
      <div v-for="(promo, index) in promotions" :key="index" class="promo-item">
        <h3>{{ promo.title }}</h3>
        <p>{{ promo.description }}</p>
      </div>
    </section>

    <real-time-content />

  </div>
</template>

<script>
import ProductSearch from './ProductSearch.vue';
import RealTimeContent from './RealTimeContent.vue';

export default {
  name: 'HomePage',
  components: {
    ProductSearch,
    RealTimeContent,
  },
  data() {
    return {
      promotions: [
        { title: '50% Off Sale', description: 'Get 50% off selected items!' },
        { title: 'New Arrivals', description: 'Check out our latest products.' },
      ],
    };
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}
.promo-section {
  margin: 20px 0;
}
.promo-item {
  background-color: #f1f1f1;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
