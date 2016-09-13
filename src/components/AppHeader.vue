<style lang="scss" scoped>
  %fullSize {
    height: 100%;
    width: 100%;
  }

  $search-back-c: #8296C8;
  $header-back-c: #37466A;
  $header-c: #42b983;

  .header-line,
  .header-line>.header-item,
  .header-item>.header-img,
  .header-item>.header-nav,
  .header-nav>.navbar
  {
    display: block;
    height: 100%;
  }
  .site-logo{
    max-height: 100%;
  }
  .app-header {
    height: 5vh;
    width: 100%;
    padding: 0 2vw;
    background-color: $header-back-c;
    overflow: hidden;

    .header-line {
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: stretch;

      .header-item {
        font-size: 1.2rem;
      }
        .header-img {
          flex: 0 0 20%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;

          & img:hover {
            cursor: pointer;
          }

          ::placeholder {
            color: lighten($header-c, 70%);
          }

          .header-search {
            height: 55%;
            border: none;
            border-radius: .5rem;
            margin-left: 2vw;
            background-color: $search-back-c;
          }
        }

        .header-nav {
          flex: 1 1 80%;

          .navbar{
            display: block;
            @extend %fullSize;

            .nav-item-list {
              display: flex;
              @extend %fullSize;
              flex-flow: row nowrap;
              justify-content: flex-start;
              align-items: center;

              .v-link-active{
                border-bottom:  2px solid lighten($header-back-c, 30%);
              }

              .nav-item {
                display: block;
                max-height: 80%;
                max-width: 80%;
                margin-left: 2vw;
              }
            }
          }
      }
    }
  }
</style>

<template>
  <header id="header" class="app-header">
      <section class="header-line">
          <div class="header-item header-img">
            <img src="../assets/logo.png" :alt="img.info" class="site-logo" @click="$router.go('index')"/>
            <input type="text" v-model="query" class="header-search" placeholder=" Search here" @change="igo()">
          </div>
          <div class="header-item header-nav">
              <nav class="navbar">
                  <ul class="nav-item-list">
                      <li class="nav-item" v-for="i of nav">
                          <a v-link="i.link" class="nav-item-link">{{ i.text }}</a>
                      </li>
                  </ul>
              </nav>
          </div>
      </section>
  </header>
<!-- /header -->
</template>

<script>

  export default {
    /**
     * Header组件数据容器data
     * @return {Object}       存有组件数据的对象
     */
    data() {
      return {
        /**
         * 搜索内容
         * @type {String}
         */
        query: '',

        /**
         * LOGO图片信息
         * @type {Object}
         */
        img: {
          info: 'VueJS'
        },

        /**
         * 导航栏信息列表
         * @type {Array}
         */
        nav: [
          {
            link: '/product',
            text: '商品列表'
          },
          {
            link: 'https://www.github.com',
            text: 'GitHub'
          }
        ]
      }
    },

    /**
     * 调用该组件方传递来的数据
     * @type {Object}
     */
    props: {
      passData: {
        type: Array,
        required: false
      }
    },

    methods: {
      igo(){
          console.dir(window)
      }
    }
  }
</script>
