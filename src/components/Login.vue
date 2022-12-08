<template>
  <!-- <div class="loginBox">This is Admin login page</div> -->
  <i-card style="width: max-content; text-align: start;">
    <i-form @submit="onSubmit" v-model="form">
      <i-form-group>
        <i-form-label>Username</i-form-label>
        <i-input name="username" placeholder="Enter email address for username" />
        <i-form-error for="username" />
      </i-form-group>
      <i-form-group>
        <i-form-label>Password</i-form-label>
        <i-input placeholder="Enter password" type="password" name="password" />
        <i-form-error for="password" />
      </i-form-group>
      <i-button type="submit" color="primary" style="margin-top:10px;">Login</i-button>
    </i-form>
  </i-card>
</template>

<script>
import Axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      form: this.$inkline.form({
        username: {
          validators: [
            { name: 'email' }, { name: 'required' }
          ]
        },
        password: {
          validators: [
            { name: 'required' }
          ]
        }
      })
    };
  },
  methods: {
    onSubmit() {
      let loginInfoCorrect = false;

      Axios.get('http://localhost:5002/users')
        .then(res => {
          res.data.map((ele) => {
            loginInfoCorrect = (ele.username === this.form.username.value && ele.password === this.form.password.value)
          });
        }).then(() => {
          if (loginInfoCorrect) {
            this.$router.push("admin")
          } else alert("Incorrect username or password")
        })
        .catch(err => { console.log(err.message) })
    }
  }
}</script>

<style scoped>
.loginBox {
  border: 1px solid black;
  width: max-content;
  padding: 20px;
}
</style>