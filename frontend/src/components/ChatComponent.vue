<template>
    <div>
      <h2>Group Chat</h2>
      <div v-for="message in messages" :key="message.id">
        <p>{{ message.text }}</p>
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" />
    </div>
  </template>
  
  <script>
  import chatService from '../services/chat';
  
  export default {
    name: 'ChatComponent',
    data() {
      return {
        messages: [],
        newMessage: ''
      };
    },
    methods: {
      async sendMessage() {
        if (this.newMessage.trim()) {
          await chatService.send(this.newMessage);
          this.newMessage = '';
        }
      }
    },
    async created() {
      this.messages = await chatService.fetchMessages();
    }
  }
  </script>
  
  <style scoped>
  /* Add styles specific to the ChatComponent here */
  </style>
  