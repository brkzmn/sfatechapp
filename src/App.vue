<template>
  <NavBar />
  <CarouselComponent />
  <main class="custom-container container">
    <!-- for main content with some space on larger screens -->
  </main>
  <AppFooter />
</template>


<script>
import CarouselComponent from './components/CarouselComponent.vue';
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    CarouselComponent,
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
  margin-top: 60px;
}
</style>
