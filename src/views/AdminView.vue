<template>
  <div class="d-flex flex-row body-container">
    <div class="admin-body" v-if="!detailPageOpen">
      <Events />
      <Table Heading="Donators" :headRow="donationHeader" :contents="$store.state.allDonations"
        @on-row-click="onDonateRowClick" />
      <Table Heading="New Applicants" :headRow="applicantHeader" :contents="$store.state.allApplicants"
        @on-row-click="onApplicationsRowClick" />
      <Table Heading="Existing Volunteers" :headRow="volunteerHeader" :contents="$store.state.existingVolunteers"
        @on-row-click="onVolunteersRowClick" />
    </div>
    <div class="admin-body" v-else>
      <Donator v-if="openDonate" :donator="donator" @go-back="handleBack" />
      <Applicant v-if="openApplicant" :applicant="applicant" @go-back="handleBack" />
      <VolunteerDetail v-if="openVolunteer" :volunteer="volunteer" @go-back="handleBack" />
    </div>
  </div>
</template>
<script>
import Events from '@/components/Events.vue'
import Table from '@/components/AdminTable.vue'
import Donator from '@/components/Donator.vue'
import Applicant from '../components/Applicant.vue'
import VolunteerDetail from '@/components/VolunteerDetail.vue'

export default {
  name: "AdminView",
  components: { Events, Table, Donator, Applicant, VolunteerDetail },
  data() {
    return {
      detailPageOpen: false,
      openDonate: false,
      openApplicant: false,
      openVolunteer: false,
      donationHeader: ["#", "First name", "Last Name", "Email", "Frequency", "Amount (₹)"],
      applicantHeader: ["#", "First name", "Last Name", "Email", "Education", "Team preference"],
      volunteerHeader: ["#", "First name", "Last Name", "Email", "Education", "Team"],
      donator: {},
      applicant: {},
      volunteer: {},
    }
  },
  created() {
    this.$store.dispatch('getDonations')
    this.$store.dispatch('getApplicants')
    this.$store.dispatch('getVolunteers')
  },
  methods: {
    handleBack() {
      this.detailPageOpen = false
      this.donator = {}
      this.applicant = {}
      this.volunteer = {}
      this.openDonate = false
      this.openApplicant = false
      this.openVolunteer = false
    },
    onDonateRowClick(item) {
      this.donator = { ...item }

      this.openDonate = true
      this.openApplicant = false
      this.openVolunteer = false

      this.detailPageOpen = true
    },
    onApplicationsRowClick(item) {
      this.applicant = { ...item }

      this.openDonate = false
      this.openApplicant = true
      this.openVolunteer = false

      this.detailPageOpen = true
    },
    onVolunteersRowClick(item) {
      this.volunteer = { ...item }

      this.openDonate = false
      this.openApplicant = false
      this.openVolunteer = true

      this.detailPageOpen = true
    }
  }
}
</script>
<style scoped>
.body-container {
  padding: 1rem 100px;
  justify-content: flex-start;
}

.admin-body {
  /* border: 1px solid blue; */
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: -webkit-fill-available;
}
</style>
