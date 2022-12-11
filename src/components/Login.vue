<template>
  <div class="card loginBox shadow rounded">
    <h5 class="card-header">Sign in</h5>
    <div class="card-body">
      <form @submit="onSubmit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" required v-model="email" id="exampleInputEmail1"
            aria-describedby="emailHelp" name="username">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" required name="password" v-model="password" class="form-control"
            id="exampleInputPassword1">
        </div>
        <!-- <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Show password</label>
        </div> -->
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>

import { __users__ } from '@/constants';
import Axios from 'axios'
export default {
  name: "Login",
  data() { //default state

    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let loginInfoCorrect = false;

      Axios.get(`${__users__}?username=${this.email}`)

        .then(res => loginInfoCorrect = res.data.length > 0 ? (res.data[0].username === this.email && res.data[0].password === this.password) : false
        )
        .then(() => {
          if (loginInfoCorrect) {
            this.$router.push("admin")
          } else alert("Incorrect username or password")
        })
        .catch(err => { console.log(err.message) })
    }
  }
}
</script>

<style scoped>
.loginBox {
  text-align: start;
}
</style>