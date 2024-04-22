class Player1 {

  constructor(gameSize, gameScreen) {

    this.gameSize = gameSize
    // console.log(gameSize)

    this.gameScreen = gameScreen

    this.player1Size = {
      w: 80,
      h: 150
    }
    // console.log(this.player1Size)

    this.player1Pos = {
      left: 450,
      top: this.gameSize.h - this.player1Size.h - 10,
      base: this.gameSize.h - this.player1Size.h - 250
    }
    // console.log(this.player1Pos)

    this.player1Speed = {
      top: 20,
      left: 40,
      gravity: .4
    }

    this.player1Strength = 10

    this.player1Health = 100

    this.init()
  }



  init() {

    this.player1Element = document.createElement('div')
    // console.log(this.player1Element)

    this.player1Element.style.backgroundColor = 'blue'
    this.player1Element.style.position = 'absolute'
    this.player1Element.style.width = `${this.player1Size.w}px`
    this.player1Element.style.height = `${this.player1Size.h}px`
    this.player1Element.style.top = `${this.player1Pos.top}px`
    this.player1Element.style.left = `${this.player1Pos.left}px`


    document.querySelector("#game-screen").appendChild(this.player1Element)

  }

  move() {

    this.pullGravity()
    this.borderLimit()
    this.updatePositionPlayer1()
    this.attackPlayer1()

  }

  pullGravity() {

    if (this.player1Pos.top < this.player1Pos.base) {          // JUMPING! GRAVITY PULL
      this.player1Pos.top += this.player1Speed.top
      this.player1Speed.top += this.player1Speed.gravity
    } else {
      this.player1Pos.top = this.player1Pos.base
      this.player1Speed.top = 0     // ???
    }

  }

  moveLeftPlayer1() {
    this.player1Pos.left -= this.player1Speed.left
  }

  moveRightPlayer1() {
    this.player1Pos.left += this.player1Speed.left
  }


  updatePositionPlayer1() {
    this.player1Element.style.left = `${this.player1Pos.left}px`
    this.player1Element.style.top = `${this.player1Pos.top}px`

  }

  jumpPlayer1() {
    if (this.player1Pos.top >= this.player1Pos.base) {
      // console.log('SALTA')
      this.player1Pos.top -= 5
      this.player1Speed.top -= 10
    }

  }

  moveLeftJumpPlayer1() {
    this.moveLeft()
    this.jump()
  }

  leftLimit() {
    this.player1Pos.left *= 0
  }

  rightLimit() {
    this.player1Pos.left = this.gameSize.w - this.player1Size.w
  }


  borderLimit() {
    if (this.player1Pos.left <= 0) {
      this.leftLimit()
    }

    if (this.player1Pos.left >= this.gameSize.w - this.player1Size.w) {
      this.rightLimit()
    }
  }

  attackPlayer1() {

    return this.player1Strength

  }

  // damagePlayer1() {
  //   this.player1Health -= this.player2Strength
  // }


}   