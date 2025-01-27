<template>
    <div>
        <div class="flex justify-center mb-5">
  <img src="../assets/images/vank.PNG" alt="">
</div>
      <slot></slot> <!-- This is where your page content will go -->
    </div>
  </template>
  
  <script>
  export default {
    imageUrl: require('@/assets/images/vank.PNG'),
    name: 'Layout',
  };
  </script>
  
  <style scoped>
  .top-image {
    width: 100%;
    height: auto;
  }
  </style>
  