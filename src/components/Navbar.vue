<template>
<nav class="navbar navbar-expand-lg bg-light" height="100"  >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="../assets/logo.svg" alt="" width="50" height="46" class="d-inline-block align-text-center" >ADHAYAPANA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="nav justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link " to="/">Home</router-link>
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
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Log In
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <router-link class="dropdown-item" to="/login">Login</router-link></li>
            <li><router-link class="dropdown-item" to="/admin">Admin</router-link></li>
           
          </ul>
        </li>


         
       
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default{
    name: 'Navbar'
}
</script>
<style scoped>
.navbar navbar-expand-lg {
  font-family: 'Work Sans';
  background: grey;
  position: fixed;
 
}
.navbar-nav{
  color: #1567B1;
}

</style>