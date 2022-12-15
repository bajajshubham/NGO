import { createStore } from "vuex";
import * as url from "@/constants";
import Axios from "axios";

export default createStore({
  state: {
    currEvents: [],
    pastEvents: [],
  },
  getters: {},
  mutations: {
    setEvents(state, AllEvents) {
      state.currEvents = AllEvents.filter((ev) => ev.activeStatus);
      state.pastEvents = AllEvents.filter((ev) => !ev.activeStatus);
    },
  },
  actions: {
    getAllEvents(state) {
      let AllEvents = [];
      Axios.get(url.__events__)
        .then((res) => (AllEvents = res.data))
        .then(() => {
          if (AllEvents.length > 0) {
            state.commit("setEvents", AllEvents);
          }
        })
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
});
