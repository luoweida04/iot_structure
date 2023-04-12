import Vue from 'vue'
import App from './App.vue'
import { Row, Col, Button, Select } from 'element-ui';

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Select)

new Vue({
  render: h => h(App),
}).$mount('#app')
