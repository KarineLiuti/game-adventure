class Character extends Animation {
  constructor(matrixCharacter, imageObject, x, widthObject, heightObject, spriteWidth, spriteHeight) {
    super(matrixCharacter, imageObject, x, widthObject, heightObject, spriteWidth, spriteHeight)
    
    this.currentFrameCharacter = 0;
    this.startY = height - this.heightObject;
    this.y = this.startY;
    this.jumpSpeed = 0;
    this.gravity = 3;
  }

  jumpCharacter() {
    this.jumpSpeed = -30;
  }

  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if(this.y > this.startY)
      this.y = this.startY;
  }

  isCollisionOn(enemyObject) {
    const precision = 0.64;
    const didCollision = collideRectRect(
      this.x,
      this.y,
      this.widthObject * precision,
      this.heightObject * precision,
      enemyObject.x,
      enemyObject.y,
      enemyObject.widthObject * precision, 
      enemyObject.heightObject * precision
    )
    return didCollision;
  }
}