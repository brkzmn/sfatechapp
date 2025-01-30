<template>
<div id="carouselExampleDark" class="carousel carousel-dark slide custom-carousel" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active custom-carousel-image" data-bs-interval="10000">
      <img :src="image1Path" class="d-block w-100" alt="...">
      <div class="carousel-caption custom-carousel-caption d-none d-md-block rounded-3">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item custom-carousel-image" data-bs-interval="2000">
      <img :src="image2Path" class="d-block w-100 " alt="...">
      <div class="carousel-caption custom-carousel-caption d-none d-md-block rounded-3">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item custom-carousel-image">
      <img :src="image3Path" class="d-block w-100" alt="...">
      <div class="carousel-caption custom-carousel-caption d-none d-md-block rounded-3">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>

import {ref } from "vue";
 
export default {
  name: 'CarouselComponent',
  setup() {
    // Declare image paths using `ref` to make them reactive
    const image1Path = ref(require('@/assets/images/carousel-1.jpg'));
    const image2Path = ref(require('@/assets/images/carousel-2.jpg'));
    const image3Path = ref(require('@/assets/images/carousel-3.jpg'));

    return {
      image1Path,
      image2Path,
      image3Path,
    };
  }
}  
</script>

<style scoped>
  .custom-carousel{
    margin-top: 5rem;
  }

  .custom-carousel-image{
    max-height: 60vh;
    object-position: center;
  }

  .custom-carousel-caption{
    bottom: 25%;
  }

  .custom-carousel-caption h5 {
    color: aliceblue;
    font-size: 3em;
    text-shadow: 1px 1px 2px #ffa500;
  }
  .custom-carousel-caption p {
    color: aliceblue;
    font-size: 2rem;
    text-shadow: 1px 1px 2px #ffa500;
    

  }

</style>