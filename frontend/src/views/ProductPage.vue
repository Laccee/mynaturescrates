// frontend/src/views/ProductPage.vue
<script>
import api from '../api';

export default {
  name: 'ProductPage',
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      api.get('/recommendations')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
