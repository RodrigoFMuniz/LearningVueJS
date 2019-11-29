<template>
    <div id="app3">
       <h1>Irmão2</h1>
       <p>Vindo de Irmão 1: {{texto3}}</p>
       <p>Outra chamada de Irmão 2: {{texto4}}</p>
       <p>Mais uma chamada: {{texto5}}</p>
       <!-- <p>Texto de Hello: {{textoRecebidoHello}}</p> -->
       <p>Texto de Hello via emit: {{textoRecebidoHelloViaEmit}}</p>
   </div>
</template>

<script>
import Bar from '@/barramento'
export default {
    name: 'irmao2',
    // props:{textIrmao2: String},
    data(){
        return{
            texto3: '',
            textoRecebidoHelloViaEmit: '',
            texto4:'',
            texto5:''
        }
    },
    props:{textoRecebidoHello: String},
    created(){
        Bar.mudouTexto((e)=>{
            this.texto3 = e
        })
        Bar.mudouTexto((l)=>{
            this.textoRecebidoHelloViaEmit = l
        })
        Bar.mudouTexto((e)=>{
            this.texto4 = e
        })
        Bar.mudouTexto((l)=>{
            this.texto5 = l
        })

    }
}
</script>

<style>

</style>