<template>
  <div class="section">
    <h2 class="title">About Sammy Star</h2>
    <p>Hi Sammy, this page was made for you in order to learn anything you might need to know</p>
    <p>
      by
      <a href="http://twitter.com/royrv13">Your Daddy</a>
    </p>
    <br />
    <h3 class="title sub-title">Source Code</h3>
    <p>You can find the source code for this project at the link below</p>
    <p>
      <a href="https://github.com/RoyRV/sammy-learning" target="_blank">github.com/royrv/sammy-learning</a>
    </p>
    <b-button @click="goHome" variant="info">Go home</b-button>
    <br />
  </div>
</template>
<script>
  import { sessionService } from '../services';
  export default {
    name: 'About',
    methods: {
      async goHome() {
        try {
          this.$root.$emit('selectCourse', null);
          sessionService.setSelectedCourse(null);
          await this.$router.push("/");
        } catch (error) {
          /*eslint no-empty: "error"*/
        }
      },
    },
  }
</script>