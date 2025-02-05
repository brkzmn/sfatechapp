<template>
  <div class="card-container">
    <div class="card">
      <img :src="image1Path" alt="Card Image 1" class="card-image" />
      <div class="card-content">
        <h3><i class="fas fa-exclamation-circle fa-sm"></i> Storingen</h3>
        <p>Wij verhelpen storingen snel en efficiënt, zodat uw lift of roltrap weer optimaal functioneert.</p>
        <button @click="scrollToSection('storingen')">Meer informatie</button>
      </div>
    </div>
    <div class="card">
      <img :src="image2Path" alt="Card Image 2" class="card-image" />
      <div class="card-content">
        <h3><i class="fas fa-tools fa-sm"></i> Onderhoud</h3>
        <p>Regelmatig onderhoud voorkomt storingen en verlengt de levensduur van uw lift of roltrap.</p>
        <button @click="scrollToSection('onderhoud')">Meer informatie</button>
      </div>
    </div>
    <div class="card">
      <img :src="image3Path" alt="Card Image 3" class="card-image" />
      <div class="card-content">
        <h3><i class="fas fa-wrench fa-sm"></i> Reparatie</h3>
        <p>Wij repareren liften en roltrappen met originele onderdelen en deskundig vakmanschap.</p>
        <button @click="scrollToSection('reparatie')">Meer informatie</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CardComponent",
  setup() {
    const image1Path = ref(require('@/assets/images/card-1.jpg'));
    const image2Path = ref(require('@/assets/images/card-2.jpg'));
    const image3Path = ref(require('@/assets/images/card-3.jpg'));

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      image1Path,
      image2Path,
      image3Path,
      scrollToSection
    };
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 40px 20px; 
  background: linear-gradient(to right, #1e3a5f, #87ceeb);
  width: 100%;
}

.card {
  border: none;
  border-radius: 16px;
  overflow: hidden;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  text-align: center;
}

.card-content h3 {
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  color: #333;
}

.card-content p {
  margin: 0;
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

.card-content button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.card-content button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>