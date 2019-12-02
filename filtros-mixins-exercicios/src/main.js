import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('inverter', function(valor){
	return valor.split('').reverse().join('')
})

Vue.mixin({
	data(){
		return{
			global: 'Estou no mixin global'
		}
	}
	// created(){
	// 	console.log('Created - mixin Global')
	// }
})

new Vue({
	render: h => h(App),
	created(){
		console.log('Created - Vue instance')
	}
}).$mount('#app')
