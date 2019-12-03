<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr>
      <router-link 
      :to ="`/usuario/${id}/editar`" 
      primario>
      <p><strong>Código: </strong>{{ id }}</p>
      </router-link>
      <!-- :to ="`/usuario/${id}/editar`" -->
      <router-link 
      tag="button" 
      primario 
      :to ="{name:'editarUsuario', params:{id},
      query:{completo:true, ling:'pt'}}">
      Editar
      </router-link>
  </div>
</template>

<script>
export default {
    props:['id'],
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
}
</script>

<style>

</style>