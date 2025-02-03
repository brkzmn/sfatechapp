<template>
  <div id="app">
    <NavBar />
    <CarouselComponent class="carousel-component" />
    <main class="custom-container">
      <CardComponent class="spaced-component" />
      <OperationsComponent class="spaced-component" />
      <ExplanationComponent class="spaced-component" id="explanation" />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import CarouselComponent from '@/components/CarouselComponent.vue';
import NavBar from '@/components/NavBar.vue';
import CardComponent from '@/components/CardComponent.vue';
import AppFooter from '@/components/AppFooter.vue';
import OperationsComponent from './components/OperationsComponent.vue';
import ExplanationComponent from './components/ExplanationComponent.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    CarouselComponent,
    CardComponent,
    OperationsComponent,
    ExplanationComponent,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.carousel-component {
  margin-top: -56px; /* Adjust this value based on the height of your navbar */
}

.custom-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

.spaced-component {
  margin-bottom: 0; /* Remove bottom margin */
  padding: 40px 0; /* Add padding to top and bottom */
}

AppFooter {
  margin-top: auto;
  width: 100%;
}
</style>