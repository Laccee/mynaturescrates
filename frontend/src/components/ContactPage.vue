<template>
  <section class="contact-page">
    <h1>Contact Us</h1>
    <form @submit.prevent="sendContactForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </section>
</template>

<script>
export default {
 name: 'ContactPage',  
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };

  },
  methods: {
    sendContactForm() {
      // Add contact form submission logic here
      console.log(`Message from ${this.name}: ${this.message}`);
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding: 50px;
}
.form-group {
  margin-bottom: 20px;
}
button {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
