class Player1 {

  constructor(gameSize) {

    this.gameSize = gameSize
    // console.log(gameSize)

    this.player1Size = {
      w: 600,
      h: 400
    }
    // console.log(this.player1Size)

    this.player1Pos = {
      left: this.gameSize.w / 25,
      top: this.gameSize.h - this.player1Size.h - 55,
      base: this.gameSize.h - this.player1Size.h - 55
    }
    // console.log(this.player1Pos)

    this.player1Speed = {
      top: 20,
      left: 40,
      gravity: 1.2
    }

    this.player1Strength = 10
    this.player1Health = 100
    // console.log(this.player1Health),

    this.canAttack = true

    this.init()
  }



  init() {

    this.player1Element = document.createElement('img')
    this.player1Element.setAttribute('id', 'player1')
    this.player1Element.src = './img/jin_sprite_static.gif'

    this.player1Element.style.position = 'absolute'
    this.player1Element.style.width = `${this.player1Size.w}px`
    this.player1Element.style.height = `${this.player1Size.h}px`
    this.player1Element.style.top = `${this.player1Pos.top}px`
    this.player1Element.style.left = `${this.player1Pos.left}px`

    document.querySelector("#game-screen").appendChild(this.player1Element)

  }

  move() {

    this.pullGravity()
    this.checkBorderLimit()
    this.updatePositionPlayer1()

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


  checkBorderLimit() {

    if (this.player1Pos.left <= 0) {
      this.leftLimit()
    }

    if (this.player1Pos.left >= this.gameSize.w - this.player1Size.w) {
      this.rightLimit()
    }
  }








}   