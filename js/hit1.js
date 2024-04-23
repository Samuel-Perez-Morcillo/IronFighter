class Hit1 {

    constructor(gameSize, player1) {

        this.gameSize = gameSize
        this.player1 = player1

        this.hit1Size = {
            w: 450,
            h: 450
        }

        this.hit1Pos = {
            left: this.player1.player1Pos.left - (this.hit1Size.w / 4.5),
            top: this.player1.player1Size.h,
            base: this.player1.player1Size.h,
        }

        this.init()
    }

    init() {
        this.createElement()
    }

    createElement() {
        this.hitElement = document.createElement('div')
        this.hitElement.style.position = 'absolute'

        // this.hitElement.style.backgroundColor = 'green'
        // this.hitElement.style.opacity = '0.5'
        this.hitElement.style.width = `${this.hit1Size.w}px`
        this.hitElement.style.height = `${this.hit1Size.h}px`
        this.hitElement.style.left = `${this.hit1Pos.left}px`
        this.hitElement.style.top = `${this.hit1Pos.top}px`


        document.querySelector('#game-screen').appendChild(this.hitElement)
    }

    updatePosition() {

        this.hit1Pos = {
            left: this.player1.player1Pos.left - (this.hit1Size.w / 4.5),
            top: this.player1.player1Size.h,
            base: this.player1.player1Size.h,
        }

        this.hitElement.style.width = `${this.hit1Size.w}px`
        this.hitElement.style.height = `${this.hit1Size.h}px`
        this.hitElement.style.left = `${this.hit1Pos.left}px`
        this.hitElement.style.top = `${this.hit1Pos.top}px`
    }





}