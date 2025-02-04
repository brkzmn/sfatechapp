<template>
  <div id="operations-section" class="operations">
    <div id="storingen" class="operation-detail">
      <div class="operation-text">
        <h3>Storingen</h3>
        <p>Een defecte lift of roltrap kan voor veel overlast zorgen. SFA Tech is gespecialiseerd in het snel opsporen en verhelpen van storingen, zodat uw systemen weer optimaal functioneren. Wij bieden snelle service door heel Nederland en zorgen ervoor dat uw liften en roltrappen veilig en betrouwbaar blijven werken.</p>
      </div>
      <img src="@/assets/images/card-5.jpg" alt="Storingen Image" class="operation-image" />
    </div>
    <div id="onderhoud" class="operation-detail">
      <div class="operation-text">
        <h3>Onderhoud</h3>
        <p>Goed onderhoud is essentieel voor de veiligheid en betrouwbaarheid van uw lift- en roltrapsystemen. SFA Tech biedt preventief onderhoud op maat om defecten te voorkomen en de levensduur van uw installaties te verlengen. Onze ervaren technici inspecteren en onderhouden uw systemen volgens de hoogste standaarden, zodat u zich geen zorgen hoeft te maken over onverwachte storingen.</p>
      </div>
      <img src="@/assets/images/card-6.jpg" alt="Onderhoud Image" class="operation-image" />
    </div>
    <div id="reparatie" class="operation-detail">
      <div class="operation-text">
        <h3>Reparatie</h3>
        <p>Wanneer uw lift of roltrap gerepareerd moet worden, kunt u rekenen op de expertise van SFA Tech. Wij gebruiken hoogwaardige onderdelen en geavanceerde technieken om defecten efficiënt te verhelpen. Onze monteurs hebben ruime ervaring in het repareren van alle merken en typen liften en roltrappen. Dankzij onze snelle service is uw installatie snel weer operationeel.</p>
      </div>
      <img src="@/assets/images/card-7.jpg" alt="Reparatie Image" class="operation-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OperationsComponent'
};
</script>

<style scoped>
.operations {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px; /* Add padding to top and bottom */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/escalators.jpg') no-repeat center center;
  background-size: cover;
  width: 100vw; /* Ensure the background covers the full width */
  margin-left: calc(-50vw + 50%); /* Center the background */
}

.operation-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  gap: 10px; /* Reduced gap between text and image */
  background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent white for the cards */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%; /* Full width for mobile */
  max-width: 800px; /* Max width for larger screens */
  margin: 0 auto; /* Center the detail section */
}

.operation-detail:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.operation-text {
  text-align: center;
  max-width: 600px;
  color: #333; /* Darker text color for better readability */
  padding: 0 20px; /* Add padding to the sides */
}

.operation-text h3 {
  font-size: 24px;
  color: #333; /* Darker text color for better readability */
  margin-bottom: 10px;
}

.operation-text p {
  font-size: 16px;
  color: #333; /* Darker text color for better readability */
  line-height: 1.6;
}

.operation-image {
  width: 100%;
  max-width: 300px; /* Slightly smaller images */
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .operation-detail {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px; /* Further reduced gap between text and image for larger screens */
  }

  .operation-text {
    text-align: left;
  }

  .operation-image {
    width: 40%; /* Adjusted width for larger screens */
  }
}
</style>