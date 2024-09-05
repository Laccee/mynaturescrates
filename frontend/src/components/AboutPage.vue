<template>
    <div>
      <h2>About Us</h2>
      <p>{{ aboutInfo }}</p>
    </div>
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
  /* Add styles specific to the AboutPage component here */
  </style>
  