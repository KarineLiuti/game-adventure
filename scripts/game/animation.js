class Animation {
  constructor(matrix, imageObject, x, yVariation, widthObject, heightObject, spriteWidth, spriteHeight) {
    this.matrix = matrix;
    this.imageObject = imageObject;
    this.widthObject = widthObject;
    this.heightObject = heightObject;
    this.x = x;
    this.yVariation = yVariation;
    this.y = height - this.heightObject - yVariation;
    this.spriteSizeWidth = spriteWidth;
    this.spriteSizeHeight = spriteHeight;

    this.currentFrame = 0;
  }

  showElement(){
    image(
      this.imageObject, 
      this.x, this.y, 
      this.widthObject, this.heightObject, 
      this.matrix[this.currentFrame][0],
      this.matrix[this.currentFrame][1], 
      this.spriteSizeWidth, this.spriteSizeHeight, 
    );
    
    this.moveObject();
  }

  moveObject() {
    this.currentFrame++;

    if(this.currentFrame >= this.matrix.length -1) this.currentFrame = 0;
  }
}