<template>
  <div class="display-events">
    <Events />
  </div>
</template>

<script>
import Events from "../components/Events.vue";
export default {
  name: "ViewEvents",
  components: {
    Events,
  },
};
</script>
<style>
.display-events{
    margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Work Sans';
}
</style>