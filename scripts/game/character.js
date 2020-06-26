class Character {
  constructor(characterImage) {
    this.scenarioPosition = {
      x: 0,
      y: height - 135
    };
    this.sizePerFrameFromOriginalImage = {
      width:220,
      heigth: 270
    }
    this.characterSize = {
      width:110,
      heigth: 135
    }
    this.characterImage = characterImage;
    this.matrix = [
      [0, 0], 
      [220, 0], 
      [440, 0], 
      [660, 0], 
      [0, 270], 
      [220, 270], 
      [440, 270], 
      [660, 270], 
      [0, 540], 
      [220, 540], 
      [440, 540], 
      [660, 540], 
      [0, 810], 
      [220, 810], 
      [440, 810], 
      [660, 810]
    ];
    this.currentFrameCharacter = 0;
  }
  
  show(){
    image(
      this.characterImage, 
      this.scenarioPosition.x, this.scenarioPosition.y, 
      this.characterSize.width, this.characterSize.heigth, 
      this.matrix[this.currentFrameCharacter][0],
      this.matrix[this.currentFrameCharacter][1], 
      this.sizePerFrameFromOriginalImage.width, this.sizePerFrameFromOriginalImage.heigth
    );
    
    this.moveCharacter();
  }
  
  moveCharacter() {
    this.currentFrameCharacter++;
    
    if(this.currentFrameCharacter >= this.matrix.length -1){
      this.currentFrameCharacter = 0;
    }
  }
}