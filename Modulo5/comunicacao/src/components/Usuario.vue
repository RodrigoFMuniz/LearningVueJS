<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <!-- <p>Nome é <strong>{{nome}}</strong></p>
        <p>Idade é: <strong>{{idade}}</strong></p>
        <button @click="alterarNome">Alterar Nome</button> -->
        <hr>
        <div class="componentes">
            <!-- <app-usuario-info
            :nome='nome'
            :idade='idade'
            @nomeMudou="nome=$event.new"
            :reiniciarFn="reiniciarNome"
            alterarIdadeFn="alterarIdade" />
            <app-usuario-editar
            :idadeVindaDoPai="idade"
             -->
             <!-- /> -->
             <app-usuario-info></app-usuario-info >
             <app-usuario-editar></app-usuario-editar>
        </div>
    </div>
</template>



<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return {
            nome: 'Rodrigo',
            idade: 20
            // usuario:{
            //     nome:'Rodrigo',
            //     sobrenome: 'qualquer',
            //     idade: 20
            // }
        }
    },
    methods:{
        alterarNome(){
            this.nome='Ana'
        },
        reiniciarNome(){
            this.nome ='Carlos'
        },
        alterarIdade(){
            return this.idade++
        }
    }
}
</script>





<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
