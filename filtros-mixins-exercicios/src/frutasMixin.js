export default{
    data(){
        return {
            fruta:'',
            frutas:['banana', 'laranja', 'maça']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta)
            this.fruta=''
        }
    }
}