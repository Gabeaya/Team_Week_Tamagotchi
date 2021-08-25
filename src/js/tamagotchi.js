export default class Tamagotchi {
  constructor() {
    this.feed = 100;
    this.play = 100;
    this.nap = 100;
    this.clean = 100;
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
  }
}