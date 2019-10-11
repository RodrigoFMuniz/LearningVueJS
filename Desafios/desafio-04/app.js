new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito: false,
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		classe5: false,
		cor: 'red',
		largura: 0,
		altura: 30
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classe1 = this.classe1 == 'destaque'? 'encolher':'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			setInterval(()=>{
				if(this.largura < 300){
					this.largura += 3
				}
			},10)
		},
		setPerigo(ev){
			if(ev.target.value == "true"){
				this.classe5 = true
			}else if(ev.target.value == "false"){
				this.classe5 = false
			}
		}
	},
	computed:{
		meuEstilo(){
			return{
				backgroundColor: this.cor,
				width: this.largura + 'px',
				height: this.altura +'px'
			}
		}
	}
})
