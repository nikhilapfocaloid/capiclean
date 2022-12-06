import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
// import './assets/css/jquery.mCustomScrollbar.min.css';
// import './assets/css/owl.carousel.min.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
