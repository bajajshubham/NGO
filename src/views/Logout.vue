<template></template>
<script>
export default {
  name: "Logout",
  beforeCreate() {
    sessionStorage.setItem('isLoggedIn', false)
    this.$store.commit('setLogin')
    this.$router.push("home")
  }
}</script>