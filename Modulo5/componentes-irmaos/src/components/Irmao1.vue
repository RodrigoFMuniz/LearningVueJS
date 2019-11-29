<template>
    <div id="app2">
        <h1>Irmão</h1>
        <input type="text" v-model='texto' @input="recebeIrmao1">
        <p>{{texto}}</p>
   </div>
</template>

<script>
import Bar from '@/barramento'
export default {
    name:'irmao',
    // props:{textohello: String},
    data(){
        return{
            texto: ''
        }
    },
    methods:{
        recebeIrmao1(){
            Bar.alterarTexto(this.texto)
            console.log('alterou texto', this.texto)
        }
    }
}
</script>

<style>

</style>