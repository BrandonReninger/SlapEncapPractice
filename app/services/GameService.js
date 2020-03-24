import Target from "../models/Target.js"

let _targetConfigObj = {
    health: 100,
    attacks: {
        shoot: 2,
        melee: 10,
        rocketLauncher: 50
    }
}

let _target = new Target(_targetConfigObj)






export default class GameService {

    attack(attackName) {
        _target.health -= _target.attacks[attackName]
        if (_target.health < 0) {
            _target.health = 0
        }
    }

    get TargetHealth() {
        return _target.health.toString()
    }

    shoot() {
        _target.health -= _target.attacks.shoot
    }

    melee() {
        _target.health -= _target.attacks.melee
    }

    rocketLauncher() {
        _target.health -= _target.attacks.rocketLauncher
    }

    reset() {
        _target.health = _target.health = 100
    }
}