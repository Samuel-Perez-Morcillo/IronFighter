class Hit2 {

    constructor(gameSize, player2) {

        this.gameSize = gameSize
        this.player2 = player2


        this.hit2Size = {
            w: 400,
            h: 80
        }

        this.hit2Pos = {
            left: this.player2.player2Pos.left - (this.hit2Size.w / 4.5),
            top: this.player2.player2Size.h,
            base: this.player2.player2Size.h
        }

        this.init()
    }

    init() {
        this.createElement()
    }

    createElement() {
        this.hitElement = document.createElement('div')
        this.hitElement.style.position = 'absolute'


        this.hitElement.style.width = `${this.hit2Size.w}px`
        this.hitElement.style.height = `${this.hit2Size.h}px`
        this.hitElement.style.left = `${this.hit2Pos.left}px`
        this.hitElement.style.top = `${this.hit2Pos.top}px`



        document.querySelector('#game-screen').appendChild(this.hitElement)
    }

    updatePosition() {

        this.hit2Pos = {
            left: this.player2.player2Pos.left - (this.hit2Size.w / 4.5),
            top: this.player2.player2Size.h,
            base: this.player2.player2Size.h
        }

        this.hitElement.style.width = `${this.hit2Size.w}px`
        this.hitElement.style.height = `${this.hit2Size.h}px`
        this.hitElement.style.left = `${this.hit2Pos.left}px`
        this.hitElement.style.top = `${this.hit2Pos.top}px`
    }
}