<template>
  <div class="card ms-1 me-1" style="width: 300px; height: 400px; overflow: overlay;">
    <img :src="ev.image" class="card-img-top" alt="Img" />
    <div class="card-body">
      <h5 class="card-title">{{ ev.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ ev.dateTime }}</h6>
      <div class="text-overflow-handle">
        <p class="card-text">{{ ev.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    ev: Object
  },
}
</script>
<style scoped>
.text-overflow-handle {
  overflow: overlay;
}
</style>