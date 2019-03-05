<template>
  <div id="app">
    <div class="wrapper">
          
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
    export default {
      name: "app",
      data() {
        return {
        };
      }
    };
</script>

<style lang="css">
    @import '/src/assets/dist/css/style.css';
    @import 'https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css';
    @import '/src/assets/css/nouislider.min.css';
    @import '/src/assets/css/custom.css';

    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
    }
</style>