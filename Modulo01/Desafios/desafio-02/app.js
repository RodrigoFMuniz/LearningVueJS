new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertDown(){
            alert("Botão pressionado")
        },
        keyPressed(event){
            this.valor = event.target.value
        }
    }
})