<template lang="pug">
  div.header.flex.align-center
    span {{ text }}
</template>

<script>
export default {
  name: 'MHeader',
  props: ['text']
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  font-size: 1.5em;
  top: 20px;
  left: 20px;
}
</style>
