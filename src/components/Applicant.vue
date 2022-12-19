<template>
  <div><button type="button" class="btn btn-primary" @click="$emit('go-back')">Back</button></div>
  <h3>APPLICANT DETAILS</h3>
  <div class="detail-container row pb-3">
    <div class="col-md-6">
      <label for="firstname">First Name </label>
      <input type="text" class="form-control" :value="applicant.firstname" id="firstname" disabled>
    </div>
    <div class="col-md-6">
      <label for="lastname">Last Name</label>
      <input type="text" class="form-control" :value="applicant.lastname" id="lastname" disabled />
    </div>

    <div class="col-md-6">
      <label for="email">Email</label>
      <input type="email" class="form-control" :value="applicant.email" id="email" disabled />
    </div>
    <div class="col-md-6">
      <label for="mobile">MobileNumber</label>
      <input type="text" class="form-control" :value="applicant.phone" id="mobile" disabled />
    </div>
    <div class="col-md-6">
      <label for="inputAddress"> Birthdate </label>
      <input type="text" class="form-control" :value="applicant.dob" id="inputAddress" disabled />
    </div>
    <div class="col-md-6">
      <label for="inputAddress"> Gender </label>
      <input type="text" class="form-control" :value="applicant.gender" id="inputAddress" disabled />
    </div>
    <div class="col-md-6">
      <label for="city">City </label>
      <input type="text" class="form-control" :value="applicant.city" id="city" disabled />
    </div>

    <div class="col-md-6"></div>

    <div class="col-md-6">
      <label for="nationality">Education </label>
      <input type="text" class="form-control" :value="applicant.education" id="nationality" disabled />
    </div>

    <div class="col-md-6">
      <label for="idtype">Hindi</label>
      <input type="price" class="form-control" :value="applicant.hindi" id="idtype" disabled />
    </div>

    <div class="col-md-6">
      <label for="donationamount">Profession</label>
      <input type="price" class="form-control" :value="applicant.profession" id="donationamount" disabled />
    </div>

    <div class="col-md-6">
      <label for="idtype">Marathi</label>
      <input type="price" class="form-control" :value="applicant.marathi" id="idtype" disabled />
    </div>

    <div class="col-md-6">
      <label for="idnumber">Preferred Team</label>
      <input type="text" class="form-control" :value="applicant.team" id="idnumber" disabled />
    </div>

    <div class="col-md-6">
      <label for="idtype">English</label>
      <input type="price" class="form-control" :value="applicant.english" id="idtype" disabled />
    </div>

    <div class="col-md-6" v-if="applicant.team === 'Teaching'">
      <label for="donationfrequency">Mode of teaching</label>
      <input type="text" class="form-control" :value="applicant.mode" id="donationfrequency" disabled />
    </div>

    <div class="col-md-12"></div>

    <div class="col-md-6">
      <label for="idnumber">Got to know via</label>
      <input type="text" class="form-control" :value="applicant.reference" id="idnumber" disabled />
    </div>
  </div>
</template>

<script>
export default {
  name: "Applicant",
  props: {
    applicant: Object
  },
  emits: ['go-back']
}
</script>

<style scoped>
h3 {
  align-self: center;
  font-weight: bolder;
}

.detail-container {
  border: 2px solid rgba(0, 0, 0, 0.212);
  border-radius: 12px;
  text-align: start;
  width: fit-content;
  max-width: 800px;
  align-self: center;
}

.row {
  margin: 0;
  --bs-gutter-y: 0.5rem;
}
</style>