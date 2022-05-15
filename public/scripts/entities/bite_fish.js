class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/bite_fish.gif';
    //this.imageUri = '/images/whale.png';
    this.type = 1; // fish can eat other fish
    /* this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0; */
    //this.eat();
  }

  updateOneTick() {
    super.updateOneTick();
    //console.log(this.position);
    let pos = this.position;
    let denizens = this.tank.getProximateDenizens(pos, 60);
    for (let den of denizens) {
      if( den.type === 0) {
        den.kill();
      }
      //console.log("Kill", den);
    }
    /* let pos = this.position;
    for (var id in denizens) {
      let denizen = denizens[id];
      let dPos = denizen.position;
      if (denizen.type === 0) {
        // Check overlap
        let x1 = pos.x;
        let y1 = pos.y + this.height;
        let x2 = pos.x + this.width;
        let y2 = pos.y;
        let x3 = dPos.x;
        let y3 = dPos.y + denizen.height;
        let x4 = dPos.y;
        let y4 = dPos.y;
        console.log("x1", x1, "y1", y1, "x2", x2, "y2", y2);
        console.log("x3", x3, "y3", y3, "x4", x4, "y4", y4);
        if ((x1 < x4) && (x3 < x2) && (y1 < y4) && (y3 < y2)) {
          console.log("Overlap");
          process.exit();
          //denizen.kill(denizen.id);
        }
     }
    } */
  }

  /* eat() {
    let denizens = this.tank.denizens
    let pos = this.position;
    for (var id in denizens) {
      let denizen = denizens[id];
      let dPos = denizen.position;
      if (denizen.type === 0) {
        console.log("This position", pos);
        console.log("Position", dPos);
        if (pos.x === dPos.x && pos.y === dPos.y) {
          denizen.kill(denizen.id);
        }
      }
    }
  } */
}
