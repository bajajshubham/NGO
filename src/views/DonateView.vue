<template>

  <div class="donation_container">

    <div class="container px-4 mx-auto">
      <div class="row gx-5">
        <div class="col">
          <img src="../assets/pexels-rebecca-zaal-764681.jpg" class="rounded float-start" width="600" height="380"
            alt="...">
        </div>
        <div class="col">
          <h2><b>Donate</b></h2>
          <p><i>Thank you for choosing to support our cause of education equity</i></p>
          <p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our
            utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be
            customized as needed with our utility API.</p>
          <p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our
            utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be
            customized as needed with our utility API.</p>
        </div>
      </div>
    </div>




    <h1 class="donate_header">DONATION FORM</h1>

    <div class="donation_form">
      <form class="row g-3 border border-4" @submit="onSubmit">

        <div class="col-md-6">
          <label for="firstname" class="form-label">First Name</label>
          <input type="text" class="form-control" v-model="fname" id="firstname">
        </div>
        <div class="col-md-6">
          <label for="lastname" class="form-label">Last Name</label>
          <input type="text" class="form-control" v-model="lname" id="inputPassword4">
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email" id="email">
        </div>
        <div class="col-md-6">
          <label for="mobile" class="form-label">MobileNumber</label>
          <input type="text" class="form-control" v-model="phone" id="mobile">
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" v-model="address" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="col-md-6">
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" v-model="city" id="city">
        </div>
        <div class="col-md-6">
          <label for="nationality" class="form-label">Nationality</label>
          <input type="text" class="form-control" v-model="nation" id="nationality">
        </div>
        <div class="col-md-6">
          <label for="donationamount" class="form-label">Donation Amount</label>
          <input type="price" class="form-control" v-model="amount" id="donationamount">
        </div>

        <div class="col-md-2">
          <label for="idtype" class="form-label">ID</label>
          <select id="inputid" v-model="id_doc" class="form-select">
            <option selected>PAN</option>
            <option>Passport</option>
            <option>Aadhar Id</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="idnumber" class="form-label">ID Number</label>
          <input type="text" class="form-control" v-model="idnumber" id="idnumber">
        </div>

        <div class="col-md-12">
          <label for="donationfrequency" class="form-label">Donation Frequeny</label>
          <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
              <label class="form-check-label" for="flexRadioDefault1">
                One time
              </label>
            </div>
            <div class="form-check  form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="monthlycheck" id="flexRadioDefault2">
              <label class="form-check-label" for="flexRadioDefault2">
                Monthly
              </label>
            </div>
          </div>
        </div>



        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="aggrementcheckbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck"><i>
                I am happy to pay the processing fees</i>
            </label>
          </div>
        </div>


        <div class="col-12">
          <button type="submit" class="btn btn-primary" :disabled="!aggrementcheckbox">Donate</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import Axios from 'axios'
import { __localhost__ } from '@/constants'
export default {
  name: "Donate",
  methods: {
    onSubmit(e) {
      e.preventDefault()
      const payload = {
        "firstname": this.fname,
        "lastname": this.lname,
        "email": this.email,
        "phone": this.phone,
        "address": this.address,
        "city": this.city,
        "nation": this.nation,
        "amount": this.amount,
        "document" : this.id_doc,
        "idNumber": this.idnumber,
        "frequency": !this.monthlycheck ? "One time" : "Monthly"

      }
      //Axios.post(__localhost__ + "donations", payload)

    }
  },
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      nation: "",
      amount: "",
      id_doc: "",
      idnumber: "",
      monthlycheck: Boolean,
      aggrementcheckbox: false
    }
  }
}


</script>


<style scoped>
.donation_container {
  margin-top: 100px;
  justify-items: center;
  font-family: 'Work Sans';
}

.donate_header {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 56px;
  text-align: center;
  margin-top: 80px;
  color: #1567B1;
}

.donation_form {

  margin-top: 50px;
  margin-left: 500px;
  margin-right: 500px;
  text-align: start;
}

.form-label {
  font-family: 'Work Sans';

}
</style>