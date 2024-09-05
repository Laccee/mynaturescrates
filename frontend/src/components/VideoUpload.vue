<template>
  <section class="video-upload">
    <h2>Upload Your Video</h2>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadVideo">Upload</button>
  </section>
</template>

<script>
import { uploadVideo } from '@/services/videoUpload';

export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadVideo() {
      try {
        const downloadURL = await uploadVideo(this.selectedFile);
        console.log('Video uploaded successfully:', downloadURL);
      } catch (error) {
        console.error('Video upload failed:', error);
      }
    },
  },
};
</script>

<style scoped>
.video-upload {
  padding: 50px;
  text-align: center;
}
button {
  background-color: #27ae60;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
