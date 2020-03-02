import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store'
import ViewUI from 'view-design';

Vue.use(ViewUI);
Vue.config.productionTip = false

//全局引入quickly.css
import '../quickly-css/dist/quickly-css.css'
//全局引入iview
import '../iview/iview'
//全局引入iconfont
import '../iconfont/iconfont.css'

Vue.use(ViewUI, {
  transfer: true,
  size: 'large',
  capture: false,
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 20
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')