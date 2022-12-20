<template>
  <h1>Volunteer Process</h1>
  <p1
    >Decide which causes you care about. Identify the skills and knowledge you
    can offer. Create a volunteer resume. Determine how often you can volunteer.
    Research volunteer opportunities in your community. Get all the relevant
    details for the volunteer position. Apply for the volunteer position. Follow
    up after you apply. Complete any required training. Begin with a limited
    commitment.</p1
  >
  <h1 class="mt-2 md-3 mb-2 fw-bold">RegisrtrationForm</h1>
  <div class="container">
    <div class="position-relative top-0 right-0">
      <h5 class="mt-2 md-3 mb-2 fw-bold">Personal Details</h5>
    </div>
    <div class="form" v-if="page === 1">
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <label for="firstname"  class="form-label">First Name </label>
            <input
              v-model="firstname"
              placeholder="firstname"
              aria-label="first name"
              class="form-control"
            />
          </div>
          <div class="col">
            <p>Last Name*{{}}</p>

            <input
              v-model="lastname"
              placeholder="lastname"
              aria-label="Last name"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <p>D.O.B*{{}}</p>
            <input
              id="dob"
              type="date"
              v-model="dob"
              class="form-control"
              placeholder="D.O.B"
              aria-label="dob"
            />
          </div>
          <div class="col">
            <div id="gender">
              <span class="me-4"
                ><div>Gender* {{}}</div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    id="one"
                    value="One"
                    v-model="pickedGender"
                  />
                  <label for="one">Male</label>

                  <input
                    type="radio"
                    id="two"
                    value="Two"
                    v-model="pickedGender"
                  />
                  <label for="two">Female</label>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <p>Mobile Number*{{}}</p>
            <input
              v-model="mobile"
              placeholder="10 digit number"
              aria-label="mobile"
              class="form-control"
            />
          </div>
          <div class="col">
            <p>Email*{{}}</p>
            <input
              v-model="email"
              placeholder="email@gmail.com"
              aria-label="email"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row">
          <div class="col">
            <p>City of residence*{{}}</p>
            <input
              v-model="city"
              placeholder="city"
              aria-label="city"
              class="form-control"
            />
          </div>
          <div class="col">
            <p>Education Background*{{}}</p>
            <input
              v-model="education"
              placeholder="education"
              aria-label="education"
              class="form-control"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="dumbClass width: 953px; height: 1020px; left: 245px; top: 632px"
      v-else
    >
      <div class="row">
        <label for="firstname" class="form-label">Language profeciency*</label>
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
            v-bind="marathiLanguage"
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
            v-bind="hindiLanguage"
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
            v-bind="englishLanguage"
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
      <div class="row mt-5">
        <div class="col-md-4">
          <div>Team Preference* {{}}</div>

          <select v-model="selectedTeam">
            <option disabled value="">Please select one</option>
            <option>Teaching</option>
            <option>Operational</option>
            <option>Social Media</option>
          </select>
        </div>

        <div class="col-md-6">
          <div>Mode of Teaching* {{}}</div>

          <select v-model="selectedMode">
            <option disabled value="">Please select one</option>
            <option>Offline</option>
            <option>Online</option>
            <option>Hybrid</option>
          </select>
        </div>
      </div>
      <div class="row mt-4 md-4">How you know about us?</div>
      <div class="col-md-3">
        <div class="form-check">
          <input
            v-model="pickedReference"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Social media
          </label>
        </div>
        <div class="form-check">
          <input
            v-model="pickedReference"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Friends
          </label>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-check">
          <input
            v-model="pickedReference"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label class="form-check-label" for="flexRadioDefault3">
            Website
          </label>
        </div>
        <div class="form-check">
          <input
            v-model="pickedReference"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault4">
            Others
          </label>
        </div>
      </div>
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
      <button
        type="page === 2 ? 'submit' : 'button'"
        class="btn btn-primary"
        @click="pageUp"
      >
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
      dob: "",
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      city: "",
      education: "",
      page: 1,
      selectedTeam: "",
      selectedMode: "",
      pickedReference: "",
      pickedGender: "",
      marathiLanguage: "",
      hindiLanguage: "",
      englishLanguage: "",
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
        const payload = {
          firstname: this.firstname,
          dob: this.dob,
          lastname: this.lastname,
          mobile: this.mobile,
          email: this.email,
          city: this.city,
          education: this.education,
          selectedTeam: this.selectedTeam,
          selectedMode: this.selectedMode,
          pickedReference: this.pickedReference,
          pickedGender: this.pickedGender,
          marathiLanguage: this.marathiLanguage,
          hindiLanguage: this.hindiLanguage,
          englishLanguage: this.englishLanguage,
        };
        console.log(payload);
        console.log("Submitted");
      }
    },
  },
};
</script>

<style scoped>
.container {
  border: 2px solid #d9d9d9;

  border-radius: 2px;
  width: 750px;
  height: 460px;
  left: 241px;
  top: 189px;
}

.form {
  text-align: start;
}

.mb-3 {
  margin-left: (spacer * 0.25) !important;
}
.pager {
  display: flex;
  justify-content: space-between;
}

.form-check-label {
  text-align-last: left;
}
</style>