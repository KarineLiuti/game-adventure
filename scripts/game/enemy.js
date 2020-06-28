class Enemy extends Animation {
  constructor(matrix, imageObject, x, yVariation, widthObject, heightObject, spriteWidth, spriteHeight, speedEnemy) {
    super(matrix, imageObject, x, yVariation, widthObject, heightObject, spriteWidth, spriteHeight)

    this.speedEnemy = speedEnemy;
    this.x = width;
  }

  move() {
    this.x = this.x - this.speedEnemy;
  }

  drawAgain() {
    this.x = width;
  }
}