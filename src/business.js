export default class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 80;
    this.happiness = 100;
    this.energy = 100;
    this.hygiene = 80;
    this.existentialDread = 0;
    this.age = 0;
    this.poop = false;
    this.timePeriod = timePeriod;
    this.nap = false;
    this.state = "zoomer";
  }
  
feed() {
  while (this.hunger < 100) {
    this.hunger += 20;
    }
  }
}
