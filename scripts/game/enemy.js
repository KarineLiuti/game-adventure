class Enemy extends Animation {
  constructor(matrix, imageObject, x, yVariation, widthObject, heightObject, spriteWidth, spriteHeight, speedEnemy, delayEnemy) {
    super(matrix, imageObject, x, yVariation, widthObject, heightObject, spriteWidth, spriteHeight)

    this.speedEnemy = speedEnemy;
    this.delayEnemy = delayEnemy;

  }

  move() {
    this.x = this.x - this.speedEnemy;

    if(this.x < -this.widthObject - this.delayEnemy) {
      this.x = width;
    }
  }
}