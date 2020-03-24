export default class Target {
    constructor(data) {
        console.log("This be complicated")
        this.health = 100
        this.hits = 0
        this.attacks = data.attacks
    }
}