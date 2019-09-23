<template lang="pug">
  div#app
    m-header(text="Life Calendar")
    router-view
</template>

<script>

import MHeader from './components/MHeader'
export default {
  name: 'App',
  components: { MHeader },
  mounted() {
    const birthDate = localStorage.date
    this.$store.dispatch('setBirthDate', birthDate)
  }
}
</script>

<style lang="scss">
@import './assets/style/main.scss';
</style>
