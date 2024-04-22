// class Fight {
//     constructor(gameSize, gameScreen) {

//         this.gameSize = gameSize
//         // console.log(gameSize)

//         this.gameScreen = gameScreen


//         player1 = undefined
//         player2 = undefined

//         this.init()
//     }

//     init() {
//         this.createElements()
//         this.fightPlayer1()
//         this.fightPlayer2()
//     }



//     createElements() {
//         this.player1 = new Player1(this.gameSize)
//         this.player2 = new Player2(this.gameSize)
//     }


//     fightPlayer1() {
//         const resultFight = this.player1.receiveDamagePlayer1(this.attackPlayer2)
//         return resultFight
//     }

//     fightPlayer2() {
//         const resultFight = this.player2.receiveDamagePlayer1(this.attackPlayer1)
//         return resultFight
//     }



// }