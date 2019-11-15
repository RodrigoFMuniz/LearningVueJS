<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
       <p>Idade do usuário: <strong>{{idade}}</strong></p>
       <!-- <button @click="alterarIdade">Alterar Idade</button> -->
       <button @click="alterarIdadeFn">Alterar Idade</button>
    </div>
</template>

<script>
export default {
    props:{
        idade:{
            type: Number
        },
        alterarIdadeFn: Function
    },
    methods:{
        alterarIdade(){
            // this.idade++
            // this.$emit('idadeMudou', ++this.idade)
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
