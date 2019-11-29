<template>
    <div class="componente">
        <!-- <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p> -->
       <p>Idade do usuário: <strong>{{idadeEnviadaPeloPai}}</strong></p>
       <!-- <button @click="alterarIdade">Alterar Idade</button> -->
       <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    data(){
        return{
            idadeEnviadaPeloPai: 0
        }
    },
    // props:{
    //     idadeEnviadaPeloPai:{
    //         type: Number
    //     },
    //     alterarIdadeFn: Function
    // },
    methods:{
        alterarIdade(){          
            
            barramento.$emit('idade-mudou', ++this.idadeEnviadaPeloPai)
        }
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
