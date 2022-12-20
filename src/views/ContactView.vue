<template>

  <div class="display-events">
    <Contact />
  </div>
</template>
  
<script>
import Contact from '@/components/Contact.vue';
export default {
  name: "ViewContact",
  components: {
    Contact,
  },
};
</script>

<style>
.display-events {
  font-family: 'Work Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>