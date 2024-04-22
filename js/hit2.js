class Hit2 {

    constructor(gameSize, player2) {

        this.gameSize = gameSize
        this.player2 = player2


        this.hitSize = {
            w: 250,
            h: 50
        }

        this.hitPos = {
            left: this.player2.player2Pos.left - (this.hitSize.w / 3),
            top: (this.player2.gameSize.h - this.player2.player2Size.h - 10) + this.hitSize.h
        }
        this.init()
    }

    init() {
        this.hitElement = document.createElement('div')
        this.hitElement.style.position = 'absolute'

        // this.hitElement.style.backgroundColor = 'purple'
        this.hitElement.style.width = `${this.hitSize.w}px`
        this.hitElement.style.height = `${this.hitSize.h}px`
        this.hitElement.style.left = `${this.hitPos.left}px`
        this.hitElement.style.top = `${this.hitPos.top}px`


        document.querySelector('#game-screen').appendChild(this.hitElement)
        console.log(this.player2)
        console.log(this.hitPos)
    }

}