import Vue from 'vue'
import App from './App.vue'
import router from './router'
import styles from './styles/styles.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  router,
  styles,
  render: h => h(App)
}).$mount('#app')
