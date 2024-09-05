import axios from 'axios';

export default {
  async getProducts(keyword) {
    return axios.get(`/api/products/search?keyword=${keyword}`);
  },
  async getRealTimeContent() {
    return axios.get('/api/content');
  },
};
