<template>
  <footer class="app-footer">
    <p v-text="welcome"></p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a :href="link.webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a :href="link.github" target="_blank">Webpack</a> and
      <a :href="link.vueLoader" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a :href="link.template" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a :href="link.router" target="_blank">vue-router</a> for routing and
      <a :href="link.vuex" target="_blank">vuex</a> for state management.
    </p>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        welcome : 'Welcome to your Vue.js app!',
        link    : {
          webpack   : 'http://vuejs-templates.github.io/webpack',
          github    : 'http://webpack.github.io/',
          vueLoader : 'http://vuejs.github.io/vue-loader/',
          template  : 'https://github.com/vuejs-templates/webpack',
          router    : 'https://github.com/vuejs/vue-router/',
          vuex      : 'https://github.com/vuejs/vuex/'
        }
      }
    }
  }
</script>

<style lang="scss">
  .app-footer{
    height: 5vh;
  }
</style>
