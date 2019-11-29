import Vue from 'vue'
export default new Vue({
    methods:{
        alterarTexto(texto){
            this.$emit('textoMudou', texto)
        },
        mudouTexto(callback){
            this.$on('textoMudou', callback)
        }
    }
})