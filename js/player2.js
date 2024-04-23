class Player2 {

  constructor(gameSize, gameScreen) {

    this.gameSize = gameSize
    // console.log(gameSize)

    this.gameScreen = gameScreen

    this.player2Size = {
      w: 250,
      h: 400
    }
    // console.log(this.player2Size)

    this.player2Pos = {
      left: this.gameSize.w * 0.7,
      top: this.gameSize.h - this.player2Size.h - 70,
      base: this.gameSize.h - this.player2Size.h - 70
    }
    // console.log(this.player2Pos)

    this.player2Speed = {
      top: 20,
      left: 40,
      gravity: 1.2
    }

    this.player2Strength = 10
    this.player2Health = 100

    // player1 = undefined

    this.init()
  }



  init() {

    this.player2Element = document.createElement('img')
    this.player2Element.src = "./img/fighter2.gif"
    // console.log(this.player2Element)

    // this.player2Element.style.backgroundColor = 'red'
    this.player2Element.style.position = 'absolute'
    this.player2Element.style.width = `${this.player2Size.w}px`
    this.player2Element.style.height = `${this.player2Size.h}px`
    this.player2Element.style.top = `${this.player2Pos.top}px`
    this.player2Element.style.left = `${this.player2Pos.left}px`


    document.querySelector("#game-screen").appendChild(this.player2Element)

  }
  createElement() {
    this.player1 = new Player1(this.gameSize)
  }

  move() {

    this.pullGravity()
    this.borderLimit()
    this.updatePositionPlayer2()

  }

  pullGravity() {

    if (this.player2Pos.top < this.player2Pos.base) {          // JUMPING! GRAVITY PULL
      this.player2Pos.top += this.player2Speed.top
      this.player2Speed.top += this.player2Speed.gravity
    } else {
      this.player2Pos.top = this.player2Pos.base
      this.player2Speed.top = 0     // ???
    }

  }

  moveLeftPlayer2() {
    this.player2Pos.left -= this.player2Speed.left
  }

  moveRightPlayer2() {
    this.player2Pos.left += this.player2Speed.left
  }


  updatePositionPlayer2() {
    this.player2Element.style.left = `${this.player2Pos.left}px`
    this.player2Element.style.top = `${this.player2Pos.top}px`

  }

  jumpPlayer2() {
    if (this.player2Pos.top >= this.player2Pos.base) {
      // console.log('SALTA')
      this.player2Pos.top -= 2
      this.player2Speed.top -= 20
    }

  }

  moveLeftJumpPlayer2() {
    this.moveLeft()
    this.jump()
  }

  leftLimit() {
    this.player2Pos.left *= 0
  }

  rightLimit() {
    this.player2Pos.left = this.gameSize.w - this.player2Size.w
  }


  borderLimit() {
    if (this.player2Pos.left <= 0) {
      this.leftLimit()
    }

    if (this.player2Pos.left >= this.gameSize.w - this.player2Size.w) {
      this.rightLimit()
    }
  }





  // fightPlayer2() {
  //   const resultFight = this.receiveDamagePlayer2(this.player1.attackPlayer1)
  //   return resultFight
  // }



}