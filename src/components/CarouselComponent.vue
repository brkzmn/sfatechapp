<template>
<div id="carouselExampleDark" class="carousel carousel-dark slide custom-carousel" data-bs-ride="carousel">
  <div class="carousel-indicators custom-carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active custom-carousel-image" data-bs-interval="10000">
      <img :src="image1Path" class="d-block w-100" alt="...">
      <div class="carousel-caption custom-carousel-caption d-none d-md-block rounded-3">
        <h5>Betrouwbare Roltrapreparaties</h5>
        <p>Houd uw roltrappen soepel draaiend, 24/7.</p>
      </div>
    </div>
    <div class="carousel-item custom-carousel-image" data-bs-interval="2000">
      <img :src="image2Path" class="d-block w-100 " alt="...">
      <div class="carousel-caption custom-carousel-caption d-none d-md-block rounded-3">
        <h5>Deskundige Onderhoudsdiensten</h5>
        <p>Voorkom dure storingen met onze professionele zorg.</p>
      </div>
    </div>
    <div class="carousel-item custom-carousel-image">
      <img :src="image3Path" class="d-block w-100" alt="...">
      <div class="carousel-caption custom-carousel-caption d-none d-md-block rounded-3">
        <h5>Veiligheid & Efficiëntie Eerst</h5>
        <p>Zorg voor veilige en efficiënte roltrappen voor uw bedrijf.</p>
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
    width: 100%;
  }

  .custom-carousel-image{
    max-height: 60vh;
    height: 20%;
  }

  .custom-carousel-caption{
    bottom: 25%;
  }

  .custom-carousel-caption h5 {
    color: #fff;
    font-size: 2rem;
    text-shadow: 1px 1px 2px #060606;
  }
  .custom-carousel-caption p {
    color: #fff;
    font-size: 1.3rem;
    text-shadow: 1px 1px 2px #060606;
  }

  @media (min-width: 992px) {
    .custom-carousel-image img{
      height: 50vh;
      object-fit:cover;
    }
    .custom-carousel-caption h5 {
      font-size: 3em;
    }
    .custom-carousel-caption p {
      font-size: 2rem;
    }
  } 
  .carousel-dark .carousel-indicators [data-bs-target]{
    background-color: #fff !important;
  }  

  .carousel-control-prev-icon,
    .carousel-control-next-icon {
      filter: invert(1%) !important;
    }
</style>
