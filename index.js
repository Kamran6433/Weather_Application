import { Vue } from 'vue'
const App = require('./App');

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});