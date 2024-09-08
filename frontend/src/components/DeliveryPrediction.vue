<template>
    <div>
      <h2>Predict Delivery Time</h2>
      <label for="price">Product Price:</label>
      <input v-model="price" type="number" placeholder="Enter Price" />
      <br />
      <label for="distance">Delivery Distance:</label>
      <input v-model="distance" type="number" placeholder="Enter Distance (in miles)" />
      <br />
      <label for="mode">Mode:</label>
      <select v-model="mode">
        <option value="short">Short (minutes)</option>
        <option value="long">Long (days)</option>
      </select>
      <br />
      <button @click="predictDelivery">Predict Delivery Time</button>
      
      <div v-if="prediction">
        <h3>Predicted Delivery Time: {{ prediction }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DeliveryPrediction',
    data() {
      return {
        price: 0,
        distance: 0,
        mode: 'short',
        prediction: null,
      };
    },
    methods: {
      async predictDelivery() {
        const response = await axios.get('http://localhost:5000/delivery_time', {
          params: { price: this.price, distance: this.distance, mode: this.mode }
        });
        this.prediction = response.data.predicted_delivery_time_in_minutes || response.data.predicted_delivery_time_in_days;
      },
    },
  };
  </script>
  