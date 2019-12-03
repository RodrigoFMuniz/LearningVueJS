<template>
  <div id="usuario">
      <h1>Usuários</h1>
      <hr>
      <router-view />
      <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
    // props:['id'],
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // },
    //     watch:{
    //         $route(to, from){
    //             this.id = to.params.id
    //             console.log(from)
    //         }
    //     },
    methods:{
        irParaInicio(){
            // this.$router.push('/')
            // this.$router.push({path:'/'})
            this.$router.push({name:'inicio'})
        }
    },
}
</script>

<style>

</style>