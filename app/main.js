import GameController from "./controllers/GameController.js"



class App {
    constructor() {
        console.log("hello from main js")
        this.gameController = new GameController()
    }
}


window["app"] = new App