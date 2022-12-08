<template>
  <div class="wrapper">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
  name: 'AdminLogin',
  components: { Login }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
</style>