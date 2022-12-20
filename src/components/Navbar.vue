<template>
  <nav class="navbar navbar-expand-lg shadow">
    <div class="container-fluid">
      <a class="navbar-brand align-text-center" href="#">
        <img src="../assets/logo.svg" alt="logo" class="logo d-inline-block" /> ADHAYAPANA</a>
      <div class="nav justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/events">Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/volunteer">Join Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/donate">Donate</router-link>
          </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact Us</router-link>
        </li>
          <li v-if="$store.state.isLoggedIn === 'true'" class="nav-item dropdown">
            <router-link class="nav-link" to="/admin">Admin
              <span id="navbarDropdown" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></span>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="nav-link dropdown-item" to="/logout">Logout</router-link></li>
              </ul>
            </router-link>

          </li>
          <li v-else class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  created() {
    // sessionStorage.getItem('isLoggedIn')
  },
  // beforeUpdate() {
  //   this.isLoggedIn = sessionStorage.getItem('isLoggedIn')
  // }
}
</script>
<style scoped>
.navbar navbar-expand-lg {
  height: 100px !important;
  font-family: 'Work Sans';
  background: grey;
}

.shadow {
  box-shadow: 0px 5px 3px 2px rgb(0 0 0);
  z-index: 2;
}

.logo {
  height: 50px;
  width: 50px;
}

.navbar-nav {
  color: #1567B1;
}
</style>