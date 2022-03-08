// create a Ninja class
// add attributes name, health, speed, strength
// add methods sayName(), showStats(), and drinkSake()
class Ninja {
    constructor(ninjaName) {
        this.ninjaName = ninjaName;
        this.health = 25;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.ninjaName);
    }
    showStats() {
        console.log(this.ninjaName, this.strength, this.speed, this.health);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}
const ninja1 = new Ninja("Slicer")
ninja1.sayName();
ninja1.showStats();