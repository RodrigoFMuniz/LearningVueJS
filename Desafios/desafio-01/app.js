new Vue({
    el: '#desafio',
    data:{
        nome: 'Rodrigo Muniz',
        idade: 32 ,
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Google-Logo.svg'
    },
    methods:{
        idadeMult(){
            return this.idade*3
        },
        randomic(){
            numerRand = Math.random()
            return numerRand
        },
        inputName(event){
            this.nome = event.target.value
        }
    }
})