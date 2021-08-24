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
    this.dayLength = 112222; //Figure out how to determine day and night. Needs to flip to 0 and start again.
    this.lifeSpan = 240000; //4 minute lifespan for demo.
    this.nap = false;
    this.state = "zoomer";
    this.timeSpeed = 20;
    let myself = this;
    
    // function dayTimer() {

    // }

    function hungerTimer() {
      myself.hungerSubtractor();
    }
    
    // function happinessTimer() {
    // myself.happinessSubtractor();
    // }
    
    function energyTimer() {
      myself.energrySubtractor();
    }
    
    // function poopTimer() {
    //   myself.
    // }

    var hungerTimerInterval = setInterval(hungerTimer, 1000);
    hungerTimerInterval;
    // setInterval(happinessTimer, 10000 / this.timeSpeed) Happiness should be set by other factors rather than time. i.e. boredom, energy, hygiene, 
    setInterval(energyTimer, 10000 / this.timeSpeed);
  }

  hungerAdder() {
    this.hunger = 100;
  }

  hungerSubtractor() {
    this.hunger -= 10;
    if (this.hunger < 0) {
      this.hunger = 0;
      // clearInterval(hungerTimerInterval);
      // death()
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
