import Vue from 'vue'
import App from './App.vue'
import TodoList from './components/todoList'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export { TodoList }