class Background {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.init()
    }
    init() {
        this.backgroundElement = document.createElement('img')
        this.backgroundElement.src = './img/background-fight-5.gif'

        this.backgroundElement.style.backgroundSize = `100%`
        this.backgroundElement.style.backgroundPositionY = `32%`
        this.backgroundElement.style.backgroundRepeat = `no-repeat`
        this.backgroundElement.style.margin = `200px auto`
        this.backgroundElement.style.width = `${this.gameSize.w}px`
        this.backgroundElement.style.height = `${this.gameSize.h}px`
        this.backgroundElement.style.left = `${this.gameScreen.left}px`
        this.backgroundElement.style.top = `${this.gameScreen.top}px`
        this.backgroundElement.style.margin = '0 auto'

        this.gameScreen.appendChild(this.backgroundElement)


    }
}
