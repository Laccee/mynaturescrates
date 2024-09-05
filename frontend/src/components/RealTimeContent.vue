<template>
  <div>
    <h2>Latest Trends and Insights</h2>
    <div v-for="content in realTimeContent" :key="content.id">
      <p>{{ content.text }}</p>
    </div>
  </div>
</template>

<script>
import realTimeContentService from '../services/realTimeContent';

export default {
  name: 'RealTimeContent',
  data() {
    return {
      realTimeContent: []
    };
  },
  async created() {
    this.realTimeContent = await realTimeContentService.fetch();
  }
}
</script>

<style scoped>
/* Add styles specific to the RealTimeContent component here */
</style>
