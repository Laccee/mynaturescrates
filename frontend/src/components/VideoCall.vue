<template>
    <div>
      <h2>Video Call</h2>
      <button @click="startCall">Start Call</button>
      <button @click="endCall">End Call</button>
    </div>
  </template>
  
  <script>
  import videoCallService from '../services/videoCall';
  
  export default {
    name: 'VideoCall',
    methods: {
      async startCall() {
        await videoCallService.start();
      },
      async endCall() {
        await videoCallService.end();
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles specific to the VideoCall component here */
  </style>
  