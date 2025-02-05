<template>
  <footer id="appfooter" class="bg-dark text-white py-4">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-4">
          <h5>About Us</h5>
          <p>
            We provide exceptional services to help you grow your business.
          </p>
        </div>
        <div class="col-md-4">
          <h5>Contact</h5>
          <p class="contact-info">Email: <a href="mailto:s.f.a.tech@gmail.com">s.f.a.tech@gmail.com</a></p>
          <p class="contact-info">Phone: <a href="tel:+31687915367">+31 6 87 91 53 67</a></p>
          <p>Address: Monsigneur Nolenslaan 161, Schiedam, Nederland</p>
        </div>
        <div class="col-md-4">
          <h5>Follow Us</h5>
          <p class="contact-info">
            <a href="https://www.instagram.com/serdarataseven/" target="_blank" rel="noopener noreferrer" class="text-white mx-2">
              <i class="fab fa-instagram contact-icon"></i>
            </a>
          </p>
        </div>
      </div>
      <div class="mt-4">
        <p>&copy; 2025 SFA Tech. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 0;
}

.col-md-4:has(.contact-info){
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-info{
  position: relative;
  width: fit-content;
}

.contact-info a {
  text-decoration: none;
  color: inherit;
}

.contact-info a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0; 
  width: 0%;
  height: 2px;
  background-color: #f0f5fa; 
  transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateX(-50%);
}

.contact-info a:hover::after {
  width: 100%;
  transform: translateX(-50%);
}

.contact-icon{

}

</style>
