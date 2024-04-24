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
  // fight: undefined,


  keysPlayer1: {

    JUMP: 'KeyW',
    LEFT: 'KeyA',
    RIGHT: 'KeyD',
    ATTACK: 'KeyJ',
    // MOVEJUMP: 'KeyW' && 'KeyD'

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

  },

  attackPlayer1() {

    if (

      this.hit1.hit1Pos.left + this.hit1.hit1Size.w > this.player2.player2Pos.left &&
      this.hit1.hit1Pos.left < this.player2.player2Pos.left + this.player2.player2Size.w &&
      this.hit1.hit1Pos.top < this.player2.player2Pos.top + this.player2.player2Size.h &&
      this.hit1.hit1Size.h + this.hit1.hit1Pos.top > this.player2.player2Pos.top
    ) {

      // console.log("P1", this.player1.player1Strength)
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

      console.log("P2", this.player2.player2Strength)
      return this.receiveDamagePlayer1()

    }
  },




  receiveDamagePlayer1() {

    if (this.player1.player1Health === 10) {

      alert("GAME OVER: PLAYER 2 WINS")

    } else {

      // let originalHealth = this.player1.player1Health
      this.player1.player1Health -= this.player2.player2Strength
      // const percentage = (this.player1.player1Health / originalHealth) * 100
      // console.log(this.movingHealthBar1(percentage))


    }
  },



  receiveDamagePlayer2() {

    if (this.player2.player2Health === 10) {

      alert("GAME OVER: PLAYER 1 WINS")

    } else {
      let originalHealth = 150
      console.log(originalHealth)
      this.player2.player2Health -= this.player1.player1Strength
      const percentage = (this.player2.player2Health / originalHealth) * 100
      console.log(percentage)
      this.movingHealthBar2(50)

    }
  },


  movingHealthBar1(percentage) {


    //document.querySelector('#healthBar1').style.width = `${percentage}%`


  },



  movingHealthBar2(percentage) {
    document.querySelector('.red-bar').style.width = `${percentage}%`
    //this.HealthProgress2Element.style.width = `${percentage}`
  },




  setEventListener() {

    document.onkeydown = event => {

      const { code } = event

      switch (code) {
        case this.keysPlayer1.LEFT:
          console.log('SE MUEVE IZQUIERDOSA')
          this.player1.moveLeftPlayer1()
          break
        case this.keysPlayer1.RIGHT:
          console.log('SE MUEVE A LA DERECHAAA')
          this.player1.moveRightPlayer1()
          break
        case this.keysPlayer1.JUMP:
          console.log('SALTAAAAAA SALTA CONMIGO')
          this.player1.jumpPlayer1()
          break
        case this.keysPlayer1.ATTACK:
          console.log('ay que te rajo')
          this.attackPlayer1()
          this.movingHealthBar1()
          break
        case this.keysPlayer2.LEFT2:
          console.log('WAKA WAKA EH EH')
          this.player2.moveLeftPlayer2()
          break
        case this.keysPlayer2.RIGHT2:
          console.log('TO THE RIGHT NOW YALL')
          this.player2.moveRightPlayer2()
          break
        case this.keysPlayer2.JUMP2:
          console.log('YO TAMBIEN SALTOOOO')
          this.player2.jumpPlayer2()
          break
        case this.keysPlayer2.ATTACK2:
          console.log('PIM PAM TOMA LACASITOS')
          this.attackPlayer2()
        // this.player1.moveLeftJumpt()
        // case this.keysPlayer1.ATTACK:
        //   this.player1.moveAttack()
        //   break
      }
    }
  },

  startGameLoop() {
    setInterval(() => {
      this.drawAll()
      // this.player1.attackPlayer2(this.player2.strength)
    }, 30)
  },

  drawAll() {
    this.player1.move()
    this.player2.move()
    this.hit1.updatePosition()
    this.hit2.updatePosition()
    this.healthBar1.updatePosition()

  },




}