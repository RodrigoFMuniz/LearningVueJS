<template>
    <div class="componente">
        <!-- <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{nome}}</strong></p> -->
        <p>Idade do usuário: <strong>{{idadeIrmao}}</strong></p>
        <!-- <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome(CallBack)</button> -->
    </div>
</template>

<script>
import barramento from '../barramento'
export default {
    // props:['nome'],
    data(){
        return{
            idadeIrmao: 0
        }
    },
    // Outra forma de declarar props
    // props:{
    //     // nome:{
    //     //     type: String,
    //     //     default: 'Anonimo'
    //     // },
    //     // reiniciarFn: Function,
    //     // idade: Number,
    //     // alterarIdadeFn: Function
    // },
    // inserindo atributos
    // props:{
    //     nome:{
    //         type: Object,
    //         nome:{
    //             type: String,
    //             default: 'Anônimo'

    //         }
    //         // required: true,
    //     }

    // },
    methods:{
        // inverterNome(){
        //     return this.nome.split('').reverse().join("")
        // },
        // reiniciarNome(){
        //     const old = this.nome
        //     this.nome='Pedro'
        //     this.$emit('nomeMudou', {
        //         new: this.nome,
        //         old
        //         })
        // },
        created(){
                barramento.$on('idade-mudou', (idadeEnviadaPeloPai)=>{
                    this.idadeIrmao = idadeEnviadaPeloPai
                    
                })
        }
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
