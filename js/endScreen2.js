class EndScreen2 {

    constructor(gameScreen, gameSize, player1, player2) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.player1 = player1
        this.player2 = player2

        this.init()

    }

    init() {

        this.createElement()

    }

    createElement() {

        this.EndScreenElement = document.createElement('div')
        this.EndScreenElement.setAttribute('id', 'end-screen2')

        this.gameOverElement = document.createElement('img')
        this.gameOverElement.setAttribute('id', 'game-over')
        this.gameOverElement.src = './img/gameover.png'

        this.buttonElement = document.createElement('button')
        this.buttonElement.setAttribute('type', 'button')
        this.buttonElement.setAttribute('onClick', 'window.location.reload();')

        this.phraseElement = document.createElement('h2')


        this.EndScreenElement.style.backgroundColor = 'black'
        this.EndScreenElement.style.borderRadius = '35px'
        this.EndScreenElement.style.opacity = '0px'
        this.EndScreenElement.style.position = 'absolute'
        this.EndScreenElement.style.width = '855px'
        this.EndScreenElement.style.height = '500px'
        this.EndScreenElement.style.top = '210px'
        this.EndScreenElement.style.left = '535px'
        this.EndScreenElement.style.display = 'none'

        this.gameOverElement.style.position = 'absolute'
        this.gameOverElement.style.width = '600px'
        this.gameOverElement.style.height = '316px'
        this.gameOverElement.style.top = '-50px'
        this.gameOverElement.style.left = '140px'
        this.gameOverElement.style.display = 'none'

        this.buttonElement.innerText = 'RESTART'
        this.buttonElement.style.fontSize = '30px'
        this.buttonElement.style.fontStyle = 'bold'
        this.buttonElement.style.fontFamily = 'monospace'
        this.buttonElement.style.position = 'absolute'
        this.buttonElement.style.borderRadius = '20px'
        this.buttonElement.style.width = '340px'
        this.buttonElement.style.height = '85px'
        this.buttonElement.style.top = '320px'
        this.buttonElement.style.left = '255px'
        this.buttonElement.style.boxShadow = '20px'
        this.buttonElement.style.display = 'none'

        this.phraseElement.innerText = 'PLAYER 2 WINS'
        this.phraseElement.style.position = 'absolute'
        this.phraseElement.style.color = 'blue'
        this.phraseElement.style.fontSize = '40px'
        this.phraseElement.style.fontStyle = 'bold'
        this.phraseElement.style.fontFamily = 'monospace'
        this.phraseElement.style.width = '450px'
        this.phraseElement.style.height = '150px'
        this.phraseElement.style.top = '190px'
        this.phraseElement.style.left = '285px'
        this.phraseElement.style.display = 'none'


        document.querySelector('#game-screen').appendChild(this.EndScreenElement)
        document.querySelector('#end-screen2').appendChild(this.gameOverElement)
        document.querySelector('#end-screen2').appendChild(this.buttonElement)
        document.querySelector('#end-screen2').appendChild(this.phraseElement)

    }

    endGame2() {

        this.EndScreenElement.style.display = 'block'
        this.gameOverElement.style.display = 'block'
        this.buttonElement.style.display = 'block'
        this.phraseElement.style.display = 'block'

    }

}