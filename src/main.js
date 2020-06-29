import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
import App from './App.vue'

Vue.use(VueWaypoint)
Vue.use(VueFullpage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
