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
    this.timePeriod = 100000;
    this.nap = false;
    this.state = "zoomer";
    this.interval = interval;
    let myself = this;
    
    function hungerTimer() {
    myself.hungerSubtractor();
    }
    function happinessTimer() {
    myself.happinessSubtractor();
    }
    function energyTimer() {
    myself.energrySubtractor();
    }
    
    // function poopTimer() {
    //   myself.
    // }

    setInterval(hungerTimer, 10000)
    setInterval(happinessTimer, 10000)
    setInterval(energyTimer, 10000)
  }

hungerAdder() {
  if (this.hunger < 100) {
    this.hunger += 10;
    }
  }

hungerSubtractor() {  
  this.hunger -= 10;
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
}

hygieneAdder() {
  if (this.hygiene < 100) {
    this.hygiene += 10;
  }
}


// /* this.interval = setInterval(function () {
//   me.updateCountdown();
// }, 1000)