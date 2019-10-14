const vm = new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        finishGame: false,
        logs: []
    },
    computed:{
        hasResult(){
            if(this.playerLife == 0 || this.monsterLife == 0)
            this.finishGame = true
            return this.finishGame
        }
    },
    methods:{
        attack(){
            let playerAttack = Math.floor(Math.random()*7)
            let monsterAttack = Math.floor(Math.random() * 10)
            this.monsterLife = Math.max((this.monsterLife - playerAttack),0)
            if (this.monsterLife > 0) {
                this.playerLife = Math.max((this.playerLife - monsterAttack), 0)
                this.registerLog((`O jogador atacou com ${playerAttack} e recebeu ${monsterAttack} de dano.`),'player')
                this.registerLog((`O monstro atacou com ${monsterAttack} e recebeu ${playerAttack} de dano.`), 'monster')
            }else{
                this.registerLog(`O jogador venceu o monstro`,'winner')
            }  
            if(this.playerLife == 0 && this.monsterLife > 0){
                this.registerLog(`O jogador perdeu para o monstro`,'loser')
            }             
        },
        superAttack(){
            let playerAttack = Math.floor(Math.random()*15)
            let monsterAttack = Math.floor(Math.random() * 10)
            this.monsterLife = Math.max((this.monsterLife - playerAttack),0)
            if(this.monsterLife > 0){
                this.playerLife = Math.max((this.playerLife - monsterAttack),0)
                this.registerLog((`O jogador atacou com ${playerAttack} e recebeu ${monsterAttack} de dano.`),'player')
                this.registerLog((`O monstro atacou com ${monsterAttack} e recebeu ${playerAttack} de dano.`), 'monster')
            }else {
                this.registerLog(`O jogador venceu o monstro`,'winner')
            }    
            if(this.playerLife == 0 && this.monsterLife > 0){
                this.registerLog(`O jogador perdeu para o monstro`,'loser')
            }       

        },
        heal(){
            let healing = Math.floor(Math.random()*15)
            this.playerLife = Math.min(this.playerLife + (healing - (Math.floor(Math.random()*10))),100)
            this.registerLog(`O jogador ganhou ${healing} de vida.`, "heal")
        },
        giveUp(){
            this.finishGame = true 
            return this.finishGame
        },
        startGame(){
            this.finishGame = false
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        registerLog(text, cls){
            this.logs.unshift({ text, cls })
        }
    },
    // watch:{
    //     hasResult(value){
    //         if(value) this.finishGame = false
    //     }
    // }
})