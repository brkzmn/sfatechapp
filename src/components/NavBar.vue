<template>
  <nav class="navbar fixed-top navbar-expand-lg custom-navbar">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo.png" alt="Company Logo" class="navbar-logo" />
    </a>
    <!-- Navbar Toggler -->
    <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar Collapse -->
    <div :class="['collapse', 'navbar-collapse', { 'show': isNavbarOpen }]" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <i class="fas fa-home me-2"></i> Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-cogs me-2"></i> Diensten
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#appfooter">
            <i class="fas fa-phone-alt me-2"></i> Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false, // Used for toggling navbar collapse
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 1rem;
}

.custom-navbar {
  background-color: orange !important; /* Set the navbar background color to orange */
}

.custom-navbar .navbar-brand,
.custom-navbar .nav-link {
  color: black !important; /* Set text color to black */
}

.custom-navbar .nav-link:hover {
  color: #333 !important; /* Optional: Change text color slightly on hover */
}

.navbar-logo {
  height: 10vh; /* Set logo height relative to navbar */
  width: auto; /* Maintain aspect ratio */
}

.nav-link i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.nav-link:hover i {
  transform: scale(1.1); /* Slight scale effect on hover */
}
</style>
