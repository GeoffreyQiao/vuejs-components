<template>
  <div id="app-section">
    <my-header class="app-header"></my-header>
    <router-view class="app-body"><!--  transition="fade" transition-mode="out-in" --></router-view>
    <my-footer class="app-footer"></my-footer>
  </div>
</template>

<script>

  import MyFooter from './components/AppFooter';
  import MyHeader from './components/AppHeader';

  export default {
    /**
     * 注册组件列表
     * @type {Object}
     * @module App/MyHeader     -   页头组件
     * @module App/MyFooter      -   页脚组件
     */
    components: {
      MyHeader,
      MyFooter
    },
    replace: false
  }
</script>

<style lang="scss">
  @media screen and (min-device-aspect-ratio: .0.99){
    html {
      font-size: 1vw;
    }
    @media screen and  (max-width:  510px) and ( max-height: 716px) {
      html {
        font-size: 2vw;
      }
    }
  }

   @media screen and (max-device-aspect-ratio: 1) {
    html {
      font-size: 1vh;
    }
  } 

/*
  @media screen and (max-width: 415px) and (max-height: 737px){
    html {
      font-size: 14px;
    }
  }
   @media screen and (max-width: 499px ) and ( max-height: 750px){
    html {
      font-size: 3.5vw;
    }
  } */

  $main-back-c: #2C3E50;
  $red: #C0392D;
  $green: #019875;
  $blue: #2980D9;

  %fullSize {
    height: 100%;
    width: 100%;
  }
  @mixin inout-willBlur($normal-blur: 5px,$hovered-blur: 0px,$trans: .5s){
    transition: $trans;
    filter: blur($normal-blur);
    &:hover {
            filter: blur($hovered-blur);
    }
  }
  @mixin flex-element($justify, $items: center, $direc : row, $iswrap: nowrap){
    display: flex;
    flex-flow: $direc $iswrap;
    justify-content: $justify;
    align-items: $items;
  }

  * {
    box-sizing: border-box;
    color: inherit;
    margin: 0;
    padding: 0;
    border: none;
    border-width: 0;
    border-image-width: 0;
    stroke-width: 0;
    border-horizontal-spacing: 0;
    border-vertical-spacing: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  tr {
    vertical-align: top;
    td {
      font: {
        weight: 500;
      }
    }
  }
  [v-cloak] { display: none }
  body {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    color: lighten($green, 10%);
  }

  #app-section {
    @include flex-element(flex-start, center, column);
    @extend %fullSize;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;

    a {
      &:hover {
        color: lighten($blue, 10%);
      }
    }

    .app-body, .app-footer, .app-header {
      display: block;
      width: 100%;
      z-index: 1;
    }

    .app-header {
      height: 5vh;
      padding: auto 1.5vw;
      background-color: darken($blue, 40%);
      @include inout-willBlur(1.5px, 0px);
    }

    .app-body {
      height: 90vh;
      padding: 1vh 1vw;
      background: $main-back-c;
    }

    .app-footer {
      height: 5vh;
      font-size: .6rem;
      background-color: darken($blue, 40%);

      a {
          color: lighten($green, 30%);
      }
    }
  }
</style>
