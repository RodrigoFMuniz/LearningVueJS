import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'

Vue.config.productionTip = false
//Vue.component('app-contador', Contador)//app-component é um componente global e pode ser utilizado em qq parte da aplicação
Vue.component('app-contadores', Contadores)//app-componentes é um componente global e pode ser utilizado em qq parte da aplicação

new Vue({
  render: h => h(App),
}).$mount('#app')
