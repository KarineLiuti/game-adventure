class Character extends Animation {
  constructor(matrixCharacter, imageObject, x, yVariation, widthObject, heightObject, spriteWidth, spriteHeight) {
    super(matrixCharacter, imageObject, x, yVariation, widthObject, heightObject, spriteWidth, spriteHeight)
    
    this.yVariation = yVariation;
    this.currentFrameCharacter = 0;
    this.startY = height - this.heightObject - yVariation;
    this.y = this.startY;
    this.jumpSpeed = 0;
    this.jumpHeight = -50,
    this.gravity = 6;
    this.jumps = 0;
  }

  jumpCharacter() {
    if(this.jumps < 2) {
      this.jumpSpeed = this.jumpHeight;
      this.jumps++;
    }
  }

  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if(this.y > this.startY) {
      this.y = this.startY;
      this.jumps = 0;
    }
  }

  isCollisionOn(enemyObject) {
    const precision = 0.65;
    
    // this.verifyObjectsArea(precision, enemyObject);

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

  verifyObjectsArea(precision, enemyObject) {
    noFill();
    rect(this.x,
      this.y,
      this.widthObject * precision,
      this.heightObject * precision);

    rect(enemyObject.x,
      enemyObject.y,
      enemyObject.widthObject * precision,
      enemyObject.heightObject * precision);
  }
}