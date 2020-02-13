<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <common-footer />
  </div>
</template>

<script>
import CommonFooter from '@/components/CommonFooter'
export default {
  components: { CommonFooter },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 640px;
  margin: 0 auto 20px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  min-height: 1000px;
}
</style>
