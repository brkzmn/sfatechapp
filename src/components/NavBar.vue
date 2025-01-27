<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
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
          <a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Diensten</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#appfooter">Contact</a>
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

</style>

<!-- <style scoped>
/* You can add custom styles for your navbar here */
  

  /* Basic styling for navbar */
  .navbar {
    background-color: #333;
    padding: 1rem;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
  }
  
  .navbar-links {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
  
  .navbar-item {
    margin: 0;
  }
  
  .navbar-link {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
  }
  
  .navbar-link:hover {
    color: #ff7f50;
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 0.3rem;
    cursor: pointer;
  }
  
  .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 5px;
  }
  
  /* Responsive for mobile */
  @media (max-width: 768px) {
    .navbar-links {
      display: none;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
      align-items: center;
    }
  
    .navbar-links.active {
      display: flex;
    }
  
    .menu-toggle {
      display: flex;
    }
  }
</style> -->
  