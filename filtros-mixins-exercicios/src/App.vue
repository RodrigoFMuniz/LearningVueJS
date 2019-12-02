<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		 <p>Mixin usuario: {{usuarioLogado}}</p>
		<hr>
		 <p>Mixin global: {{global}}</p>
		<hr>

		<p>{{cpf | formataCPF | inverter}}</p>
		<hr>
		<input type="text" @input="cpfAluno=$event.target.value">
		<p>{{cpfAluno | formataCPF}}</p>
		<hr>
		<Frutas />
		<hr>
		<div>
		    <ul>
				<li v-for="f in frutas" :key="f">{{f}}</li>
				<input type="text" v-model="fruta" @keydown.enter="add">
			</ul>
		</div>


	</div>
</template>

<script>
import Frutas from '@/Frutas.vue'
import frutasMixin from '@/frutasMixin'
import usuarioMixin from '@/usuarioMixin'
export default {
	components:{Frutas},
	mixins: [frutasMixin, usuarioMixin],
	data(){
		return{
			cpf:'00000000000',
			cpfAluno:"11111111111",
			frutas:['maça']
		}
	},
	filters:{
		formataCPF(valor){
			const arr=valor.split('')
			arr.splice(3,0, '.')
			arr.splice(7,0, '.')
			arr.splice(11,0, '-')
			return arr.join('')
		}
	},
    methods:{
	},
	created(){
        console.log('created App-Vue')
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
