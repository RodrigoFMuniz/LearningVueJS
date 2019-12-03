<template>
  <div class="usuario-editar">
      <h3>Usuário Editar</h3>
      <p><strong>Código editar: </strong>{{ id }}</p>
      <p><strong>Completo: </strong>{{ $route.query.completo?'sim':'não' }}</p>
      <p><strong>Lingua: </strong>{{ $route.query.ling?'pt':'não' }}</p>
  </div>
</template>

<script>
export default {
    props:['id']

}
</script>

<style>

</style>