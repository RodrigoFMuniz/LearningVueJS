import Vue from 'vue'
export default new Vue({
    methods:{
        clicar(numero){
            this.$emit('clicou', numero)
        },
        capturarResultado(numero){
            this.$on('clicou', numero)
        }
    }
})