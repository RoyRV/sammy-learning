<template>
  <div id="app">
    <navBar></navBar>
    <b-container>
      <b-card class="b-card">
        <router-view :key="$route.fullPath" />
      </b-card>
    </b-container>
  </div>
</template>

<script>
  import navBar from './components/navBarComponent.vue';
  export default {
    name: 'App',
    components: {
      navBar
    },

  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .b-card {
    margin-top: 30px;
  }
</style>