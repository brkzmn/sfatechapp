import { createApp } from 'vue'
import App from './App.vue'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Import Bootstrap JS (with Popper.js included)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/styles.css';  // Import global styles

createApp(App).mount('#app')
