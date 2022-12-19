<template>
  <div class="Home-style">
    <ImageCarousel />
    <div class="events-style">
  <Events />
</div>
  </div>
</template>
<script>
import ImageCarousel from '../components/ImageCarousel.vue'
import Events from '../components/Events.vue';


export default {
  name: "HomeView",
  components: {
    ImageCarousel,
    Events
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
