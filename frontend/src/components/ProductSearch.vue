<!-- eslint-disable vue/no-deprecated-filter -->
<template>
    <div class="product-search">
      <h2>Search for Products</h2>
      <input 
        type="text" 
        v-model="searchQuery" 
        @keyup.enter="searchProducts" 
        placeholder="Enter product keyword" 
      />
      <button @click="searchProducts">Search</button>
  
      <div v-if="loading" class="loading">
        Loading...
      </div>
  
      <div v-if="error" class="error">
        {{ error }}
      </div>
  
      <div v-if="products.length" class="product-list">
        <h3>Search Results:</h3>
        <ul>
          <li v-for="product in products" :key="product.id">
            <a :href="product.url" target="_blank">{{ product.name }}</a> - {{ product.price | currency }}
          </li>
        </ul>
      </div>
  
      <div v-if="!products.length && !loading && !error" class="no-results">
        No results found.
      </div>
    </div>
  </template>
  
  <script>
  import api from '@/services/api.js';
  
  export default {
    name: 'ProductSearch',
    data() {
      return {
        searchQuery: '',
        products: [],
        loading: false,
        error: null,
      };
    },
    methods: {
      async searchProducts() {
        if (!this.searchQuery) {
          this.error = 'Please enter a keyword to search.';
          return;
        }
  
        this.loading = true;
        this.error = null;
  
        try {
          const response = await api.getProducts(this.searchQuery);
          this.products = response.data;
        } catch (error) {
          this.error = 'Failed to fetch products. Please try again later.';
        } finally {
          this.loading = false;
        }
      },
    },
    filters: {
      currency(value) {
        return `$${parseFloat(value).toFixed(2)}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .product-search {
    text-align: center;
    margin: 20px 0;
  }
  
  .product-search input {
    padding: 10px;
    width: 60%;
    margin-right: 10px;
  }
  
  .product-search button {
    padding: 10px;
  }
  
  .loading, .error, .no-results {
    margin-top: 20px;
    color: red;
  }
  
  .product-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .product-list ul li {
    margin: 10px 0;
  }
  
  .product-list ul li a {
    text-decoration: none;
    color: #3498db;
  }
  
  .product-list ul li a:hover {
    text-decoration: underline;
  }
  </style>
  