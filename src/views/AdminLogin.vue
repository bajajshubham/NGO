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
  height: 70vh;
  justify-content: center;
  align-items: center;
}
</style>