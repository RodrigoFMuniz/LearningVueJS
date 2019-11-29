<template>
  <div id="app1">
    <h1>Hello</h1>
    <p @input="Bar.$emit('enviarDadosHello', this.texto1)">Texto vindo do Irmão:{{texto1}}</p>

    <!-- <irmao2 :textoRecebidoHello='texto1'/> -->
  </div>
</template>

<script>
import Bar from '@/barramento'
// import Irmao2 from '@/components/Irmao2'
export default {
  name:'HelloWorld',
  // components:{Irmao2},
  data(){
    return{
      texto1:'Olá'
    }
  },
  // props:{textoIrmao1: String},
  methods:{

  },
  created(){
      console.log('Hello World')
      Bar.$on('comunicacaodoIrmao1',(texto2)=>{
        this.texto1 = texto2
      })
    }

}
</script>

<style scoped>

</style>
