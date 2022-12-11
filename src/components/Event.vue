<template>
  <div class="card" style="width: 18rem;">
    <img :src="ev.image" class="card-img-top" alt="Img" />
    <div class="card-body">
      <h5 class="card-title">{{ ev.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ ev.dateTime }}</h6>
      <p class="card-text">{{ ev.description }}</p>
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