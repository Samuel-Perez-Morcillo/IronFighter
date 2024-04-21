const Game = {

  gameScreen: document.querySelector("#game-screen"),


  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  player1: undefined,
  // this.player2 = undefined

  keysPlayer1: {

    JUMP: 'KeyW',
    LEFT: 'KeyA',
    RIGHT: 'KeyD',
    ATTACK: 'KeyJ'

  },

  // keysPlayer2 = {

  //   JUMP: 'ArrowUp',
  //   LEFT: 'ArrowLeft',
  //   RIGHT: 'ArrowRight',
  //   ATTACK: 'Space'
  // }



  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    // console.log(this.gameScreen)
    this.gameScreen.style.width = `${this.gameSize.w}px`       // CSS PROPERTIES TO TAKE INTO ACCOUNT
    this.gameScreen.style.height = `${this.gameSize.h}px`      // ALWAYS THE SAME AS WHEN IN CSS
  },

  start() {

    this.createElements()
    this.setEventListener()
    this.startGameLoop()

  },

  createElements() {
    this.player1 = new Player1(this.gameSize)
    // this.player2 = new Player2(this.gameSize)
  },

  setEventListener() {

    document.onkeydown = event => {
      const { code } = event
      switch (code) {
        case this.keysPlayer1.LEFT:
          console.log('SE MUEVE IZQUIERDOSA')
          this.player1.moveLeft()
          break
        case this.keysPlayer1.RIGHT:
          console.log('SE MUEVE A LA DERECHAAA')
          this.player1.moveRight()
          break
        case this.keysPlayer1.JUMP:
          console.log('SALTAAAAAA SALTA CONMIGO')
          this.player1.jump()
          break
        // case this.keysPlayer1.ATTACK:
        //   this.player1.moveAttack()
        //   break
      }
    }
  },

  startGameLoop() {
    setInterval(() => {
      this.drawAll()
    }, 25)
  },

  drawAll() {
    this.player1.move()
  }


}
