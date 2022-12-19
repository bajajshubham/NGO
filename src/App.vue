<template>
  <Navbar />
  <router-view />
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Work Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #1567B1;
    font-family: 'Work Sans';


    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
