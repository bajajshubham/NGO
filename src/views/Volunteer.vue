<template>
  <div class='volunteer'>
    <RegistrationForm />
  </div>
</template>
<script>
import RegistrationForm from "@/components/RegistrationForm.vue";

export default {
  name: "Volunteer",
  components: { RegistrationForm },
};
</script>

<style scoped>
.volunteer {
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Work Sans';

}
</style>