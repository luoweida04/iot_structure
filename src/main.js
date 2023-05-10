import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'
import {
  Row,
  Col,
  Button,
  Tree,
  Select,
  Option,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Message // eslint-disable-line
} from 'element-ui';

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// Vue.use(Message)

axios.defaults.baseURL = 'http://101.33.196.140:8081'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')