<template>
<div>
    <h1>Contadores</h1>
    <div>{{contador}}</div>
    <button @click="contador++">+</button>
    <button @click="contador--">-</button>
</div>
</template>

<script>
export default {
    data(){
        return{
            contador: 40
        }
    }
}
</script>

<style>

</style>