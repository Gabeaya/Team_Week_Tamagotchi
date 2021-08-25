export default class Tamagotchi {
  constructor() {
    this.hunger = 80;
    this.happiness = 100;
    this.energy = 100;
    this.hygiene = 80;
    this.boredom = 0;
    this.existentialDread = 0;
    this.age = 0;
    this.poop = false;
    this.day = true;
    this.dayLength = 112222; 
    this.lifeSpan = 240000;
    this.nap = false;
    this.state = "zoomer";
    this.timeSpeed = 20;
    let myself = this;
    
    function hungerTimer() {
      myself.hungerSubtractor();
    }
    
    function energyTimer() {
      myself.energrySubtractor();
    }
    

    let hungerTimerInterval = setInterval(hungerTimer, 5000);
    hungerTimerInterval; 
    setInterval(energyTimer, 10000 / this.timeSpeed);
  }

  hungerAdder() {
    this.hunger = 100;
  }

  hungerSubtractor() {
    this.hunger -= 10;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }

  happinessAdder() {
    if (this.happiness < 100) {
      this.happiness += 10;
    }
  }

  happinessSubtractor() {
    this.happiness -= 10;
  }

  energryAdder() {
    if (this.energy < 100) {
      this.energy += 10;
    }
  }

  energrySubtractor() {
    this.energy -= 10;
  }

  hygieneAdder() {
    if (this.hygiene < 100) {
      this.hygiene += 10;
    }
  }

  hygieneSubtractor() {
    this.hygiene -= 10;
  }
}
