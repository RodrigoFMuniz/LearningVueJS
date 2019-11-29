import Vue from 'vue'
export default new Vue({
    methods:{
        clicarNaLista(usuario){
            this.$emit('clicouNoItemListado',usuario)
        },
        clicouNoUsuario(callback){
            this.$on('clicouNoItemListado', callback)
        }
    }
})