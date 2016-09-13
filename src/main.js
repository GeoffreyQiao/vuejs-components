/**
 * App 主文件 含配置信息
 * @type {String}
 * @module App                  -     项目入口组件
 * @module Vue                   -    Vue框架
 * @module VueRouter        -     路由插件
 * @module VueResource    -     httpRequire插件
 */
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

/**
 * @module {View}   Index            -        默认视图
 * @module {View}   Product       -        商品相关功能视图
 */
import Index from './views/Index.view';
import Product from './views/Product.view';

Vue.config.debug = true;
/**  引入的插件需在 Vue app 启动前安装 “install”  */
Vue.use(VueRouter);
Vue.use(VueResource);

/** @type {VueRouter} 路由实例 */
const router = new VueRouter({
    history: true
});

router.map({
  '/index': {
    name: 'index',
    component: Index,
  },
  '/product': {
    component: Product
  }
});


router.redirect({
  '*': '/index',
});

router.start(App, '#app');
