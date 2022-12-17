<template>
  <h3>Upcoming events</h3>
  <div class="d-flex flex-row">
    <span v-if="$store.state.currEvents.length > 0">
      <Event v-for="ev in $store.state.currEvents" v-bind:key="ev.id" :ev="ev" />
    </span>
    <p v-else>No upcoming events</p>
  </div>

  <h3>Past events</h3>
  <div class="d-flex flex-row">
    <span v-if="$store.state.pastEvents.length > 0">
      <Event v-for="ev in $store.state.pastEvents" v-bind:key="ev.id" :ev="ev" />
    </span>
    <p v-else>No past events</p>
  </div>
</template>

<script>

import Event from './Event.vue';

export default {
  name: "Events",
  components: { Event },
  methods: {
  },

  created() {
    this.$store.dispatch("getAllEvents")
  }
}

</script>