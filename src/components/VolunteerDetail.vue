<template>
  <div><button type="button" class="btn btn-primary" @click="$emit('go-back')">Back</button></div>
  <h3>VOLUNTEER DETAILS</h3>
  <div class="detail-container row pb-3">
    <div class="col-md-6">
      <label for="firstname">First Name </label>
      <input type="text" class="form-control" :value="volunteer.firstname" id="firstname" disabled>
    </div>
    <div class="col-md-6">
      <label for="lastname">Last Name</label>
      <input type="text" class="form-control" :value="volunteer.lastname" id="lastname" disabled />
    </div>

    <div class="col-md-6">
      <label for="email">Email</label>
      <input type="email" class="form-control" :value="volunteer.email" id="email" disabled />
    </div>
    <div class="col-md-6">
      <label for="mobile">MobileNumber</label>
      <input type="text" class="form-control" :value="volunteer.phone" id="mobile" disabled />
    </div>
    <div class="col-md-6">
      <label for="dob"> Birthdate </label>
      <input type="text" class="form-control" :value="volunteer.dob" id="dob" disabled />
    </div>
    <div class="col-md-6">
      <label for="gender"> Gender </label>
      <input type="text" class="form-control" :value="volunteer.gender" id="gender" disabled />
    </div>
    <div class="col-md-6">
      <label for="address">Address</label>
      <input type="text" class="form-control" :value="volunteer.address" id="address" disabled />
    </div>
    <div class="col-md-6">
      <label for="city">City </label>
      <input type="text" class="form-control" :value="volunteer.city" id="city" disabled />
    </div>

    <div class="col-md-12"></div>

    <div class="col-md-6">
      <label for="nationality">Education </label>
      <input type="text" class="form-control" :value="volunteer.education" id="nationality" disabled />
    </div>

    <div class="col-md-6">
      <label for="idtype">Hindi</label>
      <input type="price" class="form-control" :value="volunteer.hindi" id="idtype" disabled />
    </div>

    <div class="col-md-6">
      <label for="donationamount">Profession</label>
      <input type="price" class="form-control" :value="volunteer.profession" id="donationamount" disabled />
    </div>

    <div class="col-md-6">
      <label for="idtype">Marathi</label>
      <input type="price" class="form-control" :value="volunteer.marathi" id="idtype" disabled />
    </div>

    <div class="col-md-6">
      <label for="idnumber">Preferred Team</label>
      <input type="text" class="form-control" :value="volunteer.team" id="idnumber" disabled />
    </div>

    <div class="col-md-6">
      <label for="idtype">English</label>
      <input type="price" class="form-control" :value="volunteer.english" id="idtype" disabled />
    </div>

    <div class="col-md-6" v-if="volunteer.team === 'Teaching'">
      <label for="donationfrequency">Mode of teaching</label>
      <input type="text" class="form-control" :value="volunteer.mode" id="donationfrequency" disabled />
    </div>

    <div class="col-md-12"></div>

    <div class="col-md-6">
      <label for="idnumber">Got to know via</label>
      <input type="text" class="form-control" :value="volunteer.reference" id="idnumber" disabled />
    </div>
  </div>
</template>

<script>
export default {
  name: "VolunteerDetail",
  props: {
    volunteer: Object
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