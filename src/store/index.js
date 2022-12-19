import { createStore } from "vuex";
import * as url from "@/constants";
import Axios from "axios";
import { fetchDetails } from "../util";

export default createStore({
  state: {
    currEvents: [],
    pastEvents: [],
    allDonations: [],
    allApplicants: [],
    existingVolunteers: [],
  },
  getters: {},
  mutations: {
    setEvents(state, AllEvents) {
      state.currEvents = AllEvents.filter((ev) => ev.activeStatus);
      state.pastEvents = AllEvents.filter((ev) => !ev.activeStatus);
    },
    setDonations(state, donations) {
      state.allDonations = [...donations];
    },
    setApplicants(state, applicants) {
      state.allApplicants = [...applicants];
    },
    setVolunteers(state, volunteers) {
      state.existingVolunteers = [...volunteers];
    },
  },
  actions: {
    async getAllEvents(state) {
      const AllEvents = await fetchDetails(url.__events__);
      if (AllEvents.length > 0) {
        state.commit("setEvents", AllEvents);
      }
    },
    async getDonations(state) {
      let allDonations = await fetchDetails(url.__donations__);
      if (allDonations.length > 0) {
        state.commit("setDonations", allDonations);
      }
    },
    async getApplicants(state) {
      const all = await fetchDetails(url.__applicatiions__);
      if (all.length > 0) {
        state.commit("setApplicants", all);
      }
    },
    async getVolunteers(state) {
      const all = await fetchDetails(url.__applicatiions__);
      if (all.length > 0) {
        state.commit("setVolunteers", all);
      }
    },
    getDonations(state) {
      let allDonations = [];
      Axios.get(url.__donations__)
        .then((res) => (allDonations = res.data))
        .then(() => {
          if (allDonations.length > 0) {
            state.commit("setDonations", allDonations);
          }
        })
        .catch((err) => console.log(err.message));
    },
    getApplicants(state) {
      let all = [];
      Axios.get(url.__applicatiions__)
        .then((res) => (all = res.data))
        .then(() => {
          if (all.length > 0) {
            state.commit("setApplicants", all);
          }
        })
        .catch((err) => console.log(err.message));
    },
    getApplicants(state) {
      let all = [];
      Axios.get(url.__applicatiions__)
        .then((res) => (all = res.data))
        .then(() => {
          if (all.length > 0) {
            state.commit("setApplicants", all);
          }
        })
        .catch((err) => console.log(err.message));
    },
    getVolunteers(state) {
      let all = [];
      Axios.get(url.__volunteers__)
        .then((res) => (all = res.data))
        .then(() => {
          if (all.length > 0) {
            state.commit("setVolunteers", all);
          }
        })
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
});
