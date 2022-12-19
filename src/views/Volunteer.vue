<template>
<div class ='volunteer'>
          <h2><b>Volunteering Process
          </b></h2>
          <div class="para">
          <p>This is a long paragraph written to show how the line-height of an element is affected by our
            utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be
            customized as needed with our utility API. >This is a long paragraph written to show how the line-height of an element is affected by our
            utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be
            customized as needed with our utility API.</p>
          </div>
        </div>

  <RegistrationForm />
</template>
<script>
import RegistrationForm from "@/components/RegistrationForm.vue";

export default {
  name: "Volunteer",
  components: { RegistrationForm },
};
</script>

<style scoped>
.volunteer{
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Work Sans';

}

</style>