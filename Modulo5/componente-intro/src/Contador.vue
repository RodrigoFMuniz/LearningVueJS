<template>
    <div class="contador">
        <span>{{contador}}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contador:0,
        }
    },
    methods:{
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador--
        }
    }
}
</script>

<style>
    .contador span{
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }
    .contador button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background: coral;
        color: #fff;
        outline: none;
        border-style: none;
        margin:5px; 
        box-shadow: 0 0px 3px rgba(0,0,0,0.8);
    }

    .contador button:active{
        box-shadow: 0 0 0 #fff;
        transition: 0.1s
    }
</style>