import { createStore } from "vuex";
import * as url from "@/constants";
import Axios from "axios";
// import { fetchDetails } from "../util";

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
