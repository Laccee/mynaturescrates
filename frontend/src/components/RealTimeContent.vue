<template>
  <div class="real-time-content">
    <h2>Recommended for You</h2>
    <div v-if="loading">Loading content...</div>
    <div v-if="!loading && content.length">
      <ul>
        <li v-for="(item, index) in content" :key="index">
          <a :href="item.link" target="_blank">{{ item.title }}</a> - {{ item.description }}
        </li>
      </ul>
    </div>
    <div v-if="!loading && !content.length">No content available at the moment.</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'RealTimeContent',
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState('content', ['content']),
  },
  created() {
    this.fetchRealTimeContent().finally(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions('content', ['fetchRealTimeContent']),
  },
};
</script>

<style scoped>
.real-time-content {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
}
h2 {
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  margin-bottom: 10px;
}
</style>
