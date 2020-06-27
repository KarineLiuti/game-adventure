class Character extends Animation {
  constructor(matrixCharacter, imageObject, x, widthObject, heightObject, spriteWidth, spriteHeight) {
    super(matrixCharacter, imageObject, x, widthObject, heightObject, spriteWidth, spriteHeight)
    
    this.currentFrameCharacter = 0;
  }
}