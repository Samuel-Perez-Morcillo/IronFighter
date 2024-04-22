class Hit1 {

    constructor(gameSize, player1) {

        this.gameSize = gameSize
        this.player1 = player1


        this.hitSize = {
            w: 250,
            h: 50
        }

        this.hitPos = {
            left: this.player1.player1Pos.left - (this.hitSize.w / 3),
            top: (this.player1.gameSize.h - this.player1.player1Size.h - 10) + this.hitSize.h
        }
        this.init()
    }

    init() {
        this.hitElement = document.createElement('div')
        this.hitElement.style.position = 'absolute'

        // this.hitElement.style.backgroundColor = 'green'
        this.hitElement.style.width = `${this.hitSize.w}px`
        this.hitElement.style.height = `${this.hitSize.h}px`
        this.hitElement.style.left = `${this.hitPos.left}px`
        this.hitElement.style.top = `${this.hitPos.top}px`


        document.querySelector('#game-screen').appendChild(this.hitElement)
        console.log(this.player1)
        console.log(this.hitPos)
    }

}