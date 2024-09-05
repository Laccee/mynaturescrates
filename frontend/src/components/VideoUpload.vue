<template>
    <div>
      <h2>Upload Your Content</h2>
      <input type="file" @change="uploadVideo" />
    </div>
  </template>
  
  <script>
  import videoUploadService from '../services/videoUpload';
  
  export default {
    name: 'VideoUpload',
    methods: {
      async uploadVideo(event) {
        const file = event.target.files[0];
        if (file) {
          await videoUploadService.upload(file);
          alert('Video uploaded successfully!');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles specific to the VideoUpload component here */
  </style>
  