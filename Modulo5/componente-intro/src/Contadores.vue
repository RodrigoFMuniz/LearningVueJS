<template>
    <div class="contadores">
        <app-contador v-for="c in 5" :key="c"/>
    </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
    components:{'app-contador': Contador} // Declaração local de componentes
}
</script>

<style>

</style>