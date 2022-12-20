<template>
  <div class="Home-style">
    <ImageCarousel />
    <div class="events-style">
  <Events />
  <Contact />
</div>

  </div>
</template>
<script>
import ImageCarousel from '../components/ImageCarousel.vue'
import Events from '../components/Events.vue';
import Contact from '../components/Contact.vue'

export default {
  name: "HomeView",
  components: {
    ImageCarousel,
    Events,
    Contact
  }
}
</script>

<style scoped>
.events-style{
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Work Sans';

}
</style>
