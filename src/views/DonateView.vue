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
     <DonateForm />
    </div>
  </div>
</template>

<script>
import DonateForm from '../components/DonateForm.vue'
import Axios from 'axios'
import { __localhost__ } from '@/constants'
export default {
  name: "Donate",
  components: {
    DonateForm
  },
  // methods: {
  //   onSubmit(e) {
  //     e.preventDefault()
  //     const payload = {
  //       "firstname": this.fname,
  //       "lastname": this.lname,
  //       "email": this.email,
  //       "phone": this.phone,
  //       "address": this.address,
  //       "city": this.city,
  //       "nation": this.nation,
  //       "amount": this.amount,
  //       "document": this.id_doc,
  //       "idNumber": this.idnumber,
  //       "frequency": !this.monthlycheck ? "One time" : "Monthly"

  //     }
  //     //Axios.post(__localhost__ + "donations", payload)

  //   }
  // },
  // data() {
  //   return {
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //     city: "",
  //     nation: "",
  //     amount: "",
  //     id_doc: "",
  //     idnumber: "",
  //     monthlycheck: Boolean,
  //     aggrementcheckbox: false
  //   }
  // }
}


</script>


<style scoped>
.donation_container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin: 50px;
  text-align: start;
  width: fit-content;
  max-width: 800px;
}

.form-label {
  font-family: 'Work Sans';

}

label>span {
  color: red;
}
</style>