import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-f0130.firebaseio.com/'
//somente se estivesse acessando axios de forma global
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL:'https://curso-vue-f0130.firebaseio.com/',
            // headers:{
            //     'Authorization': 'abc123'
            //     // get:{
            //     //     'Authorization': 'abc123'
            //     // }
            // }
        })

        Vue.prototype.$http.interceptors.request.use(config=>{
            console.log(config.method)
            // if(config.method == 'post'){
            //     config.method = 'put'
            // }
            return config
        }, error =>Promise.reject(error))

        // Vue.prototype.$http.interceptors.response.use(res=>{
        //     const arr = []
        //     for(let chave in res.data){
        //         arr.push({id:chave, ...res.data[chave]})
        //     }
        //     res.data = arr
        //     return res
        // }, error=> Promise.reject(error))

    }
})