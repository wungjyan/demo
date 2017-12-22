// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
import { Row,Col,Container,Icon,Button,Input,Collapse,CollapseItem,Checkbox,Dropdown,DropdownMenu,DropdownItem} from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Input)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Checkbox)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
