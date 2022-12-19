<template>
  <div class="d-flex flex-row body-container">
    <div class="admin-body">
      <Events />
      <Table Heading="Donators" :headRow="donationHeader" :contents="$store.state.allDonations"
        @on-row-click="onDonateRowClick" />
      <Table Heading="New Applicants" :headRow="applicantHeader" :contents="$store.state.allApplicants"
        @on-row-click="onApplicationsRowClick" />
      <Table Heading="Existing Volunteers" :headRow="volunteerHeader" :contents="$store.state.existingVolunteers"
        @on-row-click="onVolunteersRowClick" />
    </div>
  </div>
</template>
<script>
import Events from '@/components/Events.vue'
import Table from '@/components/AdminTable.vue'

export default {
  name: "AdminView",
  components: { Events, Table },
  data() {
    return {
      donationHeader: ["#", "First name", "Last Name", "Email", "Frequency", "Amount (₹)"],
      applicantHeader: ["#", "First name", "Last Name", "Email", "Education", "Team preference"],
      volunteerHeader: ["#", "First name", "Last Name", "Email", "Education", "Team"]
    }
  },
  created() {
    this.$store.dispatch('getDonations')
    this.$store.dispatch('getApplicants')
    this.$store.dispatch('getVolunteers')
  },
  methods: {
    onDonateRowClick(item) {
      console.log(`Donate table record: ${item.amount}`)
    },
    onApplicationsRowClick(item) {
      console.log(`Applicants table record: ${item.team}`)
    },
    onVolunteersRowClick(item) {
      console.log(`Volunteers table record: ${item.address}`)
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
  gap: 10px;
}
</style>
