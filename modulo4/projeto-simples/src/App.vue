<template>
  <div id="app">
    <h1>{{titulo}}</h1>
  </div>
</template>

<script>
export default {
    data: function(){
    return{
      titulo: 'Testando um novo component'
    }
  }
}
</script>

<style>
  #app{
    background-color: #222;
    color: #ffe;
    text-align: center;
  }
</style>