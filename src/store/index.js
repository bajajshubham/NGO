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
    isLoggedIn: "false",
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
    setLogin(state) {
      state.isLoggedIn = sessionStorage.getItem("isLoggedIn")
        ? sessionStorage.getItem("isLoggedIn")
        : "false";
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
      const all = await fetchDetails(url.__volunteers__);
      if (all.length > 0) {
        state.commit("setVolunteers", all);
      }
    },
  },
  modules: {},
});
