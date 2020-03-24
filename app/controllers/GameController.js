import GameService from "../services/GameService.js"

let _gamerService = new GameService()

function draw() {
    document.getElementById("health").innerText = _gamerService.TargetHealth
}




export default class GameController {

    attack(attackName) {
        _gamerService.attack(attackName)
        draw()
    }

    shoot() {
        _gamerService.shoot()
        draw()
    }

    melee() {
        _gamerService.melee()
        draw()
    }

    rocketLauncher() {
        _gamerService.rocketLauncher()
        draw()
    }

    reset() {
        _gamerService.reset()
        draw()
    }
}