<template>
  <div class="container pb-2 mb-2">
    <div class="position-relative top-0 right-0">
      <h5 class="mt-2 md-3">Personal Details</h5>
    </div>
    <div v-if="page === 1">
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <label for="firstname" class="form-label">First Name </label>
            <input
              id="firstname"
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <label for="lastname" class="form-label">Last Name </label>
            <input
              id="lastname"
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <label for="dob" class="form-label">D.O.B</label>
            <input
              id="dob"
              type="date"
              class="form-control"
              placeholder="D.O.B"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <label for="gender" class="form-label">Gender</label>
            <div id="gender">
              <span class="me-4"
                ><input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked
                />
                <label class="form-check-label ms-1" for="flexRadioDefault1">
                  Female
                </label>
              </span>
              <span>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label ms-1" for="flexRadioDefault2">
                  Male
                </label></span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <label for="mobile" class="form-label"> Mobile Number</label>
            <input
              id="mobile"
              type="text"
              class="form-control"
              placeholder="10 digit number"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <label for="email" class="form-label">Email </label>
            <input
              id="email"
              type="text"
              class="form-control"
              placeholder="Email@gmail.com"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <label for="city" class="form-label">City of Residence </label>
            <input
              id="city"
              type="text"
              class="form-control"
              placeholder="City Name"
              aria-label="First name"
            />
          </div>
          <div class="col">
            <label for="profession" class="form-label">Profession </label>
            <input
              id="profession"
              type="text"
              class="form-control"
              placeholder="Profession"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="dumbClass" v-else>
      <div class="row">
        <label for="firstname" class="form-label">Language profeciency</label>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col">None</div>
        <div class="col">Elementary</div>
        <div class="col">Professional</div>
        <div class="col">Native</div>
      </div>
      <div class="row">
        <div class="col">Marathi</div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="marathiRadio"
            id="marathiRadio1"
            checked
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="marathiRadio"
            id="marathiRadio2"
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="marathiRadio"
            id="marathiRadio3"
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="marathiRadio"
            id="marathiRadio4"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">Hindi</div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="HindiRadio"
            id="HindiRadio1"
            checked
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="HindiRadio"
            id="HindiRadio2"
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="HindiRadio"
            id="HindiRadio3"
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="HindiRadio"
            id="HindiRadio4"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">English</div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="Englishradio"
            id="Englishradio1"
            checked
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="Englishradio"
            id="Englishradio2"
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="Englishradio"
            id="Englishradio3"
          />
        </div>
        <div class="col">
          <input
            class="form-check-input"
            type="radio"
            name="Englishradio"
            id="Englishradio4"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Team prefrence
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Teaching</a></li>
              <li><a class="dropdown-item" href="#">Operational</a></li>
              <li><a class="dropdown-item" href="#">Social media</a></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mode of Teaching
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Offline</a></li>
              <li><a class="dropdown-item" href="#">Online</a></li>
              <li><a class="dropdown-item" href="#">Hybrid</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">How you know about us?</div>
      <div class="col"><div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Social media
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Friends
  </label>
</div></div>
<div class="col"><div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Website
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Others
  </label>
</div></div>
    </div>

    <div class="pager">
      <button
        type="button"
        class="btn btn-secondary"
        @click="pageDown"
        :disabled="page === 1"
      >
        Prev
      </button>
      <button type="button" class="btn btn-primary" @click="pageUp">
        {{ page === 2 ? "Submit" : "Next" }}
      </button>
    </div>
  </div>

  <!-- <div class="col-md-3"></div> -->
</template>

<script>
export default {
  name: "RegisrtrationForm",
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    pageDown() {
      if (this.page > 1) {
        this.page--;
      }
    },
    pageUp() {
      if (this.page < 2) {
        this.page++;
      } else if (this.page === 2) {
        console.log("Submitted");
      }
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #d9d9d9;
  left: 356px;
  top: 251px;
  border-radius: 2px;
}

.form-text {
  margin-bottom: 0.5rem;
  font-size: null;
  font-style: null;
  font-weight: null;
}
.input- {
  font-family: Open Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  position: absolute;
  background: #d9d9d9c2;
}
.form-horizontal .control-label {
  text-align: left;
}
.mb-3 {
  margin-left: (spacer * 0.25) !important;
}
.pager {
  display: flex;
  justify-content: space-between;
}
.dumbClass {
  border: 1px solid red;
}
</style>