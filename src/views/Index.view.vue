<template>
  <section class="viewIndex">
    <p class="infoMsg" v-text="info"></p>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        info: '欢迎您来到小站'
      }
    },
    replace: false
  }
</script>

<style lang="scss" scoped>
  .viewIndex{
    height: 90vh;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    z-index: 99;

    .infoMsg{
      font-size: 5.5rem;
      text-align: center;
    }
  }
</style>
