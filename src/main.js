// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import Toasted from 'vue-toasted'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.use(Toasted, {
  duration: 9000,
  position: 'top-right',
  action : {
    text : 'Okay',
    onClick : (e, toastObject) => {
        toastObject.goAway(0);
    }
  }
})
/* eslint-disable no-new */
