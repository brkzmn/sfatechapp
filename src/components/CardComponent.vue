<template>
    <div class="custom-background">
      <div class="container mt-5 my-5"> <!-- Container ekledik -->
   <div class="row row-cols-1 row-cols-md-3 g-5">
  <div class="col">
    <div class="card">
      <img :src="image1Path" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img :src="image2Path" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img :src="image3Path" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
  </template>
  
  <script>

import {ref } from "vue";

  export default {
    name: "CardComponent",
    setup() {
    // Declare image paths using `ref` to make them reactive
    const image1Path = ref(require('@/assets/images/card-1.jpg'));
    const image2Path = ref(require('@/assets/images/card-2.jpg'));
    const image3Path = ref(require('@/assets/images/card-3.jpg'));
    const image4Path = ref(require('@/assets/images/card-4.jpg'));

    return {
      image1Path,
      image2Path,
      image3Path,
      image4Path
    };
  }
  };
  </script>
  
  <style scoped>
    .custom-background {
        background-color: gray;
        padding-top: 5rem;  /* Üstten boşluk */
        padding-bottom: 5rem;  /* Alttan boşluk */
        min-height: 100vh;  /* Tüm ekranı kaplamak için */
    }

    .container {
        padding-left: 0;
        padding-right: 0;
    }
    </style>