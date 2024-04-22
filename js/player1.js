class Player1 {

  constructor(gameSize) {

    this.gameSize = gameSize
    // console.log(gameSize)

    this.player1Size = {
      w: 250,
      h: 400
    }
    // console.log(this.player1Size)

    this.player1Pos = {
      left: 250,
      top: this.gameSize.h - this.player1Size.h - 70,
      base: this.gameSize.h - this.player1Size.h - 70
    }
    // console.log(this.player1Pos)

    this.player1Speed = {
      top: 20,
      left: 40,
      gravity: 1.2
    }

    this.player1Strength = 10
    this.player1Health = 100


    this.init()
  }



  init() {

    this.player1Element = document.createElement('img')
    this.player1Element.src = "./img/jin.gif"
    // console.log(this.player1Element)

    // this.player1Element.style.backgroundColor = 'blue'
    this.player1Element.style.position = 'absolute'
    this.player1Element.style.width = `${this.player1Size.w}px`
    this.player1Element.style.height = `${this.player1Size.h}px`
    this.player1Element.style.top = `${this.player1Pos.top}px`
    this.player1Element.style.left = `${this.player1Pos.left}px`

    // this.player1Element.setAttribute('class', 'player1')

    document.querySelector("#game-screen").appendChild(this.player1Element)


  }

  // createHitbox() {



  //   this.player1Element2 = document.createElement('div')

  //   this.player1Element2.style.position = 'absolute'
  //   this.player1Element2.style.width = `${(this.player1Size.w) * .5}px`
  //   this.player1Element2.style.height = `${(this.player1Size.h) / 2}px`
  //   this.player1Element2.style.top = `${(this.player1Pos.top) * .5}px`
  //   this.player1Element2.style.left = `${(this.player1Pos.left) / .5}px`
  //   this.player1Element2.style.backgroundColor = 'green'

  //   document.querySelector('#player1').appendChild(this.player1Element2)

  // }





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
      this.player1Pos.top -= 2
      this.player1Speed.top -= 20
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
    // console.log("player1 attack")
    return this.player1Strength

  }

  receiveDamagePlayer1(oponentStrength) {

    if (this.player1Health > 0) {
      this.player1Health -= oponentStrength
    } else {
      console.log("Player 2 Wins")
    }
  }

  // fightPlayer1() {
  //   const resultFight = this.receiveDamagePlayer1(this.player2.attackPlayer2)
  //   return resultFight
  // }


}   