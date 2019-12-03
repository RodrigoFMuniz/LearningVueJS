import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio.vue'
import Usuario from '@/components/usuarios/Usuario.vue'
import UsuarioLista from '@/components/usuarios/UsuarioLista.vue'
import UsuarioDetalhe from '@/components/usuarios/UsuarioDetalhe.vue'
import UsuarioEditar from '@/components/usuarios/UsuarioEditar.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Inicio, name: 'inicio'
        },
        {
            path:'/usuario',
            component: Usuario,
            props:true,
            children:[
                {path:'', component:UsuarioLista},
                {path:':id', component:UsuarioDetalhe, props: true},
                {path:':id/editar', component:UsuarioEditar, props: true,
            name:'editarUsuario'}
            ]
        }
    ]
})