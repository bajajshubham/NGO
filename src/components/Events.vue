<template>
  <h3>Upcoming events</h3>
  <div class="d-flex flex-row">
    <Event v-for="ev in currEvents" v-if="currEvents.length > 0" v-bind:key="ev.id" :ev="ev" />
    <p v-else>No upcoming events</p>
  </div>

  <h3>Past events</h3>
  <div class="d-flex flex-row">
    <Event v-for="ev in pastEvents" v-if="pastEvents.length > 0" v-bind:key="ev.id" :ev="ev" />
    <p v-else>No past events</p>
  </div>
</template>

<script>
import { __events__ } from '@/constants'
import Event from './Event.vue';
import Axios from 'axios';

export default {
  name: "Events",
  components: { Event },
  data() {
    return {
      currEvents: [],
      pastEvents: []
    }
  },

  methods: {
  },

  created() {
    let AllEvents = []
    Axios.get(__events__)
      .then(res => AllEvents = res.data)
      .then(() => {
        if (AllEvents.length > 0) {
          this.currEvents = AllEvents.filter(ev => ev.activeStatus);
          this.pastEvents = AllEvents.filter(ev => !ev.activeStatus);
        }
      })
      .catch(err => console.log(err.message))
  }
}

</script>