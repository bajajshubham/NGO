<template>
  <form class="row g-3 border border-4 pb-3" @submit="onSubmit">
    <div class="col-md-6">
      <label for="firstname" class="form-label">First Name <span>*</span></label>
      <input type="text" class="form-control" v-model="fname" id="firstname" required />
    </div>
    <div class="col-md-6">
      <label for="lastname" class="form-label">Last Name<span>*</span></label>
      <input type="text" class="form-control" v-model="lname" id="inputPassword4" required />
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email<span>*</span></label>
      <input type="email" class="form-control" v-model="email" id="email" required />
    </div>
    <div class="col-md-6">
      <label for="mobile" class="form-label">MobileNumber <span>*</span></label>
      <input type="number" class="form-control" v-model="phone" id="mobile" required>
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">
        Billing Address <span>*</span></label>
      <input type="text" class="form-control" v-model="address" id="inputAddress" placeholder="1234 Main St" required />
    </div>
    <div class="col-md-6">
      <label for="city" class="form-label">City <span>*</span></label>
      <input type="text" class="form-control" v-model="city" id="city" required />
    </div>
    <div class="col-md-6">
      <label for="nationality" class="form-label">Nationality <span>*</span></label>
      <input type="text" class="form-control" v-model="nation" id="nationality" required />
    </div>
    <div class="col-md-6">
      <label for="donationamount" class="form-label">Donation Amount<span>*</span></label>
      <input type="price" class="form-control" v-model="amount" id="donationamount" required />
    </div>
    <div class="col-md-2">
      <label for="idtype" class="form-label">ID<span>*</span></label>
      <select id="inputid" v-model="id_doc" class="form-select" required>
        <option value="pan" selected>PAN</option>
        <option value="passport">Passport</option>
        <option value="aadhar">Aadhar Id</option>
      </select>
    </div>
    <div class="col-md-4">
      <label for="idnumber" class="form-label">ID Number<span>*</span></label>
      <input type="text" class="form-control" v-model="idnumber" id="idnumber" required />
    </div>

    <div class="col-md-12">
      <label for="donationfrequency" class="form-label">Donation Frequency<span>*</span></label>
      <div>
        <div class="form-check form-check-inline">
          <input v-model="frequency1" class="form-check-input" type="radio" name="flexRadioDefault"
            id="flexRadioDefault4" checked />
          <label class="form-check-label" for="flexRadioDefault4">
            One time
          </label>

          <input v-model="frequency2" class="form-check-input" type="radio" name="flexRadioDefault"
            id="flexRadioDefault3" />
          <label class="form-check-label" for="flexRadioDefault3">
            Monthly
          </label>
        </div>
      </div>
    </div>

    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="aggrementcheckbox" id="gridCheck" />
        <label class="form-check-label" for="gridCheck"><i> I am happy to pay the processing fees</i>
        </label>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary" :disabled="!aggrementcheckbox">
        Donate
      </button>
    </div>
  </form>
</template>

<script>
import Axios from "axios";
import { __localhost__ } from "@/constants";

export default {
  name: "DonateForm",
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
      frequency1: "",
      frequency2: "",
      aggrementcheckbox: false
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const payload = {
        firstname: this.fname,
        lastname: this.lname,
        email: this.email,
        phone: this.phone,
        address: this.address,
        city: this.city,
        nation: this.nation,
        amount: this.amount,
        document: this.id_doc,
        idNumber: this.idnumber,
        frequency: this.frequency2 === 'on' ? 'Monthly' : 'One time'
      };

      Axios.post(__localhost__ + "donations", payload).then((res) => {
        console.log(res)
        if (res.status === 201) {
          alert("Thank you for donating");
        }
      }).catch(err => { alert("Something went wrong."); console.log(err.message) });
    },
  }
};
</script>

<style scoped>
label>span {
  color: red;
}
</style>
