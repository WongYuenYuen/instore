<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/_base.scss';
html{
  /*margin: 0 !important;*/
  background: red;
}
#app{
  /*background: #000;*/
}
</style>
