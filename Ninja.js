// create a Ninja class
// add attributes name, health, speed, strength
// add methods sayName(), showStats(), and drinkSake()
class Ninja {
    constructor(ninjaName, health=25) {
        this.ninjaName = ninjaName;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    //add a method: sayName() - This should log that Ninja's name to the console
    sayName() {
        console.log('My name is ' + this.ninjaName);
        return this;
    }
    //add a method: showStats() - This should show the Ninja's name, strength, speed, and health. 
    showStats() {
        console.log('Ninja Name is ' + this.ninjaName);
        console.log('Strength is: ' + this.strength);
        console.log('Speed is: ' + this.speed);
        console.log('Health is: ' + this.health);
        return this;
    }
    //add a method: drinkSake() - This should add +10 Health to the Ninja 
    drinkSake() {
        console.log(this.ninjaName + ' drank sake.');
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(ninjaName, health=200, wisdom=10){
    super(ninjaName, health);
    this.wisdom = wisdom;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two.");
        return this;
    }
}
const ninja1 = new Ninja("Slicer")
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();