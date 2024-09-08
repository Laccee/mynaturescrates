<template>
    <div>
      <h2>AI Product Recommendations</h2>
      <label for="product_id">Product ID:</label>
      <input v-model="productId" type="number" placeholder="Enter Product ID" />
      <button @click="fetchRecommendations">Get Recommendations</button>
      
      <div v-if="recommendations.length">
        <h3>Recommended Products:</h3>
        <ul>
          <li v-for="product in recommendations" :key="product.id">{{ product.name }} - ${{ product.price }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProductRecommendations',
    data() {
      return {
        productId: 1,
        recommendations: [],
      };
    },
    methods: {
      async fetchRecommendations() {
        const response = await axios.get(`http://localhost:5000/recommendations/${this.productId}`);
        this.recommendations = response.data;
      },
    },
  };
  </script>
  