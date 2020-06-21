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
    <b-button href="#" @click="click" variant="info">Go somewhere</b-button>
    <br />
  </div>
</template>
<script>
  export default {
    name: 'About',
    methods: {
      click() {
        console.log('')
      }
    },
  }
</script>