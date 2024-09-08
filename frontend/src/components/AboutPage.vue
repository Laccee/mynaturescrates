<template>
  <section class="about-page">
    <h1>About Nature's Crate</h1>
    <p>We focus on eco-friendly products that promote health and sustainability.</p>
  </section>
</template>
  
  <script>
  import { getAboutInfo } from '../services/api.js';
  
  export default {
    name: 'AboutPage',
    data() {
      return {
        aboutInfo: ''
      };
    },
    created() {
      this.fetchAboutInfo();
    },
    methods: {
      async fetchAboutInfo() {
        try {
          const response = await getAboutInfo();
          this.aboutInfo = response.data;
        } catch (error) {
          console.error('Error fetching about info:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .about-page {
    text-align: center;
    padding: 100px 20px;
  }
  </style>
  