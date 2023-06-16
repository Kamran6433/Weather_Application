import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: Routes
});


// Custom Directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    if (binding.value == 'value' && binding.arg == 'argument') {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      el.style.backgroundColor = color;
      console.log(vnode);
    }
  }
});

//Filters
Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
