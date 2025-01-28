<template>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    
    <h5>First slide label</h5>
    <p>Some representative placeholder content for the first slide.</p>
    <div class="carousel-item active">
      <img :src="image1Path" class="d-block w-100" alt="...">
      <div class="custom-carousel-caption">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="image2Path" class="d-block w-100" alt="...">
      <div class="custom-carousel-caption">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="image3Path" class="d-block w-100" alt="...">
      <div class="custom-carousel-caption">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
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
#carouselExampleCaptions {
  height: 100vh; /* Set the height to 100% of the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel-item img {
  object-fit: cover; /* This will crop the image to cover the space without stretching */
  height: 100%; /* Ensure the image fills the height of the carousel item */
}

.carousel-inner {
  height: 100%; /* Ensure the carousel inner takes up the full height */
}

.custom-carousel-caption {
  position: absolute;
  top: 30%;
  left: 50%;
  right: 15%;
  transform: translate(-50%, -50%); /* Center the caption both vertically and horizontally */
  color: white;
  text-align: center; /* Center the text horizontally */
  background-color: rgba(0, 0, 0, 0.5); /* Optional background for better readability */
  padding: 2rem;
  width: auto;
}
.carousel-control-prev,
.carousel-control-next {
  z-index: 10; /* Ensure the navigation buttons are above the images */
}
</style>