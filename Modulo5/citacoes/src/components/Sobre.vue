<template>
    <div id="app">
        <button @click="avancarCitacao('+')">&lt;</button>
        <div class="paragraph">
            <p class="nome">Citações</p>
            <p class="versao">Versão 1.0</p>
        </div>
        <button @click="avancarCitacao('-')">&gt;</button>
    </div>
</template>

<script>
import Bar from '@/bar.js'
export default {
    data(){
        return{
            numero:0
        }
    },
    methods:{
        avancarCitacao(n){
            if(n=='+'){
                this.numero++
            }
            if(n=='-'){
                this.numero--
            }
            
            Bar.clicar(this.numero)            
        }
    },
    created(){
        console.log('Sobre created')
    },
    destroyed(){
        console.log('Sobre destroyed')
    },
    activated(){
        console.log('Sobre activated')
    },
    deactivated(){
        console.log('Sobre deactivated')
    }
}
</script>

<style scoped>
    div #app {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid #DDD;
        height: 200px;
        width: 200px;
        border-radius: 100px;
    }

    .paragraph{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        text-align: center;
    }

    p {
        margin: 0;
    }


    .nome {
        font-size: 2.1rem;
        font-weight: bold;
    }

    .versao {
        font-size: 1.4rem;
    }

    button{
        padding: 5px 15px 10px;
        margin: 10px 5px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        outline: none;
        border-style: none;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(255, 255, 105, 0.8);
        background-color: rgba(0, 0, 0, .5);
    }
    button:active{
        box-shadow: 0 0 5px rgba(112, 105, 105, 0)
    }

</style>
