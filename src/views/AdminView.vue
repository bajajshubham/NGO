<template>
  <div class="p-2 d-flex flex-row admin-body">
    <!-- <div class="sideNav">Nav</div> -->
    <div class="admin-body">
      <Events />
    </div>
  </div>
</template>
<script>
import Events from '@/components/Events.vue'

export default {
  name: "AdminView",
  components: { Events }
}
</script>
<style scoped>
.admin-body {
  /* border: 1px solid blue; */
  text-align: start;
}
</style>