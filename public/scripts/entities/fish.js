class Fish extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fish03.png';
    //this.images = ['/images/fish01.png', '/images/fish1.jpg', '/images/fish2.png', '/images/fish3.png'];
    this.maxSwimSpeed = 100;
    this.makeNewVelocity();
    this.isTasty = true;
    this.type = 0; // normal fish
  }

  get getType() {
    return this.type;
  }

  /* get imageUri() {
    let length = this.images.length;
    let ran = Math.floor(Math.random()*length);
    return this.images[ran];
  } */

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    var newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    }
    return newSpeed;
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }

  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.timeUntilSpeedChange = randRangeInt(5);
  }

}

