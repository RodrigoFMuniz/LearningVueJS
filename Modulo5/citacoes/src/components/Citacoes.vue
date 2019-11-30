<template>
    <div class="citacoes">
        <!-- <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span> -->
        <!-- <input type="text" v-model="citacoes[indice].texto" /> -->
       <Citacao>
            <h2 slot="autor">{{citacoes[indice].autor}} </h2>
            <p slot="texto">{{citacoes[indice].texto}}</p>
            <h6 slot="fonte">{{citacoes[indice].fonte}}</h6>
       </Citacao> 
    </div>
</template>

<script>
import Citacao from '@/components/Citacao'
import Bar from '@/bar'
export default {
    components:{Citacao},
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    created(){
        Bar.capturarResultado((num)=>{
            this.numero = num
            console.log('Citações created')
        })
    },
    destroyed(){
        console.log('Citações destroyed')
    },
    activated(){
        console.log('Citações activated')
    },
    deactivated(){
        console.log('Citações deactivated')
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    /* h2{
	    color: green;
    } */


</style>
