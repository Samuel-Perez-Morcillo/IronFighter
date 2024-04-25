const Game = {

  gameScreen: document.querySelector("#game-screen"),


  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },


  player1: undefined,
  player2: undefined,
  hit1: undefined,
  hit2: undefined,
  background: undefined,
  healthBar1: undefined,
  healthBar2: undefined,
  endScreen1: undefined,
  endScreen2: undefined,


  keysPlayer1: {

    JUMP: 'KeyW',
    LEFT: 'KeyA',
    RIGHT: 'KeyD',
    ATTACK: 'KeyJ',

  },

  keysPlayer2: {

    JUMP2: 'ArrowUp',
    LEFT2: 'ArrowLeft',
    RIGHT2: 'ArrowRight',
    ATTACK2: 'Space'
  },


  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`       // CSS PROPERTIES TO TAKE INTO ACCOUNT
    this.gameScreen.style.height = `${this.gameSize.h}px`      // ALWAYS THE SAME AS WHEN IN CSS
  },

  start() {

    this.createElements()
    this.setEventListener()
    this.startGameLoop()
  },

  createElements() {
    this.background = new Background(this.gameScreen, this.gameSize)
    this.player1 = new Player1(this.gameSize)
    this.player2 = new Player2(this.gameSize)

    this.hit1 = new Hit1(this.gameSize, this.player1)
    this.hit2 = new Hit2(this.gameSize, this.player2)
    this.healthBar1 = new HealthBar1(this.gameSize, this.player1)
    this.healthBar2 = new HealthBar2(this.gameSize, this.player1)

    this.endScreen1 = new EndScreen1(this.gameScreen, this.gameSize, this.player1, this.player2)
    this.endScreen2 = new EndScreen2(this.gameScreen, this.gameSize, this.player1, this.player2)

  },


  attackPlayer1() {

    if (

      this.hit1.hit1Pos.left + this.hit1.hit1Size.w > this.player2.player2Pos.left &&
      this.hit1.hit1Pos.left < this.player2.player2Pos.left + this.player2.player2Size.w &&
      this.hit1.hit1Pos.top < this.player2.player2Pos.top + this.player2.player2Size.h &&
      this.hit1.hit1Size.h + this.hit1.hit1Pos.top > this.player2.player2Pos.top
    ) {

      this.player1.canAttack = false
      setTimeout(() => {
        this.player1.canAttack = true
      }, 1000)
      return this.receiveDamagePlayer2()

    }
  },


  attackPlayer2() {

    if (

      this.hit1.hit1Pos.left + this.hit1.hit1Size.w > this.player2.player2Pos.left &&
      this.hit1.hit1Pos.left < this.player2.player2Pos.left + this.player2.player2Size.w &&
      this.hit1.hit1Pos.top < this.player2.player2Pos.top + this.player2.player2Size.h &&
      this.hit1.hit1Size.h + this.hit1.hit1Pos.top > this.player2.player2Pos.top
    ) {

      this.player2.canAttack = false
      setTimeout(() => {
        this.player2.canAttack = true
      }, 1000)

      return this.receiveDamagePlayer1()

    }
  },


  receiveDamagePlayer1() {

    if (this.player1.player1Health != 0) {

      this.player1.player1Health -= this.player2.player2Strength
      this.updateHealthBar1()

    } else {

      this.endScreen2.endGame2()

    }
  },


  receiveDamagePlayer2() {

    if (this.player2.player2Health != 0) {

      this.player2.player2Health -= this.player1.player1Strength
      this.updateHealthBar2()

    } else {
      this.endScreen1.endGame1()
    }
  },


  updateHealthBar1() {
    const currentHealth = this.player1.player1Health
    document.querySelector('.red-bar').style.width = `${currentHealth}%`
  },


  updateHealthBar2() {
    const currentHealth = this.player2.player2Health
    document.querySelector('.blue-bar').style.width = `${currentHealth}%`
  },



  setEventListener() {

    document.onkeydown = event => {
      const { code } = event

      switch (code) {
        case this.keysPlayer1.LEFT:
          this.player1.moveLeftPlayer1()
          setTimeout(() => {
            document.querySelector('#player1').src = './img/jin_sprite_static.gif'
          }, 400)
          document.querySelector('#player1').src = './img/jin_sprite_walk.gif'
          break
        case this.keysPlayer1.RIGHT:
          this.player1.moveRightPlayer1()
          setTimeout(() => {
            document.querySelector('#player1').src = './img/jin_sprite_static.gif'
          }, 400)
          document.querySelector('#player1').src = './img/jin_sprite_walk.gif'
          break
        case this.keysPlayer1.JUMP:
          this.player1.jumpPlayer1()
          setTimeout(() => {
            document.querySelector('#player1').src = './img/jin_sprite_static.gif'
          }, 1000)
          document.querySelector('#player1').src = './img/jin_sprite_jump.gif'
          break
        case this.keysPlayer1.ATTACK:
          this.player1.canAttack && this.attackPlayer1()
          this.updateHealthBar2()
          setTimeout(() => {
            document.querySelector('#player1').src = './img/jin_sprite_static.gif'
          }, 1000)
          document.querySelector('#player1').src = './img/jin_sprite_attack.gif'
          break

        case this.keysPlayer2.LEFT2:
          this.player2.moveLeftPlayer2()
          setTimeout(() => {
            document.querySelector('#player2').src = './img/akria_sprite_static.gif'
          }, 200);
          document.querySelector('#player2').src = './img/akria_sprite_moving.gif'
          break
        case this.keysPlayer2.RIGHT2:
          this.player2.moveRightPlayer2()
          setTimeout(() => {
            document.querySelector('#player2').src = './img/akria_sprite_static.gif'
          }, 200);
          document.querySelector('#player2').src = './img/akria_sprite_moving.gif'
          break
        case this.keysPlayer2.JUMP2:
          this.player2.jumpPlayer2()
          setTimeout(() => {
            document.querySelector('#player2').src = './img/akria_sprite_static.gif'
          }, 1000);
          document.querySelector('#player2').src = './img/akria_sprite_jump.gif'
          break
        case this.keysPlayer2.ATTACK2:
          this.player2.canAttack && this.attackPlayer2()
          this.updateHealthBar1()
          setTimeout(() => {
            document.querySelector('#player2').src = './img/akria_sprite_static.gif'
          }, 1000)
          document.querySelector('#player2').src = './img/akria_sprite_attack.gif'
      }
    }
  },




  startGameLoop() {
    setInterval(() => {
      this.drawAll()
    }, 30)
  },

  drawAll() {
    this.player1.move()
    this.player2.move()
    this.hit1.updatePosition()
    this.hit2.updatePosition()

  },
}