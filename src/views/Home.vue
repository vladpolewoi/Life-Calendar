<template lang="pug">
  div.home
    div.wrapper.column-flex.justify-center.align-center
      div
        span.label Enter your birth date:
        div.flex
          input.input(
            v-model="birthDate"
            @keydown.enter="onSubmit"
            type="date"
          )
          div.button.success(@click="onSubmit") Ok
        div.error(v-show="validationError") field is empty
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      birthDate: '',
      validationError: false
    }
  },
  methods: {
    onSubmit() {
      this.validate();
      if (this.validationError) return null;
      this.$store.dispatch('setBirthDate', this.birthDate);
      this.$router.push({ path: '/calendar' });
    },
    validate() {
      this.validationError = !this.birthDate.length
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  width: 100%;
}
.input {
  margin-right: 15px;
}
.label {
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
}
.error {
  margin-top: 5px;
}
</style>
