<template>
  <section class="video-call">
    <h2>Start a Video Call</h2>
    <button @click="startCall">Start Call</button>
    <video ref="remoteVideo" autoplay></video>
  </section>
</template>

<script>
import { initiateVideoCall } from '@/services/videoCall';

export default {
  methods: {
    startCall() {
      initiateVideoCall(this.$refs.remoteVideo);
    },
  },
};
</script>

<style scoped>
.video-call {
  padding: 50px;
  text-align: center;
}
video {
  width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>
