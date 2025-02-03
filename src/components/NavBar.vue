<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark custom-navbar ">
    <div class="container-fluid ">
      <a class="navbar-brand custom-navbar-logo" href="#">
        <img src="@/assets/logo.png" alt="Company Logo" class="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto fs-5">
          <li class="nav-item ">
            <a class="nav-link active rounded-3" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link rounded-3" href="#">Diensten</a>
          </li>
          <li class="nav-item">
            <a class="nav-link rounded-3" href="#" @click.prevent="scrollToSection('explanation')">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link rounded-3" href="#appfooter">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.custom-navbar {
  background-color: orange !important;
  padding: 0.5rem;
}

.custom-navbar .nav-link {
  color: black !important; 
}

.custom-navbar-logo {
  height: 4rem;
}

.custom-navbar-logo img {
  height: 4rem;
}

.custom-navbar-collapse {
  display: flex;
}

.custom-navbar .nav-link {
  transition: color 0.3s ease, background-color 0.3s ease; 
}

.custom-navbar .nav-link:hover {
  color: orange !important; 
  background-color: #343a40 !important; 
  text-decoration: none; 
}
</style>