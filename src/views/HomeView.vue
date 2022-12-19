<template>
  <div class="Home-style">
  <ImageCarousel />
  <Events />
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

</style>
