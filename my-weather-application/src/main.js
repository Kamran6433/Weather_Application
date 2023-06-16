import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

Vue.config.productionTip = false

// Custom Directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    el.style.backgroundColor = color;
    console.log(binding);
    console.log(vnode);
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
