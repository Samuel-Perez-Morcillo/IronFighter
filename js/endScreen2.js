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

        // Styles for centering elements
        this.EndScreenElement.style.display = 'flex'
        this.EndScreenElement.style.flexDirection = 'column'
        this.EndScreenElement.style.justifyContent = 'center'
        this.EndScreenElement.style.alignItems = 'center'
        this.EndScreenElement.style.backgroundColor = 'black'
        this.EndScreenElement.style.borderRadius = '35px'
        this.EndScreenElement.style.position = 'absolute'
        this.EndScreenElement.style.top = '50%'
        this.EndScreenElement.style.left = '50%'
        this.EndScreenElement.style.transform = 'translate(-50%, -50%)'
        this.EndScreenElement.style.width = '855px'
        this.EndScreenElement.style.height = '500px'
        this.EndScreenElement.style.display = 'none'

        this.gameOverElement.style.width = '600px'
        this.gameOverElement.style.height = '316px'
        this.gameOverElement.style.display = 'none'

        this.buttonElement.innerText = 'RESTART'
        this.buttonElement.style.fontSize = '30px'
        this.buttonElement.style.fontWeight = 'bold'
        this.buttonElement.style.fontFamily = 'monospace'
        this.buttonElement.style.borderRadius = '20px'
        this.buttonElement.style.width = '340px'
        this.buttonElement.style.height = '85px'
        this.buttonElement.style.marginTop = '20px'
        this.buttonElement.style.display = 'none'

        this.phraseElement.innerText = 'PLAYER 2 WINS'
        this.phraseElement.style.color = 'blue'
        this.phraseElement.style.fontSize = '40px'
        this.phraseElement.style.fontWeight = 'bold'
        this.phraseElement.style.fontFamily = 'monospace'
        this.phraseElement.style.display = 'none'

        this.EndScreenElement.appendChild(this.gameOverElement)
        this.EndScreenElement.appendChild(this.phraseElement)
        this.EndScreenElement.appendChild(this.buttonElement)

        document.querySelector('#game-screen').appendChild(this.EndScreenElement)
    }

    endGame2() {
        this.EndScreenElement.style.display = 'flex'
        this.gameOverElement.style.display = 'block'
        this.buttonElement.style.display = 'block'
        this.phraseElement.style.display = 'block'
    }
}
