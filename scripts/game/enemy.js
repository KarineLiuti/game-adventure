class Enemy extends Animation {
  constructor(matrix, imageObject, x, widthObject, heightObject, spriteWidth, spriteHeight) {
    super(matrix, imageObject, x, widthObject, heightObject, spriteWidth, spriteHeight)

    this.velocity = 8

  }

  move() {
    this.x = this.x - this.velocity;

    if(this.x < -this.widthObject) {
      this.x = width;
    }
  }
}