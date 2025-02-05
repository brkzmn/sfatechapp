<template>
  <div class="explanation">
    <div class="section" v-for="(section, index) in sections" :key="index">
      <div class="text">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </div>
      <img :src="section.image" alt="Section Image" class="section-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExplanationComponent',
  data() {
    return {
      sections: [
        {
          title: 'Over SFA Tech',
          content: 'SFA Tech is in 2023 opgericht en actief in heel Nederland. Wij bieden betrouwbare service op het gebied van storingen, onderhoud en reparatie van liften en roltrappen. Ons team van specialisten staat klaar om u te helpen met duurzame en efficiënte oplossingen.',
          image: require('@/assets/images/about-us.jpg')
        },
        {
          title: 'Waarom SFA Tech?',
          content: 'SFA Tech onderscheidt zich door een combinatie van ervaring, snelheid en klantgerichtheid. Wij begrijpen hoe belangrijk goed functionerende liften en roltrappen zijn voor uw gebouw. Daarom bieden wij niet alleen snelle storingsservice, maar ook preventief onderhoud en vakkundige reparaties. Onze technici werken met de nieuwste technologieën en blijven continu up-to-date met de laatste ontwikkelingen in de sector.',
          image: require('@/assets/images/escalator.jpg')
        },
        {
          title: 'Onze Werkwijze',
          content: 'Bij SFA Tech geloven we in een transparante en efficiënte aanpak. Wanneer u contact met ons opneemt, analyseren we eerst het probleem en bieden we een duidelijke oplossing. Of het nu gaat om een urgente storing, regulier onderhoud of een complexe reparatie, wij werken snel en zorgvuldig. Ons doel is om uw lift- en roltrapsystemen in topconditie te houden met minimale stilstand.',
          image: require('@/assets/images/repair.jpg')
        },
        {
          title: 'Duurzaamheid en Innovatie',
          content: 'Wij zetten ons in voor duurzame oplossingen in lift- en roltraptechniek. Door het gebruik van energiezuinige componenten en innovatieve onderhoudstechnieken helpen we niet alleen storingen te voorkomen, maar dragen we ook bij aan een groenere toekomst. Of het nu gaat om het optimaliseren van bestaande installaties of het vervangen van onderdelen met energiezuinige alternatieven, bij SFA Tech denken we vooruit.',
          image: require('@/assets/images/sustainability.jpg')
        },
        {
          title: '24/7 Service en Ondersteuning',
          content: 'Storingen kunnen op elk moment optreden, daarom staat SFA Tech 24 uur per dag, 7 dagen per week voor u klaar. Onze snelle en betrouwbare storingsdienst zorgt ervoor dat uw lift of roltrap zo snel mogelijk weer operationeel is. Wij begrijpen dat stilstand geen optie is, en daarom bieden wij flexibele en efficiënte oplossingen, dag en nacht.',
          image: require('@/assets/images/24.jpg')
        }
      ]
    };
  }
};
</script>

<style scoped>
.explanation {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/machine.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
}

.section:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
}

.text {
  text-align: center;
  max-width: 600px;
  color: #fff;
}

.text h2 {
  font-size: 24px;
  color: #fff; 
  margin-bottom: 10px;
}

.text p {
  font-size: 16px;
  color: #fff;
  line-height: 1.6;
}

.section-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

@media (min-width: 992px) {
  .section {
    width: 50%;
    align-items: center !important;
  }
} 

@media (min-width: 768px) {
  .section {
    flex-direction: row;
    justify-content: space-between;
  }

  .section:nth-child(even) {
    flex-direction: row-reverse;
  }

  .text {
    text-align: left;
    flex: 1; /* Allow text to take available space */
  }

  .section-image {
    width: 50%;
    flex: 1; /* Allow image to take available space */
  }
}

@media (min-width: 992px) {
  .section {
    width: 60%;
  }
  .explanation{
    align-items: center;
  }
} 

</style>