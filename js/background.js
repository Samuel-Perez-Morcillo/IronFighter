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
// Diego Cerezo
// 18:00
//     * {
//     margin: 0;
//     padding: 0;
// }
// #game - screen {
//     position: relative;
//     overflow: hidden;
//     background - image: url("../image/background-volcan.jpg");
//     background - size: 100 %;
//     background - position - y: 32 %;
//     background - repeat: no - repeat;
//     margin: 200px auto;
// }