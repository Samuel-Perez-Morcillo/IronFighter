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
    console.log(this.background)
    this.player1 = new Player1(this.gameSize)
    this.player2 = new Player2(this.gameSize)

    this.hit1 = new Hit1(this.gameSize, this.player1)
    this.hit2 = new Hit2(this.gameSize, this.player2)

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
          this.player1.attackPlayer1()
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
          this.player2.attackPlayer2()
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
  },




}
