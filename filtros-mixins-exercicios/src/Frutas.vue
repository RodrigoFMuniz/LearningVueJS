<template>
<div>
    <ul>
        <li v-for="f in frutas" :key="f">{{f}}</li>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </ul>
</div>
  
</template>

<script>
import frutasMixin from '@/frutasMixin'
import usuarioMixin from '@/usuarioMixin'
export default {
    mixins:[frutasMixin,usuarioMixin],
    created(){
        console.log('created Frutas-Vue')
    }
}
</script>

<style>

</style>