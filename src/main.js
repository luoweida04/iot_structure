import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Row, Col, Button, Tree, Select, Option, Table, TableColumn} from 'element-ui';

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
