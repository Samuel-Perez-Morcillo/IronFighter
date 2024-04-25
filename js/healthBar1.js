class HealthBar1 {
    constructor(gameSize, player1) {
        this.gameSize = gameSize
        this.player1 = player1

        this.HealthBar1Size = {
            w: 520,
            h: 40
        }

        this.HealthBar1Pos = {
            left: 20,
            top: 20
        }


        this.init()



    }
    init() {
        this.createElement()

    }

    createElement() {
        this.HealthBar1Element = document.createElement('div')
        this.HealthBar1Element.setAttribute('id', 'healthBar1')

        this.HealthProgress1Element = document.createElement('div')
        this.HealthProgress1Element.setAttribute('class', 'red-bar')

        this.HealthBar1Element.style.borderRadius = '45px'
        this.HealthBar1Element.style.position = 'absolute'
        this.HealthBar1Element.style.border = '3px solid white'
        this.HealthBar1Element.style.width = `${this.HealthBar1Size.w}px`
        this.HealthBar1Element.style.height = `${this.HealthBar1Size.h}px`
        this.HealthBar1Element.style.left = `${this.HealthBar1Pos.left}px`
        this.HealthBar1Element.style.top = `${this.HealthBar1Pos.top}px`

        this.HealthProgress1Element.style.backgroundColor = 'red'
        this.HealthProgress1Element.style.borderRadius = '43px'
        this.HealthProgress1Element.style.opacity = '.4'
        this.HealthProgress1Element.style.height = `${this.HealthBar1Size.h}px`
        this.HealthProgress1Element.style.left = `20px`
        this.HealthProgress1Element.style.top = `20px`


        this.HealthBar1Element.appendChild(this.HealthProgress1Element)
        document.querySelector('#game-screen').appendChild(this.HealthBar1Element)

    }

    updatePosition() {

        this.HealthBar1Size = {
            w: 520,
            h: 40
        }

        this.HealthBar1Pos = {
            left: 20,
            top: 20
        }

        this.HealthProgress1Element.style.width = `100%`


    }
}