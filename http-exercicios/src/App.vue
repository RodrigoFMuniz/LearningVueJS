<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert v-model="loginValido" variant="danger" dismissible>
      		Campo inválido
    	</b-alert>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input type="text" size ='lg' 
				v-model="usuario.nome" placeholder='Informe o nome'></b-form-input>
			</b-form-group>
			<b-form-group label="Email">
				<b-form-input type="email" size ='lg' 
				v-model="usuario.email" placeholder='Informe o email'></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
			<strong>Nome: </strong> {{usuario.nome}}<br>
			<strong>E-mail: </strong> {{usuario.email}}<br>
			<strong>ID: </strong> {{id}}<br>
			<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
			<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>

		</b-list-group-item>

	</div>
</template>

<script>
export default {
	data(){
		return{
			usuarios:[],
			id:null,
			usuario: {
				nome: '',
				email: ""
			},
			loginValido: false
		}
	},
	methods:{
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then(()=> this.limpar())
		},
		salvar(){
			if(this.usuario.nome == '' || this.usuario.email == ''){
				this.loginValido = true
			}else{
				const metodo = this.id ? 'patch' : 'post'
				const finalUrl = this.id ? `${this.id}.json`: '.json'
				this.$http[metodo](`/usuarios${finalUrl}`,this.usuario)
				.then(()=>{
					this.limpar()
					this.loginValido = false
				})
			}

		},
		obterUsuarios(){
			this.$http.get('usuarios.json')
			.then(resp=>{
				this.usuarios = resp.data
				console.log(this.usuarios)
			})
			// this.$http.defaults.headers.common['Authorization'] = 'abc123'
		}
	}
	// created(){
	// 	this.$http.post('usuarios.json',{
	// 		nome: 'Rodrigo',
	// 		email:'rodrigo.muniz.eng@gmail.com'
	// 	}).then(res=>console.log(res))
	// }

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
