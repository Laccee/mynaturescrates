<template>
  <section class="chat">
    <h2>Group Chat</h2>
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id" class="message">
        <strong>{{ message.username }}:</strong> {{ message.text }}
      </div>
    </div>
    <input type="text" v-model="newMessage" @keyup.enter="sendMessage" />
  </section>
</template>

<script>
import { sendMessage, fetchMessages } from '@/services/chat';

export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  mounted() {
    this.loadMessages();
  },
  methods: {
    async loadMessages() {
      this.messages = await fetchMessages();
    },
    async sendMessage() {
      if (this.newMessage.trim()) {
        await sendMessage(this.newMessage);
        this.newMessage = '';
        this.loadMessages();
      }
    },
  },
};
</script>

<style scoped>
.chat {
  padding: 50px;
}
.chat-messages {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}
.message {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
