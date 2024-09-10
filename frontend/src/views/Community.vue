<template>
    <div class="community">
      <AppHeader />
      <section class="community-section">
        <h1>Join the Conversation</h1>
        <ChatComponent />
      </section>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/Header.vue';
  import AppFooter from '@/components/AppFooter.vue';
  import ChatComponent from '@/components/ChatComponent.vue';
  
  export default {
    name: 'CommunityView',
    components: {
      AppHeader,
      AppFooter,
      ChatComponent,
    },
  };
  </script>
  
  <style scoped>
  .community-section {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  