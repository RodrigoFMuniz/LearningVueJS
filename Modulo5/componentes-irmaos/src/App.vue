<template>
  <div id="app">
    <hello />
    <hr>
    <irmao />
    <hr>
    <irmao2 />
    
  </div>
</template>

<script>
import Hello from '@/components/HelloWorld'
import Irmao from '@/components/Irmao1'
import Irmao2 from '@/components/Irmao2'
export default {
  name: 'app',
  components: {Hello, Irmao, Irmao2}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
