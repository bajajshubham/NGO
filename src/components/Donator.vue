<template>
  <div><button type="button" class="btn btn-primary" @click="$emit('go-back')">Back</button></div>
  <h3>DONATION DETAILS</h3>
  <div class="detail-container row pb-3">
    <div class="col-md-6">
      <label for="firstname">First Name </label>
      <input type="text" class="form-control" :value="donator.firstname" id="firstname" disabled>
    </div>
    <div class="col-md-6">
      <label for="lastname">Last Name</label>
      <input type="text" class="form-control" :value="donator.lastname" id="lastname" disabled />
    </div>

    <div class="col-md-6">
      <label for="email">Email</label>
      <input type="email" class="form-control" :value="donator.email" id="email" disabled />
    </div>
    <div class="col-md-6">
      <label for="mobile">MobileNumber</label>
      <input type="text" class="form-control" :value="donator.phone" id="mobile" disabled />
    </div>
    <div class="col-12">
      <label for="inputAddress"> Billing Address </label>
      <input type="text" class="form-control" :value="donator.address" id="inputAddress" disabled />
    </div>
    <div class="col-md-6">
      <label for="city">City </label>
      <input type="text" class="form-control" :value="donator.city" id="city" disabled />
    </div>
    <div class="col-md-6">
      <label for="nationality">Nationality </label>
      <input type="text" class="form-control" :value="donator.nation" id="nationality" disabled />
    </div>
    <div class="col-md-6">
      <label for="donationamount">Donation Amount</label>
      <input type="price" class="form-control" :value="donator.amount" id="donationamount" disabled />
    </div>

    <div class="col-md-2">
      <label for="idtype">ID</label>
      <input type="price" class="form-control" :value="donator.document" id="idtype" disabled />
    </div>
    <div class="col-md-4">
      <label for="idnumber">ID Number</label>
      <input type="text" class="form-control" :value="donator.idNumber" id="idnumber" disabled />
    </div>

    <div class="col-md-6">
      <label for="donationfrequency">Donation Frequeny</label>
      <input type="text" class="form-control" :value="donator.frequency" id="donationfrequency" disabled />
    </div>
  </div>
</template>

<script>
export default {
  name: "Donator",
  props: {
    donator: Object
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